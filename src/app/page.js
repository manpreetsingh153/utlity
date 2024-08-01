import React from "react";
import Image from "next/image";
// import image1 from "./images/image1.png";
// import image2 from "./images/image.png";
import Card from "../components/Home/Card";
import Mymodal from "../components/Home/Mymodal";
import Home from "../components/Home/Home";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const home = () => {
  return (
    <>
      <Header />
      <div className="pt-5 mt-5">
        <Home />
      </div>
      {/* <Mymodal/> */}
      <Card />
      <Footer />
    </>
  );
};

export default home;
