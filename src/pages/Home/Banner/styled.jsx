import styled from "styled-components";

export const WrapperSwiper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .swiper {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
      height: 450px;

      @media (max-width: 1024px) {
        height: 100% !important ;
      }
    }

    .swiper-slide {
      height: 100% !important;
    }
  }
`;
