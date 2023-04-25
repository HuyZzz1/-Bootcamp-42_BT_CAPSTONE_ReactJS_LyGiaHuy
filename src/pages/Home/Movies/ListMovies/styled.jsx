import { Card } from "antd";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  background: transparent;
  height: 310;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  border: none !important;
  transition: all 0.5s ease;

  &:hover {
    scale: 1.1;
  }
`;
