import React from "react";
import { Button, Checkbox, Form, Image, Input } from "antd";

import logo from "../assets/DR.png";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import './register.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate =useNavigate();
  const onFinish = (values) => {
    navigate('/login')
  //  console.log("Received values of form: ", values);
  };
  return (
    <>
      <div className="register-container">
        <div className="form-container">
          <div className="logo-container">
             <Image preview={false} alt="Logo de Dominicana Reporta" src={logo} style={ {width:"50%"}}/> 
          </div>
   
          <h1>Crear Usuario</h1>
          <Form
            name="normal_register"
            className="register-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
            label="No. Documento de identificación"
              name="pId"
              rules={[
                { required: false, message: "Introduzca su número de identificación!" },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="No. Identificación"
                style={{width: '100%'}}
              />
            </Form.Item>
            <Form.Item
            label="Correo Electrónico"
              name="username"
              rules={[
                { required: false, message: "Introduzca su correo Electrónico!" },
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
            label={<p>Contraseña</p>}
              name="password"
              rules={[
                { required: false, message: "Introduzca su Contraseña!" },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                style={{ backgroundColor: "green" }}
                type="primary"
                htmlType="submit"
                className="register-form-button"
              >
                Iniciar Sesión
              </Button>
              <Form.Item>
                <Checkbox style={{textAlign:"justify"}}>
                 <b>
                  Acepta los <a href="/#" style={{color: "red"}}>terminos y condiciones de servicios</a> y <a href="#" style={{color: "red"}}>  politicas de privacidad</a>
                </b> 
                </Checkbox>
                
              </Form.Item>
              <Form.Item>
                  <p style={{color: "darkgray"}}>Tiene una cuenta? <a href='/login'  style={{color: "red"}}>Iniciar Sesión</a></p>
                </Form.Item>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
