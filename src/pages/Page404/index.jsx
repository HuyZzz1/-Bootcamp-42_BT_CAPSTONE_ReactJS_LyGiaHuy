import React from "react";
import { Wrapper } from "./styled";
import { useNavigate } from "react-router-dom";

const View = () => {
  const navigation = useNavigate();

  setTimeout(() => {
    navigation("/");
  }, 2500);

  return (
    <Wrapper>
      <h1 style={{ fontSize: 100, color: "white", letterSpacing: "15px" }}>
        404
      </h1>
      <p
        style={{
          textTransform: "uppercase",
          color: "white",
          fontSize: 25,
          marginTop: 5,
        }}
      >
        Trang không tồn tài
      </p>
    </Wrapper>
  );
};

export default View;
