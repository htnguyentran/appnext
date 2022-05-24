import "antd/dist/antd.css";
import MyBreadcrumb from "../components/navigation/MyBreadcrumb";
import MyStatistic from "../components/dataDisplay/MyStatistic";
import * as api from "./api/index";
import { Layout, Menu, Breadcrumb, MenuProps, Empty } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("List Customer ", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const Index = () => {
  const [collapsed, setCollapse] = useState(false);
  const onCollapse = () => {
    setCollapse((current) => !current);
  };
  const loadTable = async () => {
    try {
      const param = {name : 'thong'};
      const result = await api.Search(param);
      
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    async function fetch() {
      await loadTable();
    }
    fetch();
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <MyBreadcrumb></MyBreadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <MyStatistic></MyStatistic>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Gara Tson ©2022 Created by Ant Thongnt
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Index;
