import styled from "styled-components";

export const WrapperSwiper = styled.div`
  position: relative;
  height: 100%;

  .swiper-wrapper {
    height: 43.75rem !important;

    @media (max-width: 567px) {
      height: 15.625rem !important;
    }
  }

  .swiper-slide {
    height: 100% !important;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
