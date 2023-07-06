import React, { useState } from "react";
import "./layout.css";
import {
  BarChartOutlined,
  HeartFilled,
  HomeFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingFilled,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import UserProfileBox from "./../components/UserProfileBox";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const user = {
  name: "John Doe",
  email: "johndoe@example.com",
  avatarUrl: "https://example.com/avatar.jpg",
};

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const items1 = [
    {
      key: 1,
      icon: <UserOutlined />,
      children: null,
      label: "Perfil",
      type: null,
      onClick: () => navigate("/"),
    },
    {
      key: 2,
      icon: <HomeFilled />,
      children: null,
      label: "Reportar",
      type: null,
      onClick: () => navigate("/reportes"),
    },
    {
      key: 3,
      icon: <BarChartOutlined />,
      children: null,
      label: "Indicadores",
      type: null,
      onClick: () => navigate("/indicadores"),
    },
    {
      key: 4,
      icon: <HeartFilled />,
      children: null,
      label: "Puntos",
      onClick: () => navigate("/puntos"),
      type: null,
    },
    {
      key: 5,
      icon: <ShoppingOutlined />,
      children: null,
      label: "Catálogo de Servicios",
      onClick: () => navigate("/servicios"),
      type: null,
    },
    {
      type: "Divider",
    },
    {
      type: "Divider",
    },
    {
      type: "Divider",
    },
    {
      key: 6,
      icon: <SettingFilled />,
      children: null,
      label: "Configuración",
      type: null,
    },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} >
        <UserProfileBox />
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items1}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
        className="content-container"
          style={{
            background: colorBgContainer,
          }}
        >
          <div className="content-container">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
