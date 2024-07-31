"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../assets/images/offf.png";
import img2 from "../../assets/images/2-removebg-preview.png";
import img3 from "../../assets/images/3-removebg-preview.png";
import "./style/syle.css";
import { Card, CardImg } from "react-bootstrap";
import Link from "next/link";
const card = [
  {
    image: img1,
    href: "/offer-letter-generator",
    text: "Offer Letter",
  },
  {
    image: img2,
    href: "/free-invoice-generator",
    text: "Invoice",
  },
  {
    image: img3,
    href: "/free-purchase-order-generator",
    text: "Purchase Order",
  },
];
function Mymodal() {
  return (
    <>
      <div className="container">
        <div className="col-md-6 mx-auto my-5">
          <div className="row">
            {card.map((row, index) => {
              return (
                <div key={index} className="col-sm-4">
                  <Link rel="preload" href={row.href}>
                    <Card className="border-0 ">
                      <div className="card-body shadow rounded-4">
                        <Image
                          src={row.image}
                          width={100}
                          className=""
                          alt="text"
                          priority={true}
                        ></Image>{" "}
                        <div className="card-title py-2  text-dark">
                          {row.text}
                        </div>
                      </div>
                    </Card>
                  </Link>
                </div>
              );
            })}

            {/* <div className="col-sm-4">
              <Link
                rel="preload"
                href="/dashboard/offer-letter/offer-with-salary"
              >
                <Card className="border-0 ">
                  <div className="card-body  shadow rounded-4">
                    <Image
                      src={img1}
                      width={100}
                      className=""
                      alt="text"
                      priority={true}
                    ></Image>
                    <div className="card-title py-2  text-dark">
                      Offer Letter
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
            <div className="col-sm-4 ">
              {" "}
              <Link rel="preload" href="/dashboard/invoice/recurring-invoice">
                <Card className="border-0 ">
                  <div className="card-body shadow rounded-4">
                    <Image
                      src={img2}
                      width={100}
                      className=""
                      alt="text"
                      priority={true}
                    ></Image>{" "}
                    <div className="card-title py-2  text-dark">Invoice</div>
                  </div>
                </Card>
              </Link>
            </div>
            <div className="col-sm-4">
              <Link rel="preload" href="/dashboard/purchase-order">
                <Card className="border-0 ">
                  <div className="card-body shadow rounded-4">
                    <Image
                      src={img3}
                      width={100}
                      className=""
                      alt="text"
                      priority={true}
                    ></Image>{" "}
                    <div className="card-title py-2  text-dark">
                      Purchase order
                    </div>
                  </div>
                </Card>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Mymodal;
