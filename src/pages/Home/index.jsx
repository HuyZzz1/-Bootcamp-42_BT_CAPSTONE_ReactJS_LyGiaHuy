import React from "react";
import Banner from "./Banner";
import Movies from "./Movies";
import Promotion from "./Promotion";
import Footer from "../.././components/Layout/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Movies />
      <Promotion />
      <Footer />
    </div>
  );
};

export default Home;
