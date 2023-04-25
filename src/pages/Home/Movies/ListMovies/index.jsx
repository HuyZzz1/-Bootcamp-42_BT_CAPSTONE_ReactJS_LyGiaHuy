import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "antd";
import { Navigation, Autoplay } from "swiper";
import { StyledCard } from "./styled";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const { Text } = Typography;

const ListMovies = ({ data }) => {
  const navigation = useNavigate();

  return (
    <div style={{ width: "100%", padding: "0 50px", marginTop: 20 }}>
      <Swiper
        style={{ padding: "15px 0" }}
        spaceBetween={30}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 7,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide
            key={uuid()}
            onClick={() => navigation(`/movie-detail/${item.maPhim}`)}
          >
            <StyledCard bodyStyle={{ padding: 0, height: "100%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div>
                  <img
                    src={item.hinhAnh}
                    alt="img_1"
                    style={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      marginTop: 5,
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    <Text
                      ellipsis
                      style={{
                        color: "white",
                        fontSize: 16,
                        textTransform: "uppercase",
                        padding: "0 10px",
                      }}
                    >
                      {item.tenPhim}
                    </Text>
                  </div>
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      width: "100%",
                      marginTop: 10,
                      borderRadius: "0 0 8px 8px",
                    }}
                  >
                    Mua vé
                  </Button>
                </div>
              </div>
            </StyledCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ListMovies;
