/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef } from "react";
import "./style/style.css";
import Image from "next/image";
import logo from "@/assets/images/final_logo.png";
import { useReactToPrint } from "react-to-print";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Purchase = (props) => {
  let sum = 0;
  const session = useSession();
  const router = useRouter();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Visitor Pass",
    onAfterPrint: () => console.log("Printed PDF successfully!"),
  });

  const handlclick = () => {
    session.data ? handlePrint() : router.push("/login");
  };
  return (
    <section>
      <div className="mb-5" ref={componentRef}>
        <div className="purchase-order mx-auto border border-dark shadow p-4 rounded-5">
          <div className="d-flex justify-content-between">
            <h3 className="fw-bold mt-4"> {props.text.invoicecat}</h3>
            <Image
              src={props.previewImage ? props.previewImage : logo}
              width={100}
              height={62}
              alt="img"
              priority={true}
            />{" "}
          </div>
          <div className="row g-3">
            <div className="col-md-4">Company Name:</div>
            <div className="col-md-8">
              {" "}
              {props.text.bcompanyname ? (
                <span> {props.text.bcompanyname} </span>
              ) : (
                ""
              )}
            </div>
            <div className="col-md-4">Address :</div>
            <div className="col-md-8">
              <span>
                {" "}
                {props.text.baddress ? (
                  <span> {props.text.baddress} , </span>
                ) : (
                  ""
                )}
                {props.text.bcity ? <span> {props.text.bcity} , </span> : ""}
                {props.text.bstate ? (
                  <span> {props.text.bstate} , </span>
                ) : (
                  ""
                )}{" "}
                {props.text.bcountry ? (
                  <span> {props.text.bcountry} , </span>
                ) : (
                  ""
                )}
                {props.text.bpin ? <span> {props.text.bpin} </span> : ""}{" "}
              </span>{" "}
            </div>
            <div className="col-md-4">Contact :</div>
            <div className="col-md-8">
              {props.text.bcontact ? <span>{props.text.bcontact} </span> : ""}
            </div>
            <h6
              className="text-start mt-1  my-auto fw-bold py-2"
              style={{ background: "#f8f9fa" }}
            >
              Vender section
            </h6>
            <div className="col-md-4">Vender Name:</div>
            <div className="col-md-8">
              {" "}
              <span>{props.text.scompanyname} </span>
            </div>
            <div className="col-md-4">Address :</div>
            <div className="col-md-8">
              {props.text.saddress ? (
                <span> {props.text.saddress} , </span>
              ) : (
                ""
              )}{" "}
              {props.text.scity ? <span> {props.text.scity} , </span> : ""}
              {props.text.sstate ? <span> {props.text.sstate} , </span> : ""}
              {props.text.scountry ? (
                <span> {props.text.scountry} , </span>
              ) : (
                ""
              )}
              {props.text.spin ? <span> {props.text.spin} </span> : ""}
            </div>
            <div className="col-md-4">Contact :</div>
            <div className="col-md-8">
              {" "}
              {props.text.scontact ? <span> {props.text.scontact} </span> : ""}
            </div>
            <h6
              className="text-start mt-1  my-auto fw-bold py-2"
              style={{ background: "#f8f9fa" }}
            >
              PO section
            </h6>
            <div className="col-md-4">PO : #</div>
            <div className="col-md-8">
              <span>{props.text.po} </span>
            </div>
            <div className="col-md-4">Order Date:</div>
            <div className="col-md-8">{props.text.orderdate}</div>
            <div className="col-md-4">Delivery Date:</div>
            <div className="col-md-8">
              {" "}
              <span>{props.text.duedate} </span>
            </div>
          </div>
          <div className="table-responsive mt-4">
            <table className="table">
              <thead>
                <tr className="table-secondary">
                  <th
                    scope="col"
                    style={{
                      backgroundColor: `${
                        props.themecolor ? props.themecolor : "#cfe1b9f9"
                      }`,
                      color: `${
                        props.themecolor === "#000000" ? "#fff" : ""
                      }`,
                    }}
                  >
                    Item Description
                  </th>
                  <th
                    scope="col"
                    style={{
                      backgroundColor: `${
                        props.themecolor ? props.themecolor : "#cfe1b9f9"
                      }`,
                      color: `${
                        props.themecolor === "#000000" ? "#fff" : ""
                      }`,
                    }}
                  >
                    Qty
                  </th>
                  <th
                    scope="col"
                    style={{
                      backgroundColor: `${
                        props.themecolor ? props.themecolor : "#cfe1b9f9"
                      }`,
                      color: `${
                        props.themecolor === "#000000" ? "#fff" : ""
                      }`,
                    }}
                  >
                    Rate
                  </th>
                  <th
                    scope="col"
                    style={{
                      backgroundColor: `${
                        props.themecolor ? props.themecolor : "#cfe1b9f9"
                      }`,
                      color: `${
                        props.themecolor === "#000000" ? "#fff" : ""
                      }`,
                    }}
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.inputs.map((row, index) => {
                  sum = sum + row?.quantity * row?.rate;
                  // {
                  //   console.log("sum " + sum);
                  // }
                  return (
                    <tr className="item" key={index}>
                      <th>
                        {" "}
                        <span scope="row">{row?.itemname} </span>
                      </th>
                      <td>
                        {" "}
                        <span>{row?.quantity ? row?.quantity : "0"} </span>
                      </td>
                      <td>
                        {" "}
                        <span>{row?.rate ? row?.rate : "0"} </span>
                      </td>
                      <td>
                        {" "}
                        <span>
                          {row?.quantity * row?.rate
                            ? row?.quantity * row?.rate
                            : "0"}{" "}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-md-5 offset-md-7">
              <h6 className="text-dark d-flex justify-content-between fw-bold">
                SubTotal :<span> ${sum ? sum : "0"} </span>
              </h6>
              <h6 className="text-dark d-flex justify-content-between fw-bold">
                Purchase tax :<span> ${props.text.tax} </span>
              </h6>
              <h6 className="text-dark d-flex justify-content-between fw-bold">
                Total :
                <span>
                  $
                  {sum +
                    parseInt(
                      ((props.text.tax ? props.text.tax : "0") * sum) / 100
                    )}
                </span>
              </h6>
            </div>
            <div className="col-md-4">Notes:</div>
            <div className="col-md-8">
              {" "}
              {props.text.notes
                ? props.text.notes
                : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga"}
            </div>
            <div className="col-md-4">Terms &amp; Condition:</div>
            <div className="col-md-8">
              {" "}
              {props.text.termscondition
                ? props.text.termscondition
                : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
