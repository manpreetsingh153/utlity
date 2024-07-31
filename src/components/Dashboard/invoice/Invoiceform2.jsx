"use client";
import Image from "next/image";
import React from "react";
import logos from "@/assets/images/final_logo.png";
import "../style/invoice.css";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const MainInvoice = (props) => {
  let sum = 0;
  const session = useSession();
  const router = useRouter();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Visitor Pass",
    onAfterPrint: () => console.log("Printed PDF successfully!"),
  });
  const pathname = usePathname();
  const [path, setPath] = useState(pathname);
  const handlclick = () => {
    session.data ? handlePrint() : router.push("/login");
  };

  // console.log(pathname);
  return (
    <>
      <div
        className="class"
        style={{
          backgroundColor: "#f5f5ef",
          fontFamily: "  Dancing Script, cursive ",
          fontStyle: "italic",
        }}
      >
        <div
          className="container-fluid position-relative invoiceprint   shadow  py-3 pb-5"
          style={{
            backgroundColor: "#f5f5ef",
            fontFamily: "  Dancing Script, cursive ",
            fontStyle: "italic",
          }}
          ref={componentRef}
        >
          <div
            className="headerborder  top-0 w-100 p-0 start-0"
            style={{
              borderBottom: `10px solid ${
                props.themecolor ? props.themecolor : "#ffa822"
              } `,
            }}
          ></div>
          <div
            className="footerborder bottom-0 w-100 p-0 start-0 "
            style={{
              borderBottom: `10px solid ${
                props.themecolor ? props.themecolor : "#ffa822"
              } `,
            }}
          ></div>
          <div className="p-4 pb-5 printable-content">
            <div className="row g-3">
              <div className="col-6 align-items-center d-flex">
                <h2 className="text-start text-dark">
                  {" "}
                  {props.text.invoicecat}
                </h2>
              </div>
              <div className="col-6 text-end">
                <Image
                  src={props.previewImage ? props.previewImage : logos}
                  alt=""
                  width={100}
                  height={100}
                  style={{ width: "100px", height: "auto" }}
                  priority={true}
                />
              </div>
              <div className="col-sm-12">
                <div className="row g-3">
                  <div className="col-6">
                    <h6 className="fw-bold">BILL TO</h6>
                    <div className="s">
                      {props.text.bcompanyname ? (
                        <span> {props.text.bcompanyname} </span>
                      ) : (
                        "[Name]"
                      )}
                    </div>
                    <div className="s">
                      {props.text.bcontact ? props.text.bcontact : "[no :]"}{" "}
                    </div>
                    <div className="s">
                      {" "}
                      {props.text.baddress ? (
                        <span> {props.text.baddress} , </span>
                      ) : (
                        "[address :]"
                      )}
                      {props.text.bcity ? (
                        <span> {props.text.bcity} , </span>
                      ) : (
                        ""
                      )}
                      {props.text.bstate ? (
                        <span> {props.text.bstate} , </span>
                      ) : (
                        ""
                      )}
                      {props.text.bcountry ? (
                        <span> {props.text.bcountry} , </span>
                      ) : (
                        ""
                      )}{" "}
                      {props.text.bpin ? <span> {props.text.bpin} </span> : ""}
                    </div>
                  </div>
                  <div className="col-6 text-end">
                    <div className="s">
                      Invoice Number:#
                      <span>
                        {props.text.invoicenum
                          ? props.text.invoicenum
                          : "______"}
                      </span>
                    </div>
                    <div className="s">
                      PO Number:{" "}
                      <span>{props.text.po ? props.text.po : "______"} </span>
                    </div>
                    <div className="s">
                      Date:
                      {props.text.orderdate ? props.text.orderdate : "______"}
                    </div>
                    <div className="s">
                      Due Date:
                      {props.text.duedate ? props.text.duedate : "______"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 justify-content-between">
                <div className="row">
                  <div className="col-6 text-start">
                    <h6 className="fw-bold">SHIP TO</h6>
                    <div className="subhead mb-0">
                      <span>
                        {" "}
                        {props.text.scompanyname
                          ? props.text.scompanyname
                          : "[company Name]"}{" "}
                      </span>
                    </div>
                    <div className="subhead mb-0">
                      {" "}
                      <span>
                        {" "}
                        {props.text.scontact
                          ? props.text.scontact
                          : "[ no : ]"}{" "}
                      </span>
                    </div>
                    <div className="subhead mb-0">
                      {" "}
                      <span>
                        {" "}
                        {props.text.saddress ? (
                          <span> {props.text.saddress} , </span>
                        ) : (
                          "[Address]"
                        )}
                        {props.text.scity ? (
                          <span> {props.text.scity} , </span>
                        ) : (
                          ""
                        )}
                        {props.text.sstate ? (
                          <span> {props.text.sstate} , </span>
                        ) : (
                          ""
                        )}
                        {props.text.scountry ? (
                          <span> {props.text.scountry} , </span>
                        ) : (
                          ""
                        )}{" "}
                        {props.text.spin ? (
                          <span> {props.text.spin} </span>
                        ) : (
                          ""
                        )}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="col-6 text-end" />
                  <p />
                </div>
              </div>
              <div>
                <table
                  className="table invoice-table"
                  style={{ backgroundColor: "#f5f5ef" }}
                >
                  <thead style={{ backgroundColor: "#f5f5ef" }}>
                    <tr
                      className="table border-0 border-2 border-dark border-bottom"
                      style={{
                        backgroundColor: `${props.themecolor}`,
                        color: `${
                          props.themecolor === "#000000" ? "#fff" : ""
                        }`,
                      }}
                    >
                      <th
                        scope="col"
                        className="bg-transparent"
                        style={{
                          color: `${
                            props.themecolor === "#000000" ? "#fff" : ""
                          }`,
                        }}
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        width="50%"
                        className="bg-transparent"
                        style={{
                          color: `${
                            props.themecolor === "#000000" ? "#fff" : ""
                          }`,
                        }}
                      >
                        Item Description
                      </th>
                      <th
                        scope="col"
                        width="15%"
                        className="text-center bg-transparent"
                        style={{
                          color: `${
                            props.themecolor === "#000000" ? "#fff" : ""
                          }`,
                        }}
                      >
                        Qty
                      </th>
                      <th
                        scope="col"
                        width="15%"
                        className="text-center bg-transparent"
                        style={{
                          color: `${
                            props.themecolor === "#000000" ? "#fff" : ""
                          }`,
                        }}
                      >
                        Rate
                      </th>
                      <th
                        scope="col"
                        width="15%"
                        className="text-center bg-transparent"
                        style={{
                          color: `${
                            props.themecolor === "#000000" ? "#fff" : ""
                          }`,
                        }}
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-transparent">
                    {props.inputs.map((row, index) => {
                      sum = sum + row?.quantity * row?.rate;
                      // {
                      //   console.log("sum " + sum);
                      // }
                      return (
                        <tr
                          className="item bg-transparent border-0 border-2 border-dark border-bottom"
                          key={index}
                        >
                          <th className="bg-transparent">
                            {" "}
                            <span scope="row">{index + 1} </span>
                          </th>
                          <td className="bg-transparent">
                            {" "}
                            <span scope="row">{row?.itemname} </span>
                          </td>
                          <td className="text-center bg-transparent">
                            {" "}
                            <span>{row?.quantity ? row?.quantity : "0"} </span>
                          </td>
                          <td className="text-center bg-transparent">
                            {" "}
                            <span>{row?.rate ? row?.rate : "0"} </span>
                          </td>
                          <td className="text-center bg-transparent">
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
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-6">
                    <div className="-2 d-flex">
                      <h6 className="subhead fw-bold my-auto">
                        Payment Terms :
                      </h6>
                      <div className="subhead">{props.text.paymentterm}</div>
                    </div>
                  </div>
                  <div className="col-6 text-center">
                    <div className="row">
                      <div className="col-7">
                        <div className="subhead mb-1 text-start">Total</div>
                      </div>
                      <div className="col-5">
                        <div className="subhead mb-1">
                          {props.currency} {sum}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6" />
                  <div className="col-6 text-center">
                    <div className="row">
                      <div className="col-7">
                        <div className="subhead mb-1 text-start">Tax (%)</div>
                      </div>
                      <div className="col-5">
                        <div className="subhead mb-1">
                          {props.currency} {props.text.tax}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6" />
                  <div className="col-6 text-center">
                    <div className="row text-danger">
                      <div className="col-7">
                        <div className="subhead mb-1 text-start">Discount</div>
                      </div>
                      <div className="col-5">
                        <div className="subhead mb-1">
                          {" "}
                          {props.currency} {props.text.discount}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6" />
                  <div className="col-6 text-center">
                    <div className="row">
                      <div className="col-7">
                        <div className="subhead fw-bold text-start">
                          Subtotal
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="subhead fw-bold">
                          {props.currency}
                          {sum -
                            parseInt(
                              props.text.discount ? props.text.discount : "0"
                            ) +
                            parseInt(
                              (props.text.tax ? props.text.tax : "0" * sum) /
                                100
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-6">
                    <div className="-2 pt-3">
                      <h6 className="fw-bold subhead">Terms and conditions:</h6>
                      <div className="subdata mb-1">
                        {props.text.termscondition
                          ? props.text.termscondition
                          : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga"}
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="pt-3">
                      <div className="subhead text-center fw-bold mb-1">
                        SIGNATURE / STAMP
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button className="btn btn-danger mb-5" onClick={handlclick}>
        Download
      </button> */}
    </>
  );
};

export default MainInvoice;
