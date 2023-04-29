import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import TicketRoom from "./pages/TicketRoom";
import Header from "./components/Layout/Header";
import SignIn from "./pages/Admin/SignIn";
import Admin from "./components/Layout/Admin";
import MoviesManagement from "./pages/Admin/MoviesManagement";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie-detail/:maPhim" element={<MovieDetail />} />
          <Route path="/ticket-room/:maLichChieu" element={<TicketRoom />} />
        </Route>
        <Route path="/admin/sign-in" element={<SignIn />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin" element={<SignIn />} />
          <Route
            path="/admin/movies-management"
            element={<MoviesManagement />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
