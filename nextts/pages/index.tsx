import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  CarOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";

const Home: NextPage = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };
  return (
    <div
      style={{
        textAlign: "center",
        position: "fixed",
        top: "50%",
        left: "50%",
        WebkitTransform: "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div>
        <CarOutlined style={{ fontSize: "300%" }} />
        <h4 style={{ width: "100%", letterSpacing: "-0.015em" }}>
          GARAGE TSON
          <small
            style={{
              color: "#999999",
              lineHeight: 1,
              fontSize: "13px",
              marginTop: "3px",
            }}
          ></small>
        </h4>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <br></br>
          <Link href="/auth/google">
            <a>
              Log in Gmail <GooglePlusOutlined style={{ fontSize: "200%" }} />
            </a>
          </Link>
          <br></br>
          Or
          <Link href="/register">
            <a> register now!</a>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Home;
