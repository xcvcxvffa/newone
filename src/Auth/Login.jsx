import React from "react";
import { Card, Alert, Flex, Typography, Form, Button, Input, Spin } from "antd";
import { Link } from "react-router-dom";
import loginImage from "../assets/a3.jpg";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { loading, error, loginUser } = useLogin();
  const handlelogin = async (values) => {
    await loginUser(values);
  };

  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        {/* form  */}
        <Flex flex={1}>
          <img src={loginImage} className="auth-image" />
        </Flex>
        <Flex vertical flex={1}>
          <Typography.Title level={2} strong className="title">
            Sign In
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogen">
            Unlock Your Word !!
          </Typography.Text>
          <Form layout="vertical" onFinish={handlelogin} autoComplete="off">
            <Form.Item
              label="Enter Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: " please Enter Your Email !!",
                },
                {
                  type: "email",
                  message: "The email is Not Valid",
                },
              ]}
            >
              <Input size="large" placeholder="Enter Your Email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: " please Enter Your Password !!",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Enter Your Password" />
            </Form.Item>

            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )}

            <Form.Item>
              <Button
                type={`${loading ? "" : "primary"}`}
                htmlType="submit"
                size="large"
                className="btn"
              >
                {loading ? <Spin /> : "Sign In"}
              </Button>
            </Form.Item>

            <Form.Item>
              <Link to={"/"}>
                <Button className="btn" size="large">
                  Create Account
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>
        {/*  Image */}
      </Flex>
    </Card>
  );
};

export default Login;
