import React from 'react';
import { Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';

const { SubMenu } = Menu;

const MenuItems = ({ darkMode, toggleCollapsed }) => {
  const { path } = useRouteMatch();
  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  return (
    <Menu
      mode="inline"
      theme={darkMode && 'dark'}
      // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={[
        `${mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]}`,
      ]}
      defaultOpenKeys={[`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`]}
    >
      <SubMenu key="seller" icon={<FeatherIcon icon="home" />} title="Seller">
        <Menu.Item key="home">
          <NavLink onClick={toggleCollapsed} to={`${path}/sellers`}>
            View Seller
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="Users" icon={<FeatherIcon icon="home" />} title="Users">
        <Menu.Item key="home">
          <NavLink onClick={toggleCollapsed} to={`${path}/users`}>
              View Users
          </NavLink>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
