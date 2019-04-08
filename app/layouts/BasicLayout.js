import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon } from 'antd';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
// import routerRedux from 'react-router-redux';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
// import pathToRegexp from 'path-to-regexp';
import { enquireScreen, unenquireScreen } from '../utils/enquireHelper';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import SideMenu from '../components/SideMenu';
import { getMenuData } from '../common/menu';
import PageHeaderLayout from '../layouts/PageHeaderLayout';
import styles from './PageHeaderLayout.less';
import { getLoggedInUser } from '../common/commonConsts';

// images imports
import logo from '../images/logo.png';
import userIcon from '../images/user.png';

const { Content, Header, Footer } = Layout;

const redirectData = [];
const getRedirect = item => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `${item.path}`,
        to: `${item.children[0].path}`,
      });
      item.children.forEach(children => {
        getRedirect(children);
      });
    }
  }
};
getMenuData().forEach(getRedirect);

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class BasicLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  };

  state = {
    isMobile,
    collapsed: false,
    pageTitle: '',
  };

  getChildContext() {
    return {
      // eslint-disable-next-line no-restricted-globals
      location,
      breadcrumbNameMap: {},
    };
  }

  componentDidMount() {
    this.enquireHandler = enquireScreen(mobile => {
      this.setState({
        isMobile: mobile,
      });
    });
    // if (getLoggedInUser() === null) {
    //   this.props.history.push('/');
    // }
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }

  getPageTitle() {
    return this.state.pageTitle;
  }

  getBaseRedirect = () => {
    const urlParams = new URL(window.location.href);

    const redirect = urlParams.searchParams.get('redirect');
    // Remove the parameters in the url
    if (redirect) {
      urlParams.searchParams.delete('redirect');
      window.history.replaceState(null, 'redirect', urlParams.href);
    } else {
      const { routerData } = this.props;
      // get the first authorized route path in routerData
      const authorizedPath = Object.keys(routerData).find(
        item => check(routerData[item].authority, item) && item !== '/',
      );
      return authorizedPath;
    }
    return redirect;
  };

  handleMenuCollapse = collapsed => {
    this.setState({ collapsed });
  };

  // all Side Nav Menu based Routes
  getNavMenuRoutes = menusData => {
    if (!menusData) {
      return [];
    }
    return menusData.map(item => {
      if (item.children && item.children.some(child => child.name)) {
        return item.children.map(items => (
          <Route
            path={items.path}
            component={items.component}
            key={items.name}
          />
        ));
      }
      return (
        <Route path={item.path} component={item.component} key={item.name} />
      );
    });
  };
  handleMenuClick = ({ key }) => {
    // const { dispatch } = this.props;
    if (key === 'triggerError') {
      // dispatch(routerRedux.push('/exception/trigger'));
      return;
    }
    if (key === 'logout') {
      this.props.history.push('/');
      // dispatch(routerRedux.push({ pathname: '/', })
    }
  };
  render() {
    const { fetchingNotices, notices, location } = this.props;

    const currentUser = {
      // name: 'Admin',
      // role: 'Administrator',
      avatar: userIcon,
    };
    // const routerData = {};

    const { isMobile: mb } = this.state;
    // const baseRedirect = this.getBaseRedirect();
    const layout = (
      <Layout>
        <SideMenu
          logo={logo}
          menuData={getMenuData()}
          collapsed={this.state.collapsed}
          location={location}
          isMobile={mb}
          onCollapse={this.handleMenuCollapse}
        />
        <Layout>
          <Header
            style={{ padding: '0px', lineHeight: '0px',  }}
          >
            <GlobalHeader
              style={{ paddingLeft: '50px' }}
              logo={logo}
              currentUser={currentUser}
              fetchingNotices={fetchingNotices}
              notices={notices}
              isMobile={mb}
              onMenuClick={this.handleMenuClick}
            />
            <PageHeaderLayout className={styles.pagehead} />
          </Header>

          <Content
            style={{
              height: '0vh',
              padding: '4px 0px',
              margin: 0,
              minHeight: 280,
              overflow: 'auto',
            }}
          >
            <Switch style={{ height: '60vh' }}>
              {this.getNavMenuRoutes(getMenuData())}
            </Switch>
          </Content>

          <Footer style={{ padding: '0px', borderTop: '1px solid #ddd' }}>
            <GlobalFooter
              copyright={
                <Fragment>
                  Copyright <Icon type="copyright" /> 2019
                </Fragment>
              }
            />
          </Footer>
        </Layout>
      </Layout>
    );
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.getPageTitle()}</title>
        </Helmet>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </Fragment>
    );
  }
}

BasicLayout.propTypes = {
  routerData: PropTypes.any,
  history: PropTypes.any,
  fetchingNotices: PropTypes.any,
  notices: PropTypes.any,
  location: PropTypes.any,
};

export default connect(() => ({
  currentUser: {},
  notices: [],
  routerData: {},
}))(BasicLayout);
