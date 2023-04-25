import http from "../http";

export const apiGetMovies = async () => {
  const { data } = await http.get("/QuanLyPhim/LayDanhSachPhim", {
    params: {
      maNhom: "GP11",
    },
  });

  return data;
};

export const apiGetBanners = async () => {
  const { data } = await http.get("/QuanLyPhim/LayDanhSachBanner");
  return data;
};

export const apiGetMovieDetails = async (movieId) => {
  const { data } = await http.get("/QuanLyPhim/LayThongTinPhim", {
    params: {
      MaPhim: movieId,
    },
  });

  return data;
};

export const apiGetShowtime = async (movieId) => {
  const { data } = await http.get("/QuanLyRap/LayThongTinLichChieuPhim", {
    params: {
      MaPhim: movieId,
    },
  });

  return data;
};

export const apiGetTicketRoom = async (showtimeId) => {
  const { data } = await http.get("/QuanLyDatVe/LayDanhSachPhongVe", {
    params: {
      MaLichChieu: showtimeId,
    },
  });

  return data;
};

export const apiSignUp = async (params) => {
  const { data } = await http.post("/QuanLyNguoiDung/DangKy", params);

  return data;
};

export const apiSignIn = async (params) => {
  const { data } = await http.post("/QuanLyNguoiDung/DangNhap", params);

  return data;
};

export const apiBooking = async (params) => {
  const { data } = await http.post("/QuanLyDatVe/DatVe", {
    maLichChieu: params.maLichChieu,
    danhSachVe: params.danhSachVe,
  });

  return data;
};

export const apiGetUser = async () => {
  const { data } = await http.post("/QuanLyNguoiDung/ThongTinTaiKhoan");

  return data;
};
