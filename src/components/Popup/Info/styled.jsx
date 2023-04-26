import styled from "styled-components";
import { Modal } from "antd";

export const StyledModal = styled(Modal)`
  &.ant-modal {
    @media (max-width: 1440px) {
      width: 100% !important;
    }
  }
`;
