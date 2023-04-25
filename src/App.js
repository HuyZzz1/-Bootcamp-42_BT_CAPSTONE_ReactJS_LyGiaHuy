import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import TicketRoom from "./pages/TicketRoom";
import Header from "./components/Layout/Header";
import { apiGetUser } from "./services/request/api";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/appSlice";

const App = () => {
  const dispatch = useDispatch();
  const getInfoUser = async () => {
    const data = await apiGetUser();
    dispatch(getUser(data.content));
  };

  useEffect(() => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      getInfoUser();
    }
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-detail/:maPhim" element={<MovieDetail />} />
        <Route path="/ticket-room/:maLichChieu" element={<TicketRoom />} />
      </Routes>
    </Router>
  );
};

export default App;
