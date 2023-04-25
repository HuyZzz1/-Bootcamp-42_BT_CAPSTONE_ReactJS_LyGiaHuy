import styled from "styled-components";
import { Button } from "antd";

export const Wrapper = styled.div`
  background-image: url("/banner_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 435px;
`;

export const StyledButton = styled(Button)`
  width: 160px;
  height: 40px;
  border-radius: 20px;
  background: ${({ active }) => (active ? "#1677ff" : "")};
  color: ${({ active }) => (active ? "white" : "")};
  font-weight: 500;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  &:hover {
    color: ${({ active }) => (active ? "white !important" : "")};
  }
`;
