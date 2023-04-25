import styled from "styled-components";
import { Modal } from "antd";

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0 !important;
  }

  .ant-modal-close {
    background: white !important;
    color: #1677ff;
    top: -25px;
    right: -15px;
    border-radius: 12px;

    @media (max-width: 1024px) {
      right: 0;
    }
  }
`;
