import React from "react";
import {
  LockOutlined,
  UserOutlined,
  FacebookFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Button, Form, Image, Input, message } from "antd";
import "./login.css";
import logo from "../assets/DR.png";
import useMessage from "antd/es/message/useMessage";
import { useNavigate } from "react-router-dom";

const Login = () => {
const [messageApi, contextHolder] =  useMessage();
const navigate = useNavigate();

const failMessage = ()=>{
  messageApi.error("Oops.. imposible ingresar, intentar de nuevo o usar otro metodo")
}
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const isGranted = grantedUsers.hasOwnProperty(values.userId) ? grantedUsers[values.userId].password === values.password ? true : false : false;
    if (isGranted) {
     return navigate('/servicios')
    }else{
      
  messageApi.error("Oops.. imposible ingresar, revise el Id y el password")
    }

  };
  const grantedUsers = {
    123456789:{
      name: 'Juan Perez',
      password: '87654321'
    },
    123412345:{
      name: 'Josefa Brea',
      password: '12345'
    }

  }

  return (
    <>
      <div className="login-container">
        <div className="form-container">
          <div className="logo-container">
            <Image
              preview={false}
              alt="Logo de Dominicana Reporta"
              src={logo}
              style={{ width: "50%" }}
            />
          </div>
          <h1>Iniciar Sesión</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="No. Identificación Personal"
              name="userId"
              rules={[
                {
                  required: true,
                  message: "Escriba su Número de identificación!",
                },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              label="Cotraseña"
              name="password"
              rules={[{ required: true, message: "Introducir Contraseña!" }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Contraseña"
              />
            </Form.Item>
            <Form.Item>
              <Button
                style={{ backgroundColor: "green" }}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Iniciar Sesión
              </Button>
            </Form.Item>
            <Form.Item>
              <div>
                O utilice sus redes sociales
                <div className="social-buttons">
                  <Button className="tweeter-button">
                    {" "}
                    <TwitterSquareFilled style={{ fontSize: "25px" }} /> Twitter
                  </Button>
                  {contextHolder}
                  <Button className="facebook-button" onClick={failMessage}>
                    {" "}
                    <FacebookFilled style={{ fontSize: "25px" }} />
                    Facebook
                  </Button>
                </div>
              </div>
            </Form.Item>
            <Form.Item>
              
            <div className="social-buttons"> 
            <a style={{color:'darkGray'}}> Olvidó su contraseña? </a>
            <b> <a style={{color: 'red'}} href="/registro"> Crear usuario </a></b>
            </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
