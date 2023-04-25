import { Avatar } from "antd";
import React from "react";

const data = [
  {
    id: 1,
    url: "/icon_1.png",
  },
  {
    id: 2,
    url: "/icon_2.png",
  },
  {
    id: 3,
    url: "/icon_3.png",
  },
  {
    id: 4,
    url: "/icon_4.png",
  },
  {
    id: 5,
    url: "/icon_5.png",
  },
  {
    id: 6,
    url: "/icon_6.png",
  },
];

const Footer = () => {
  return (
    <div style={{ padding: 10, textAlign: "center" }}>
      <h3 style={{ color: "gray", fontWeight: 500 }}>Đối tác</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
          justifyContent: "center",
          marginTop: 5,
        }}
      >
        {data.map((item) => (
          <Avatar size={40} src={item.url} key={item.id} />
        ))}
      </div>
      <div style={{ marginTop: 10, color: "gray", fontSize: 14 }}>
        © Copyright 2023 - MOVIES. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
