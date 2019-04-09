import 'rc-drawer/assets/index.css';
import React from 'react';
import DrawerMenu from 'rc-drawer';
import SideMenu from './SideMenu';

const SideMenuWrapper = props => {
  const { isMobile, collapsed } = props;
  return isMobile ? (
    <DrawerMenu
      getContainer={null}
      level={null}
      handleChild={<i className="drawer-handle-icon" />}
      onHandleClick={() => {
        props.onCollapse(!collapsed);
      }}
      open={!collapsed}
      onMaskClick={() => {
        props.onCollapse(true);
      }}
    >
      <SideMenu {...props} collapsed={isMobile ? false : collapsed} />
    </DrawerMenu>
  ) : (
    <SideMenu {...props} />
  );
};

export default SideMenuWrapper;
