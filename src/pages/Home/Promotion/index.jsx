import React from "react";
import { Text, WrapperSwiper } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper";

const data = [
  {
    id: 1,
    url: "/promotion_1.jpeg",
  },
  {
    id: 2,
    url: "/promotion_2.png",
  },
  {
    id: 3,
    url: "/promotion_3.png",
  },
  {
    id: 4,
    url: "/promotion_4.png",
  },
  {
    id: 5,
    url: "/promotion_5.jpeg",
  },
];

const Promotion = () => {
  return (
    <div style={{ width: "100%", padding: "10px 50px", background: "#f9f9f9" }}>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Text>Khuyến mãi</Text>
      </div>
      <WrapperSwiper>
        <Swiper
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.url}
                alt={`promotion-${item.id}`}
                style={{
                  width: "100%",
                  height: 250,
                  objectFit: "cover",
                  borderRadius: 12,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </WrapperSwiper>
    </div>
  );
};

export default Promotion;
