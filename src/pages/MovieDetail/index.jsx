import React, { useRef, useState, useEffect } from "react";
import { Row, Col, Typography, Button, Tabs, Avatar } from "antd";
import { Wrapper, WrapperContent, Title } from "./styled";
import { Container } from "../../components/styled";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import VideoTrailer from "../../components/Popup/VideoTrailer";
import { apiGetMovieDetails } from "../../services/request/api";
import { apiGetShowtime } from "../../services/request/api";

const { Paragraph, Text } = Typography;

const MovieDetail = () => {
  const { maPhim } = useParams();
  const navigation = useNavigate();
  const videoTrailer = useRef();
  const [dataMovieDetail, setDataMovieDetail] = useState();
  const [dataShowtime, setDataShowtime] = useState();

  const getMovieDetail = async () => {
    try {
      const data = await apiGetMovieDetails(maPhim);
      setDataMovieDetail(data.content);
    } catch (err) {
      console.log(err);
    }
  };

  const getShowtime = async () => {
    try {
      const data = await apiGetShowtime(maPhim);
      setDataShowtime(data.content);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieDetail();
    getShowtime();
  }, []);

  return (
    <>
      <VideoTrailer ref={videoTrailer} />
      <Wrapper>
        <Container>
          <Row gutter={[30, 30]}>
            <Col lg={7} md={24}>
              <img
                src={dataMovieDetail?.hinhAnh}
                alt="logo"
                style={{ width: "100%", height: 500, objectFit: "cover" }}
              />
            </Col>
            <Col lg={16} md={24}>
              <WrapperContent>
                <Title style={{ color: "white", textTransform: "uppercase" }}>
                  {dataMovieDetail?.tenPhim}
                </Title>
                <Paragraph ellipsis={{ rows: 3 }} style={{ color: "#a6b2c9" }}>
                  {dataMovieDetail?.moTa}
                </Paragraph>
                <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
                  <p style={{ color: "white" }}>Đạo diễn</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
                  <p style={{ color: "white" }}>Thể loại</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
                  <p style={{ color: "white" }}>Khởi chiếu</p>
                  <p style={{ color: "white" }}>
                    {dayjs(dataMovieDetail?.ngayKhoiChieu).format("DD-MM-YYYY")}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
                  <p style={{ color: "white" }}>Thời lượng</p>
                  <p style={{ color: "white" }}>120 phút</p>
                </div>
                <div>
                  <Button
                    size="large"
                    type="primary"
                    onClick={() =>
                      videoTrailer.current.open(dataMovieDetail?.trailer)
                    }
                  >
                    XEM TRAILER
                  </Button>
                </div>
              </WrapperContent>
            </Col>
          </Row>
          <div style={{ marginTop: 20 }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <Text
                style={{
                  color: "#1677ff",
                  fontSize: 23,
                  textTransform: "uppercase",
                  borderBottom: "1px solid #1677ff ",
                  paddingBottom: 5,
                }}
              >
                Vui lòng chọn thông tin vé
              </Text>
            </div>

            <div style={{ paddingTop: 50 }}>
              <Tabs
                defaultActiveKey="1"
                tabPosition={"left"}
                style={{ height: "100%" }}
                items={dataShowtime?.heThongRapChieu.map((item, index) => {
                  return {
                    key: index,
                    label: (
                      <div key={`${item?.logo}-${index}`}>
                        <Avatar size={40} src={item?.logo} />
                      </div>
                    ),
                    children: (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 20,
                        }}
                      >
                        {item?.cumRapChieu.map((item, index) => (
                          <div key={`${item?.tenCumRap}-${index}`}>
                            <Text
                              style={{
                                color: "#1677ff",
                                fontSize: 17,
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                borderBottom: "1px solid #1677ff ",
                              }}
                            >
                              {item?.tenCumRap}
                            </Text>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: 20,
                                marginTop: 20,
                              }}
                            >
                              {item?.lichChieuPhim.map((calendar) => (
                                <Button
                                  size="large"
                                  key={uuid()}
                                  onClick={() =>
                                    navigation(
                                      `/ticket-room/${calendar?.maLichChieu}`
                                    )
                                  }
                                >
                                  {dayjs(calendar?.ngayChieuGioChieu).format(
                                    "DD-MM-YYYY  ~ HH:mm"
                                  )}
                                </Button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ),
                  };
                })}
              />
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default MovieDetail;
