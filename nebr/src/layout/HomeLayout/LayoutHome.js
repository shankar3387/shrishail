import React from 'react';
import { Layout } from 'antd';
import HomeHeader from './Header/Header';
import Footer from './footer/footer'
import './LayoutHome.css';

const {Sider, Content } = Layout;
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
          <Footer />
        </Layout>
      </div>
    );
  };
};

export default LayoutHome;
