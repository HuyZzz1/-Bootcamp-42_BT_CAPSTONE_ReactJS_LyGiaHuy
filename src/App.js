import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import TicketRoom from "./pages/TicketRoom";
import Header from "./components/Layout/Header";

const App = () => {
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
