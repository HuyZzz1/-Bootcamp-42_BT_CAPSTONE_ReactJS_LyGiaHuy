import http from "../http";
import httpFormData from "../httpFormData";

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

export const apiGetCinemaSystem = async () => {
  const { data } = await http.get("/QuanLyRap/LayThongTinHeThongRap");

  return data;
};

export const apiGetCinemaClusterInformation = async (code) => {
  const { data } = await http.get("/QuanLyRap/LayThongTinCumRapTheoHeThong", {
    params: {
      maHeThongRap: code,
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

export const updateUser = async (params) => {
  const { data } = await http.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", {
    ...params,
    maNhom: "GP00",
    maLoaiNguoiDung: "KhachHang",
  });

  return data;
};

export const apiAddMovie = async (params) => {
  const { data } = await httpFormData.post(
    "/QuanLyPhim/ThemPhimUploadHinh",
    params
  );

  return data;
};

export const apiUpdateMovie = async (params) => {
  const { data } = await httpFormData.post(
    "/QuanLyPhim/CapNhatPhimUpload",
    params
  );

  return data;
};

export const apiDeleteMovie = async (id) => {
  const { data } = await httpFormData.delete("/QuanLyPhim/XoaPhim", {
    params: {
      MaPhim: id,
    },
  });

  return data;
};

export const apiCreateShowtimes = async (params) => {
  const { data } = await httpFormData.post("/QuanLyDatVe/TaoLichChieu", params);

  return data;
};
