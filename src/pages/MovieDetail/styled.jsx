import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("/banner_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  padding: 75px 0;

  @media (max-width: 990px) {
    height: 100% !important;
  }
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
