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
      <SubMenu key="dashboard" icon={<FeatherIcon icon="home" />} title="Dashboard">
        {/* <Menu.Item key="home">
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Social Media
          </NavLink>
        </Menu.Item>
        <Menu.Item key="business">
          <NavLink onClick={toggleCollapsed} to={`${path}/business`}>
            Fintech / Business
          </NavLink>
        </Menu.Item>
        <Menu.Item key="performance">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Site Performance
          </NavLink>
        </Menu.Item>
        <Menu.Item key="ecommerce">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce`}>
            Ecommerce
          </NavLink>
        </Menu.Item> */}
      </SubMenu>

      <SubMenu key="product" icon={<FeatherIcon icon="shopping-cart" />} title="Product">
        <Menu.Item key="products">
          <NavLink onClick={toggleCollapsed} to={`${path}/product/products`}>
            Products
          </NavLink>
        </Menu.Item>
        <Menu.Item key="productDetails">
          <NavLink onClick={toggleCollapsed} to={`${path}/product/productDetails/1`}>
            Product detail
          </NavLink>
        </Menu.Item>

        <Menu.Item key="add-product">
          <NavLink onClick={toggleCollapsed} to={`${path}/product/add-product`}>
            Product Add
          </NavLink>
        </Menu.Item>

        <Menu.Item key="edit-product">
          <NavLink onClick={toggleCollapsed} to={`${path}/product/edit-product`}>
            Product Edit
          </NavLink>
        </Menu.Item>
        {/* <Menu.Item key="18">Transactions</Menu.Item> */}
      </SubMenu>
    </Menu>
  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
