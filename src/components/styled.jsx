import { Button } from "antd";
import styled from "styled-components";

export const StyledButtonAntd = styled(Button)`
  border-radius: 20px;
`;

export const Container = styled.div`
  width: 1200px;
  margin: auto;

  @media (max-width: 1250px) {
    width: calc(100% - 40px);
  }
`;
