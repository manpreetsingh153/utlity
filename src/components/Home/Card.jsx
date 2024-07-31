"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../assets/images/offf.png";
import img2 from "../../assets/images/2-removebg-preview.png";
import img3 from "../../assets/images/3-removebg-preview.png";
import "./style/syle.css";
// const iamgedata = [
//     {
//         img:{img1},
//         text:"Offer letter"
//     },
//     {
//         img:{img2},
//         text:"Invoice"
//     },
//     {
//         img:{img3},
//         text:"Billing"
//     }
// ]
function Card() {
  return (
    <div className="offerletter">
      <center>
        {" "}
        <h3 className="my-4 bold display-5">AI Generation</h3>{" "}
      </center>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="col p-4">
              <div
                className="card d-flex shadow p-5 mb-5 bg-body-tertiary rounded-5 "
                style={{ border: "0px" }}
              >
                <div className="card-body py-5 rounded-5 cart-container ">
                  <Image
                    src={img1}
                    className="d-block img-fluid sh img-set"
                    width={150}
                    alt=""
                    priority={true}
                  />
                  <h6 className="card-title fw-bold text-center pt-4 ">
                    Offer letter
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="col p-4">
              <div
                className="card d-flex shadow p-5 mb-5 bg-body-tertiary rounded-5 "
                style={{ border: "0px" }}
              >
                <div className="card-body py-5 rounded-5 cart-container">
                  <Image
                    src={img2}
                    className="d-block img-fluid sh img-set"
                    width={150}
                    priority={true}
                    alt=""
                  />
                  <h6 className="card-title fw-bold text-center pt-4">
                    Invoice
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="col p-4">
              <div
                className="card d-flex shadow p-5 mb-5 bg-body-tertiary rounded-5 "
                style={{ border: "0px" }}
              >
                <div className="card-body py-5 rounded-5 cart-container">
                  <Image
                    src={img3}
                    className="d-block img-fluid sh img-set"
                    width={150}
                    alt=""
                    priority={true}
                  />
                  <h6 className="card-title fw-bold text-center pt-4">
                    Billing
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
