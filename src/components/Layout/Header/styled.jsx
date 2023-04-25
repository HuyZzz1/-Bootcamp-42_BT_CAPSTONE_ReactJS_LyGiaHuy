import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  padding: 0 25px;
  background: linear-gradient(-225deg, #5d9fff 0%, #b8dcff 48%, #6bbbff 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h4`
  cursor: pointer;
  font-size: 25px;
  font-weight: 500;
  color: white;
  transition: all 0.5s ease;

  &:hover {
    color: #1677ff;
  }
`;

export const Search = styled.div`
  width: 400px;

  @media (max-width: 768px) {
    display: none;
  }
`;
