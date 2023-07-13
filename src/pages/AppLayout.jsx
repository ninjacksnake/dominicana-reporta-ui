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
import { Layout, Menu, Button, theme, message } from "antd";
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
  
  const handleNavigate = (route)=>{
    if (route === "/logout"){
      message.info("Sesión Finalizada, redirigiendo a Inicio de Sesión")
      setTimeout(()=>{
        return  navigate("/login")
      }, 1600 )
    
    }
    navigate(route);
    setCollapsed(true);
  }

  const items1 = [
    {
      key: 1,
      icon: <UserOutlined />,
      children: null,
      label: "Perfil",
      type: null,
      onClick: () => handleNavigate("/"),
    },
    {
      key: 2,
      icon: <HomeFilled />,
      children: null,
      label: "Reportar",
      type: null,
      onClick: () => handleNavigate("/reportes"),
    },
    {
      key: 3,
      icon: <BarChartOutlined />,
      children: null,
      label: "Indicadores",
      type: null,
      onClick: () => handleNavigate("/indicadores"),
    },
    {
      key: 4,
      icon: <HeartFilled />,
      children: null,
      label: "Puntos",
      onClick: () => handleNavigate("/puntos"),
      type: null,
    },
    {
      key: 5,
      icon: <ShoppingOutlined />,
      children: null,
      label: "Catálogo de Servicios",
      onClick: () => handleNavigate("/servicios"),
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
    {
      type: "Divider",
    },
    {
      key: 7,
      icon: <ShoppingOutlined />,
      children: null,
      label: "Cerrar Sesión",
      onClick: () => handleNavigate("/logout"),
      type: null,
    },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} className="sider" breakpoint={"lg"} collapsedWidth={0}>
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
          className="menu-toggle-icon"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
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
