"use client";
import React from "react";
import Image from "next/image";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image.png";

import img1 from "../../assets/images/offf.png";
import img2 from "../../assets/images/2-removebg-preview.png";
import img3 from "../../assets/images/3-removebg-preview.png";
import "./style/syle.css";
import Mymodal from "./Mymodal";

function Home() {
  return (
    <div>
      <section className="invoiceheading py-5 text-center">
        <div className="container">
          {/* {process.env.NAME} */}
          <h1 className=" text-glow">Your Office Partner</h1>
          <div className="billingsec">
            <Image
              src={image1}
              className="imagesec mb-0"
              alt=""
              width={100}
              priority={true}
            />
            <h2 className="billingtext mb-0">now with AI</h2>
            <Image
              src={image2}
              className="imagesec mb-0"
              alt=""
              width={100}
              priority={true}
            />
          </div>
          <div className="col-md-6 mx-auto">
            Download professional invoice format and make customizations
            according to your requirements at zero cost.Also use utlity to
            Instantly Create Perfect Professional Letters with Natural Language
            Processing Technologies.
          </div>
          {/* <div className="buttonsec">
              <button
                className="btn py-2 btn-danger getstart"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Get started
              </button>
              <button className="btn btn-dark font-20 py-2 mx-2" type="">
                Book free Demo
              </button>
            </div> */}
        </div>
        <Mymodal />
      </section>
    </div>
  );
}

export default Home;
