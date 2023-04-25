import React, { useEffect, useState } from "react";
import { Row, Col, Button, Card, Tag } from "antd";
import { Wrapper, Seat, StyledButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { booking, resetBooking } from "../../redux/movieSlice";
import { useParams } from "react-router-dom";
import { apiGetTicketRoom } from "../../services/request/api";
import { apiBooking } from "../../services/request/api";
import { ShowSuccess } from "../.././components/Message";

const TicketRoom = () => {
  const { maLichChieu } = useParams();
  const [dataTicketRoom, setDataTicketRoom] = useState();
  const dispatch = useDispatch();
  const dataSeatSelected = useSelector((state) => state.movie.listSeatSelected);

  const getTicketRoom = async () => {
    try {
      const data = await apiGetTicketRoom(maLichChieu);
      setDataTicketRoom(data.content);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBooking = async () => {
    try {
      await apiBooking({
        maLichChieu: maLichChieu,
        danhSachVe: dataSeatSelected,
      });
      dispatch(resetBooking());
      getTicketRoom();
      ShowSuccess(
        "Đặt vé thành công, cảm ơn bạn đã sử dụng dịch vụ của chúng tôi"
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTicketRoom();
  }, []);

  return (
    <Wrapper>
      <Row style={{ padding: "20px 0px" }} gutter={[20, 20]}>
        <Col
          sm={24}
          md={24}
          lg={16}
          style={{ textAlign: "center", width: "100%" }}
        >
          <div>
            <Button
              color="red"
              disabled
              style={{ width: "50%", borderRadius: "8px" }}
            >
              <h4 style={{ color: "black" }}>Màn hình</h4>
            </Button>
          </div>
          <div style={{ marginTop: 30 }}>
            {dataTicketRoom?.danhSachGhe.map((ghe, index) => {
              const classSeatVip = ghe.loaiGhe === "Vip" ? "vip" : "";
              const classSeatBooking = ghe.daDat ? "booked" : "";
              const content = ghe.daDat ? "X" : ghe.stt;
              const indexSeatSelected = dataSeatSelected.findIndex(
                (seat) => ghe?.maGhe === seat?.maGhe
              );
              const classSeatSelected =
                indexSeatSelected !== -1 ? "selected" : "";

              return (
                <>
                  <Seat
                    disabled={ghe.daDat}
                    className={`${classSeatVip} ${classSeatBooking} ${classSeatSelected}`}
                    key={ghe.stt}
                    onClick={() =>
                      dispatch(
                        booking({
                          maGhe: ghe.maGhe,
                          giaVe: ghe.giaVe,
                          stt: ghe.stt,
                        })
                      )
                    }
                  >
                    {content}
                  </Seat>
                  {(index + 1) % 16 === 0 ? <br /> : " "}
                </>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 30,
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <div>
              <StyledButton className="booked">X</StyledButton>
              <p>Ghế đã đặt</p>
            </div>
            <div>
              <StyledButton className="vip" />
              <p>Ghế VIP</p>
            </div>
            <div>
              <StyledButton />
              <p> Ghế còn trống</p>
            </div>
            <div>
              <StyledButton className="selected" />
              <p> Ghế đang chọn</p>
            </div>
          </div>
        </Col>

        <Col sm={24} md={24} lg={8}>
          <Card
            bodyStyle={{ padding: 0 }}
            headStyle={{ textAlign: "center" }}
            title={<h3>Thông tin vé</h3>}
          >
            <div
              style={{
                padding: "10px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontWeight: 500, fontSize: 16 }}>Cụm Rạp:</p>
                <p style={{ color: "#1677ff", fontWeight: 500 }}>
                  {dataTicketRoom?.thongTinPhim.tenCumRap}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontWeight: 500, fontSize: 16 }}>Địa chỉ:</p>
                <p style={{ color: "#1677ff", fontWeight: 500 }}>
                  {dataTicketRoom?.thongTinPhim.diaChi}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontWeight: 500, fontSize: 16 }}>Rạp chiếu:</p>
                <p style={{ color: "#1677ff", fontWeight: 500 }}>
                  {dataTicketRoom?.thongTinPhim.tenRap}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontWeight: 500, fontSize: 16 }}>Ngày chiếu:</p>
                <p style={{ color: "#1677ff", fontWeight: 500 }}>
                  {dataTicketRoom?.thongTinPhim.ngayChieu}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontWeight: 500, fontSize: 16 }}>Giờ chiếu:</p>
                <p style={{ color: "#1677ff", fontWeight: 500 }}>
                  {dataTicketRoom?.thongTinPhim.gioChieu}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontWeight: 500, fontSize: 16 }}>Tên phim:</p>
                <p style={{ color: "#1677ff", fontWeight: 500 }}>
                  {dataTicketRoom?.thongTinPhim.tenPhim}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <p style={{ fontWeight: 500, fontSize: 16 }}>Số ghế chọn:</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexWrap: "wrap",
                    gap: 5,
                    flex: 1,
                  }}
                >
                  {dataSeatSelected.map((seat, index) => (
                    <Tag color="#1677ff" key={index}>
                      {seat.stt}
                    </Tag>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: 16,
                    textTransform: "uppercase",
                    color: "green",
                  }}
                >
                  Tổng tiền:
                </p>
                <p style={{ color: "green", fontWeight: "bold", fontSize: 18 }}>
                  {`${dataSeatSelected
                    .reduce((total, seat) => {
                      return (total += seat.giaVe);
                    }, 0)
                    .toLocaleString()}đ`}
                </p>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: 10 }}>
              <Button
                type="primary"
                size="large"
                style={{ width: "100%", borderRadius: "0 0 8px 8px" }}
                onClick={handleBooking}
              >
                Đặt vé
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default TicketRoom;
