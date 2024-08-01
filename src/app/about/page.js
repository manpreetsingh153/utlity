"use client";
import React from "react";
import Image from "next/image";
import image from "./about.png";
import MyTable from "../../components/Dashboard/MyTable";
import image1 from "../../assets/images/card-2.jpg";
import logo from "../../assets/images/logo-removebg-preview.png";
// import {data} from "../api/details/route"
// import Contextprovider, { UserContext, useUsercontext } from "../../context/Contextprovider";
const page = () => {
  // const first =  useUsercontext()
  // const data = Contextprovider(UserContext);
  // {console.log( first + " data2")}
  return (
    <>
      {/* {console.log(data)} */}{" "}
      <div className="container">
        <h2 className="text-center my-4">About us</h2>
        <div className="row g-5">
          <div className="col-md-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            dolorem, dignissimos delectus ipsum voluptas iure distinctio
            perferendis libero labore at! Quaerat, iusto nulla nemo facere ipsa
            odit suscipit autem, officia maxime quidem esse ullam accusamus
            laudantium porro. Ratione sint, temporibus veritatis hic quaerat
            nulla, rem ullam dolore obcaecati ad eum quisquam molestias totam
            illum animi nobis facilis! Temporibus vero unde dicta perferendis
            veritatis, commodi magnam corrupti rerum culpa ducimus nisi.
            Praesentium libero architecto delectus provident qui ducimus commodi
            at nam totam maxime nostrum placeat, reprehenderit aliquam nulla
            ipsam laborum ex numquam voluptatem? Maiores impedit expedita
            assumenda esse qui, eligendi porro.
          </div>
          <div className="col-md-6">
            <Image src={image} alt="hello" style={{ width: "100%" }} />{" "}
          </div>
          <div className="col-md-6">
            <Image src={image} alt="hello" style={{ width: "100%" }} />{" "}
          </div>
          <div className="col-md-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            dolorem, dignissimos delectus ipsum voluptas iure distinctio
            perferendis libero labore at! Quaerat, iusto nulla nemo facere ipsa
            odit suscipit autem, officia maxime quidem esse ullam accusamus
            laudantium porro. Ratione sint, temporibus veritatis hic quaerat
            nulla, rem ullam dolore obcaecati ad eum quisquam molestias totam
            illum animi nobis facilis! Temporibus vero unde dicta perferendis
            veritatis, commodi magnam corrupti rerum culpa ducimus nisi.
            Praesentium libero architecto delectus provident qui ducimus commodi
            at nam totam maxime nostrum placeat, reprehenderit aliquam nulla
            ipsam laborum ex numquam voluptatem? Maiores impedit expedita
            assumenda esse qui, eligendi porro.
          </div>
        </div>
      </div>
      <div
        className=" footer2 mt-5 py-4"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container h-100 align-items-center">
          <Image
            src={logo}
            className="align-items-center d-flex mx-auto"
            width={100}
            alt="hello"
          />
          <div className="col-5 text-center mx-auto">
            Lorem ipsum dolor sit adipisci sed explicabo quos eum est reiciendis
            neque dolor similique, a, blanditiis eveniet officia, officiis
            veritatis. Architecto dolore, laudantium labore ad eum recusandae
            nostrum vel nesciunt enim quaerat, quia culpa.
          </div>
          <h6 className="text-center text-dark fw-bold pt-1">
            @copyright 2024
          </h6>
        </div>
      </div>
      {/* <MyTable /> */}
      {/* {console.log(data.hello + " data2")} */}
      {/* <Image src={image} alt='hello' width={500} height={333} /> */}
      {/* <Ima ge src='https://images.unsplash.com/photo-1682687982502-1529b3b33f85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' alt='hello' width={500} height={333} /> */}
    </>
  );
};

export default page;
