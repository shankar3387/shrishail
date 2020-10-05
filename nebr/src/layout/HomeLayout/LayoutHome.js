import React from 'react';
import { Layout } from 'antd';
import HomeHeader from './Header/Header';
import './LayoutHome.css';

const {Footer, Sider, Content } = Layout;
// import { Aside, Content } from './overview/style';
// import './Header/header.css';
// import 'boostra'
const LayoutHome = WraperContent => {
  return () => {
    return (
      <div>
        <Layout className="layout">
          <HomeHeader />
          <Content>
            <WraperContent />
          </Content>
        </Layout>
      </div>
    );
  };
};

export default LayoutHome;
