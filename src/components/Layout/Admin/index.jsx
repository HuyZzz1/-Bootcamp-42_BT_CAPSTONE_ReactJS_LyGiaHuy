import { Layout, Menu, Avatar, Affix } from "antd";
import { useState } from "react";
import {
  UserAddOutlined,
  VideoCameraAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { StyledAffix } from "../../styled";
const { Header, Content, Sider } = Layout;

const Admin = () => {
  const location = useLocation();
  const navagtion = useNavigate();
  const [collapsed, setCollapsed] = useState(location.pathname);
  const [activeKey, setActiveKey] = useState(location.pathname);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <StyledAffix offsetTop={0}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          collapsedWidth={70}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <Menu
            theme="dark"
            selectedKeys={[activeKey]}
            onClick={(item) => {
              navagtion(item.key);
              setActiveKey(item.key);
            }}
            mode="inline"
            items={[
              {
                key: "/admin",
                icon: <UserAddOutlined style={{ fontSize: 20 }} />,
                label: "Quản lí người dùng",
              },
              {
                key: "/admin/movies-management",
                icon: <VideoCameraAddOutlined style={{ fontSize: 20 }} />,
                label: "Quản lí phim",
              },
            ]}
          />
        </Sider>
      </StyledAffix>
      <Layout className="site-layout">
        <Affix offsetTop={0}>
          <Header
            style={{
              padding: "0 15px",
              background:
                "linear-gradient(-225deg, #5d9fff 0%, #b8dcff 48%, #6bbbff 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
              }}
            >
              <Avatar size={45} icon={<UserOutlined />} />
              <p style={{ fontWeight: 500, color: "white" }}>ADMIN</p>
            </div>
          </Header>
        </Affix>
        <Content
          style={{
            background: "#f9f9f9",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Admin;
