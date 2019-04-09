import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Icon, message, Row, Col, Button, Menu, Dropdown, Tabs, Steps, Badge,
  Form, Select, InputNumber, Radio, Slider, Upload, Rate,
} from 'antd';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import pathToRegexp from 'path-to-regexp';
import { enquireScreen, unenquireScreen } from '../utils/enquireHelper';
import { Redirect, Switch } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import SideMenu from '../components/SideMenu';
import { getMenuData } from '../common/menu';
import { getRoutes } from '../utils/utils';
import Authorized from '../utils/Authorized';
import PageHeaderLayout from '../layouts/PageHeaderLayout';
import NotFound from '../pages/Exception/404';
// images imports
import logo from '../images/logo.png';
import userIcon from '../images/user.png';

const { Content, Header, Footer, Sider } = Layout;

const ButtonGroup = Button.Group;
const Step = Steps.Step;
const { AuthorizedRoute, check } = Authorized;

const TabPane = Tabs.TabPane;
function callback(key) {
}

const handleMenuClick = e => {
};

const actionMenu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" disabled><Icon type="edit" />Edit</Menu.Item>
    <Menu.Item key="2"><Icon type="close" />Cancel</Menu.Item>
    <Menu.Item key="3"><Icon type="delete" />Delete</Menu.Item>
    <Menu.Divider></Menu.Divider>
    <Menu.Item key="4"><Icon type="printer" />Print List</Menu.Item>
    <Menu.Item key="5"><Icon type="printer" />Print Summary</Menu.Item>
    <Menu.Divider></Menu.Divider>
    <Menu.Item key="6"><Icon type="swap-right" />Assign</Menu.Item>
    <Menu.Item key="7"><Icon type="check" />Approve</Menu.Item>
    <Menu.Item key="8"><Icon type="check-square-o" />Approve & Assign</Menu.Item>
    <Menu.Item key="9"><Icon type="close-circle-o" />Reject</Menu.Item>
    <Menu.Item key="10"><Icon type="pause" />Put on Hold</Menu.Item>

  </Menu>
);

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

class LoginLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  };

  state = {
    isMobile,
    collapsed: false,
  };

  getChildContext() {
    return {
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
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }

  getPageTitle() {
    return 'TITLE';
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
        item => check(routerData[item].authority, item) && item !== '/'
      );
      return authorizedPath;
    }
    return redirect;
  };

  handleMenuCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const {
      fetchingNotices,
      notices,
      match,
      location,
    } = this.props;
    const currentUser = { name: "Admin", role: "Administrator", avatar: userIcon }
    const routerData = {};

    const { isMobile: mb } = this.state;
    const baseRedirect = this.getBaseRedirect();

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
        <Layout style={{ padding: '0px 4px' }}>
          <Header style={{ padding: '0px' }}>
            <GlobalHeader style={{ paddingLeft: '50px' }}
              logo={logo}
              currentUser={currentUser}
              fetchingNotices={fetchingNotices}
              notices={notices}
              isMobile={mb}
            />
          </Header>




     {/* const {
      currentUser,
      collapsed,
      fetchingNotices,
      notices,
      routerData,
      match,
      location,
    } = this.props;
    const { isMobile: mb } = this.state;
    const baseRedirect = this.getBaseRedirect();
    const layout = (
      <Layout>
        <SideMenu
          logo={logo}
          Authorized={Authorized}
          menuData={getMenuData()}
          collapsed={collapsed}
          location={location}
          isMobile={mb}
          onCollapse={this.handleMenuCollapse}
        />
        <Layout>
          <Header style={{ padding: 0 }}>
            <GlobalHeader
              logo={logo}
              currentUser={currentUser}
              fetchingNotices={fetchingNotices}
              notices={notices}
              collapsed={collapsed}
              isMobile={mb}
              onNoticeClear={this.handleNoticeClear}
              onCollapse={this.handleMenuCollapse}
              onMenuClick={this.handleMenuClick}
              onNoticeVisibleChange={this.handleNoticeVisibleChange}
            />
          </Header>
 */}


          <PageHeaderLayout style={{ margin: '0px' }} />
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
              {redirectData.map(item => (
                <Redirect key={item.from} exact from={item.from} to={item.to} />
              ))}
              {getRoutes(match.path, routerData).map(item => (
                <AuthorizedRoute
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                  authority={item.authority}
                  redirectPath="/exception/403"
                />
              ))}
              <BrowserRouter>
                <Fragment>
                  <Redirect exact from="/" to={baseRedirect} />

                  <Route render={NotFound} />
                </Fragment>
              </BrowserRouter>
            </Switch>
          </Content>
          <Footer style={{ padding: 0, borderTop: '1px solid #ddd', botton: "0px", display: "relative", margin: '0px -6px' }}>
            <GlobalFooter
              copyright={
                <Fragment>
                  Copyright <Icon type="copyright" /> 2018
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

export default connect(({ user, global = {}, loading }) => ({
  currentUser: {},
  notices: [],
  routerData: {},
}))(LoginLayout);
