import { Avatar, Button, Card, Typography, Flex } from "antd";
import { UserOutlined } from "@ant-design/icons"; // Add import statement for UserOutlined
import React from "react";
import { useAuth } from "../contex/authContext";

const Dashboard = () => {
  const { logout, userData } = useAuth();
  return (
    <>
      <Card className="profile-card">
        <Flex vertical gap="small" align="center">
          <Avatar size={150} icon={<UserOutlined />} className="avatar" />
          <Typography.Title level={2} strong className="username">
            {userData.name}
          </Typography.Title>
          <Typography.Text type="secondary" strong>
            Email: {userData.email}
          </Typography.Text>
          <Typography.Text type="secondary">
            Role: {userData.role} {/* Update with the actual property name */}
          </Typography.Text>
          <Button
            size="large"
            type="primary"
            className="profile-button"
            onClick={logout}
          >
            Logout
          </Button>
        </Flex>
      </Card>
    </>
  );
};

export default Dashboard;
