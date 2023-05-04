import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { WrapperSwiper } from "./styled";
import { Navigation, Pagination, Autoplay } from "swiper";
import { apiGetBanners } from "../../../services/request/api";
import { v4 as uuid } from "uuid";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);

  const getBanner = async () => {
    try {
      const data = await apiGetBanners();
      setBanners(data.content);
    } catch (error) {
      setError(error.response?.data?.content);
    }
  };

  useEffect(() => {
    getBanner();
  }, []);

  if (error) return null;

  return (
    <WrapperSwiper>
      <Swiper
        cssMode={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {banners.map((item) => (
          <SwiperSlide key={uuid()}>
            <img src={item.hinhAnh} alt={`banner-${item.maBanner}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </WrapperSwiper>
  );
};

export default Banner;
