import styled from "styled-components";

export const WrapperSwiper = styled.div`
  position: relative;
  height: 100%;

  .swiper-wrapper {
    height: 700px !important;

    @media (max-width: 567px) {
      height: 250px !important;
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
