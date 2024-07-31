"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import "./style/dash.css";
import "./style/cardstyle.css";
// import card1 from "../../assets/images/card-1.jpg";
// import card2 from "../../assets/images/card-2.jpg";
import card3 from "../../assets/images/card-3.jpg";
import card4 from "../../assets/images/card-4.jpg";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Dashcard(props) {
  const path = usePathname();
  // console.log(path);
  const data = "/dashboard/offer-letter/offerlettertemp";
  const dataitem = props.data.data;

  return (
    <>
      {/* <div className="container">
        <div className="row">
          {dataitem.map((item) => {
            return (
              <div
                key={item.id}
                className="col-xs-12 col-sm-6 col-md-6 col-lg-3"
              >
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <Image src={item.img} alt="" width={100} height={100} />
                    </div>
                    <Link rel="preload" href={`${path}/${item.href}`}>
                      <div className="text-container">
                        <h6 className="cart-title">{item.text}</h6>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      <section>
        <div className="main">
          <div className="row g-3">
            {dataitem.map((item) => {
              return (
                <div key={item.id} className="col-md-6 col-lg-4">
                  <div className="card">
                    <Image
                      className="card-img-top"
                      src={card3}
                      alt="h"
                      priority={true}
                    />
                    <div className="card-content">
                      <h4 className="fw-bold">{item.text}</h4>
                      <Link
                        rel="preload"
                        href={`${path}/${item.href}`}
                        className="button fw-bold"
                      >
                        Visit Now{" "}
                        <span className="material-symbols-outlined">
                          {/* <i className="fa-solid fa-arrow-right"></i> */}

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            height={20}
                            width={30}
                            fill="currentColor"
                          >
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashcard;
