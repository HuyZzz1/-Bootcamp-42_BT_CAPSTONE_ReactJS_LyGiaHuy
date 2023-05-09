import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import TicketRoom from "./pages/TicketRoom";
import Header from "./components/Layout/Header";
import Page404 from "./pages/Page404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie-detail/:maPhim" element={<MovieDetail />} />
          <Route path="/ticket-room/:maLichChieu" element={<TicketRoom />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default App;
