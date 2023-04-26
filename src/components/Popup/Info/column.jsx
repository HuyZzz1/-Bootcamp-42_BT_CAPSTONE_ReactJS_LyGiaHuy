import dayjs from "dayjs";
import { Space, Tag } from "antd";

export const column = () => [
  {
    key: "date",
    width: 160,
    title: "Thời gian đặt",
    dataIndex: "ngayDat",
    render: (value) => dayjs(value).format("DD-MM-YYYY ~ HH:mm"),
  },
  {
    key: "address",
    title: "Địa chỉ",
    width: 200,
    render: (item) => item.danhSachGhe[0].tenHeThongRap,
  },
  {
    key: "cinema",
    title: "Rạp",
    width: 80,
    render: (item) => item.danhSachGhe[0].maCumRap,
  },
  {
    key: "name",
    title: "Tên phim",
    dataIndex: "tenPhim",
    width: 250,
  },
  {
    key: "time",
    title: "Thời lượng",
    width: 100,
    dataIndex: "thoiLuongPhim",
    render: (value) => `${value} phút`,
  },
  {
    key: "seat",
    title: "Số ghế",
    render: (item) => {
      return (
        <Space style={{ flexWrap: "wrap" }}>
          {item.danhSachGhe.map((seat) => (
            <Tag color="blue">{seat.tenGhe}</Tag>
          ))}
        </Space>
      );
    },
  },
];
