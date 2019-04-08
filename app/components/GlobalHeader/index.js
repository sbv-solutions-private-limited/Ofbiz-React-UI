import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu, Icon, Spin, Tag, Dropdown, Avatar, Tooltip } from 'antd';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import Debounce from 'lodash-decorators/debounce';
// import { Link } from 'react-router-dom';
import NoticeIcon from '../NoticeIcon';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import { LoggedIn } from './../../common/commonConsts';
// import user from '../../images/user.png';
// import * as commonConsts from '../../common/commonConsts';

class GlobalHeader extends PureComponent {
  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }

  getNoticeData() {
    const { notices } = this.props;
    if (notices == null || notices.length === 0) {
      return {};
    }
    const newNotices = notices.map(notice => {
      const newNotice = { ...notice };
      if (newNotice.datetime) {
        newNotice.datetime = moment(notice.datetime).fromNow();
      }
      // transform id to item key
      if (newNotice.id) {
        newNotice.key = newNotice.id;
      }
      if (newNotice.extra && newNotice.status) {
        const color = {
          todo: '',
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        }[newNotice.status];
        newNotice.extra = (
          <Tag color={color} style={{ marginRight: 0 }}>
            {newNotice.extra}
          </Tag>
        );
      }
      return newNotice;
    });
    return groupBy(newNotices, 'type');
  }

  // /* eslint-disable*/
  @Debounce(600)
  triggerResizeEvent() {
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }

  render() {
    const {
      currentUser = {},
      fetchingNotices,
      onNoticeVisibleChange,
      onMenuClick,
      onNoticeClear,
      loginResponseData,
    } = this.props;
    // LoggedIn(loginResponseData);
    // console.log('loginResponseData:', loginResponseData);

    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item disabled>
          <Icon type="user" />Profile
        </Menu.Item>
        <Menu.Item disabled>
          <Icon type="setting" />Settings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />Sign Out
        </Menu.Item>
      </Menu>
    );
    const noticeData = this.getNoticeData();
    return (
      <div className={styles.header}>
        <HeaderSearch
          className={`${styles.action} ${styles.search}`}
          placeholder="search"
          dataSource={['ABC', 'DEF', 'GHI']}
          onSearch={() => {}}
          onPressEnter={() => {}} 
        />
        <div className={styles.right}>
          {/* <Tooltip title="Blank">
            <a href="#" rel="noopener noreferrer" className={styles.action}>
              <Icon  type="question-circle-o" />
            </a>
          </Tooltip> */}
          {/* <NoticeIcon
            className={styles.action}
            count={currentUser.notifyCount}
            onItemClick={() => {}}
            onClear={onNoticeClear}
            onPopupVisibleChange={onNoticeVisibleChange}
            loading={fetchingNotices}
            popupAlign={{ offset: [20, -16] }}
          >
            <NoticeIcon.Tab
              list={noticeData['通知']}
              title="通知"
              emptyText="你已查看所有通知"
              emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
            />
            <NoticeIcon.Tab
              list={noticeData['消息']}
              title="消息"
              emptyText="您已读完所有消息"
              emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
            />
            <NoticeIcon.Tab
              list={noticeData['待办']}
              title="待办"
              emptyText="你已完成所有待办"
              emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
            />
          </NoticeIcon> */}
          {!loginResponseData.name ? (
            <Dropdown overlay={menu}>
              <span className={`${styles.action} ${styles.account}`}>
                <span style={{ display: 'inline-grid' }}>
                  <span className={styles.name}>{loginResponseData.name}</span>
                  <span className={styles.role}>{loginResponseData.role}</span>
                </span>
                <Avatar
                  style={{ marginLeft: '10px', marginRight: '0px' }}
                  size="small"
                  className={styles.avatar}
                  src={currentUser.avatar}
                />
              </span>
            </Dropdown>)
           : (
            <Spin size="small" style={{ marginLeft: 8,marginTop:'14px' }} />
          )
          }
        </div>
      </div>
    );
  }
}

GlobalHeader.propTypes = {
  notices: PropTypes.any,
  currentUser: PropTypes.any,
  fetchingNotices: PropTypes.any,
  onNoticeVisibleChange: PropTypes.any,
  onMenuClick: PropTypes.any,
  onNoticeClear: PropTypes.any,
  loginResponseData: PropTypes.any,
};

// export default GlobalHeader;
export default connect(({ login }) => ({
  loginResponseData: login.reducerLogin.data || [],
}))(GlobalHeader);
