import React from "react";
import { Card, Alert, Flex, Typography, Form, Button, Input, Spin } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import registerImage from "../assets/a1.avif";
import useSignup from "../hooks/useSignup.js";

const Register = () => {
  const { loading, error, registerUser } = useSignup();

  const handleRegister = async (values) => {
    try {
      await registerUser(values);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        {/* form  */}
        <Flex vertical flex={1}>
          <Typography.Title level={2} strong className="title">
            Create An Account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogen">
            Join Our Access
          </Typography.Text>
          <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
            <Form.Item
              label="Enter Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: " please Enter Your Name !!",
                },
              ]}
            >
              <Input size="large" placeholder="Enter Your First Name" />
            </Form.Item>
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

            <Form.Item
              label="Confirm Password"
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: " please Enter Your Confirm Password !!",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Enter Your  Confirm Password"
              />
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
                {loading ? <Spin /> : "Create Account"}
              </Button>
            </Form.Item>

            <Form.Item>
              <Link to={"./login"}>
                <Button className="btn" size="large">
                  Sign IN
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>
        {/*  Image */}

        <Flex flex={1}>
          <img src={registerImage} className="auth-image" />
        </Flex>
      </Flex>
    </Card>
  );
};

export default Register;
