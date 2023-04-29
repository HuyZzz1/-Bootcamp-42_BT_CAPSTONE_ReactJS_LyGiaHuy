import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("/banner_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 30px 0;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h3`
  font-size: 20px;
  color: white;
  text-transform: uppercase;
`;
