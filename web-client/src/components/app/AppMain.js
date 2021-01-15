import React from "react";
import AppHeader from "./AppHeader";

// UI Components
import "antd/dist/antd.css";
import "./css/Styles.css";

import { Layout, Breadcrumb } from "antd";
const { Content, Footer } = Layout;

const AppMain = () => {
  return (
    <Layout style={{ padding: 0 }}>
      <AppHeader />
      <Content className="site-layout" style={{ padding: "0 50px", marginTop: 64 }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>ZBlock©2021</Footer>
    </Layout>
  );
};

export default AppMain;
