import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  background: #f9f9f9;
  padding: 0 25px;
`;

export const Seat = styled.button`
  width: 35px;
  height: 35px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  background-color: #d9d9d9;
  transition: all 0.5s ease;

  &:hover {
    background: #1677ff !important;
  }

  &.vip {
    background-color: orange;
  }

  &.booked {
    cursor: no-drop !important;
    background-color: #767676 !important;
    color: white !important;
  }

  &.selected {
    background: #1677ff !important;
  }
`;

export const StyledButton = styled.button`
  width: 35px;
  height: 35px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  background-color: #d9d9d9;
  color: white;

  &.vip {
    background-color: orange;
  }

  &.booked {
    background-color: #767676 !important;
  }

  &.selected {
    background: #1677ff !important;
  }
`;
