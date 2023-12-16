import React from "react";
import MainNavbar from "../components/navbar/MainNavbar";
import Corousel1 from "../components/Home/Carousel1.1";
import Corousel2 from "../components/Home/Carousel1.2";
import AllProducts from "../components/Home/AllProducts";
import Footer from "../components/Home/Footer";

function Home() {
  return (
    <div>
      <MainNavbar />
      <Corousel1 />
      <Corousel2 />
      <AllProducts/>
      <Footer />
    </div>
  );
}

export default Home;
