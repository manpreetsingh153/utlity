"use client";
import Image from "next/image";
import React from "react";
import logos from "@/assets/images/final_logo.png";
import "../style/invoice.css";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

import Login from "../../auth/login/Login";

const Invoiceform = (props) => {
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
    console.log(router.asPath + "path");
    setPath(pathname);
    session.data ? handlePrint() : router.push();
  };

  console.log(pathname);
  return (
    <>
      {console.log(router + " router")}
      {/* { console.log(router.forward +"path")} */}
      <div className="class" ref={componentRef}>
        <div className="container-fluid position-relative invoiceprint  main-invoice-container border border-2 border-dark pt-4 pb-5 mb-3">
          <div
            className="headerborder top-0 w-100 p-0 start-0"
            style={{
              borderBottom: `10px solid ${
                props.themecolor ? props.themecolor : "#ffa822"
              } `,
            }}
          ></div>
          <div
            className="footerborder  bottom-0 w-100 p-0 start-0 "
            style={{
              borderBottom: `10px solid ${
                props.themecolor ? props.themecolor : "#ffa822"
              } `,
            }}
          ></div>
          <div className=" pb-5 printable-content">
            <div className="row g-3">
              <div className=" col-4">
                {/*   eslint-disable-next-line @next/next/no-img-element  */}
                <Image
                  src={props.previewImage ? props.previewImage : logos}
                  alt=""
                  width={100}
                  height={100}
                  style={{ width: "100px", height: "auto" }}
                  priority={true}
                />
              </div>
              <div className="col-sm-12  px-0 ">
                <div className="row">
                  <div className="col-5"></div>
                  <div className="col-sm-7 col-5">
                    <div className="col-12 border-content d-flex  align-item-end justify-content-end">
                      <div
                        className="invoice-catagory1"
                        style={{
                          backgroundColor: `${
                            props.themecolor ? props.themecolor : "#ffa822"
                          }`,
                        }}
                      />
                      {/* {console.log(props.themecolor)} */}
                      <h4
                        className="invoice-catagory fw-bold px-2"
                        style={{
                          backgroundColor: `${
                            props.themecolor ? props.themecolor : "#ffa822"
                          }`,
                          color: `${
                            props.themecolor === "#000000" ? "#fff" : ""
                          }`,
                        }}
                      >
                        {props.text.invoicecat}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 justify-content-between">
                <div className="row">
                  <div className="col-6">
                    <div className="">
                      <h4 className="fw-bold mb-0">BILL TO</h4>
                      <div className="subhead mb-0">
                        Name :{" "}
                        {props.text.bcompanyname ? (
                          <span> {props.text.bcompanyname} </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="subhead mb-0">
                        address :
                        <span>
                          {" "}
                          {props.text.baddress ? (
                            <span> {props.text.baddress} , </span>
                          ) : (
                            ""
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
                          {props.text.bpin ? (
                            <span> {props.text.bpin} </span>
                          ) : (
                            ""
                          )}{" "}
                        </span>{" "}
                      </div>
                      <div className="subhead mb-0">
                        no :{props.text.bcontact}{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-6 text-end">
                    <p className="subhead mb-0">
                      Invoice Number: #
                      <span>
                        {props.text.invoicenum
                          ? props.text.invoicenum
                          : "______"}{" "}
                      </span>
                    </p>
                    <p className="subhead mb-0">
                      PO Number: #
                      <span>{props.text.po ? props.text.po : "______"} </span>
                    </p>
                    <p className="subhead mb-0">
                      Date:{" "}
                      {props.text.orderdate ? props.text.orderdate : "______"}
                    </p>
                    <p className="subhead mb-0">
                      Due Date:{" "}
                      {props.text.duedate
                        ? props.text.duedate
                        : "______"}
                    </p>{" "}
                    {/* <p className="px-2">Project Name :  Desighn</div> */}
                    <p />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 justify-content-between">
                <div className="row">
                  <div className="col-6 text-start">
                    <div className="">
                      <h4 className="fw-bold mb-0">SHIP TO</h4>
                      <div className="subhead  mb-0">
                        Name : <span> {props.text.scompanyname} </span>
                      </div>
                      <div className="subhead mb-0">
                        address :{" "}
                        <span>
                          {" "}
                          {props.text.saddress ? (
                            <span> {props.text.saddress} , </span>
                          ) : (
                            ""
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
                        </span>{" "}
                      </div>
                      <div className="subhead mb-0">
                        no : <span> {props.text.scontact} </span>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-6 text-end">
                    <div className="subhead mb-0">Frieght Type : Air</div>
                    <div className="subhead mb-0">Gross weight : 200kg</div>
                    <div className="subhead mb-0">Ship Date: June 16, 2021</div>
                    {/* <p className="px-2">Project Name :  Desighn</div> */}
                    <p />
                  </div>
                </div>
              </div>
              {/* table section q */}
              <div className="">
                <table className="table invoice-table ">
                  <thead
                    style={{
                      backgroundColor: `${props.themecolor}`,
                      color: `${props.themecolor === "#000000" ? "#fff" : ""}`,
                    }}
                  >
                    <tr
                      className="table "
                      style={{
                        backgroundColor: `${props.themecolor}`,
                        color: `${
                          props.themecolor === "#000000" ? "#fff" : ""
                        }`,
                      }}
                    >
                      <th
                        scope="col"
                        className=" bg-transparent"
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
                        className=" bg-transparent"
                        width="50%"
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
                            <span scope="row">{index + 1} </span>
                          </th>
                          <th>
                            {" "}
                            <span scope="row">{row?.itemname} </span>
                          </th>
                          <td className="text-center">
                            {" "}
                            <span>{row?.quantity ? row?.quantity : "0"} </span>
                          </td>
                          <td className="text-center">
                            {" "}
                            <span>{row?.rate ? row?.rate : "0"} </span>
                          </td>
                          <td className="text-center">
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
              <div className="col-sm-12 ">
                <div className="row ">
                  <div className="col-6" />
                  <div className="col-6  text-center">
                    <div className="row">
                      <div className="col-7">
                        <div className="subhead mb-1 text-start">Total</div>
                      </div>
                      <div className="col-5">
                        <div className="subhead mb-1">
                          {props.currency} {sum}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6" />
                  <div className="col-6 text-center ">
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
                  <div className="col-6 text-center ">
                    <div className="row text-danger">
                      <div className="col-7  ">
                        <div className="subhead mb-1 text-start">Discount</div>
                      </div>
                      <div className="col-5 ">
                        <div className="subhead mb-1">
                          {" "}
                          {props.currency} {props.text.discount}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6" />
                  <div className="col-6 text-center ">
                    <div className="row">
                      <div className="col-7">
                        <div className="subhead fw-bold  text-start ">
                          Subtotal
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="subhead fw-bold">
                          {" "}
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

              <div className="col-6 ">
                <div className="px-2 d-flex">
                  <h5 className="subhead fw-bold my-auto">Payment Terms :</h5>
                  <div className="subhead mb-1">{props.text.paymentterm}</div>
                </div>
                <div className="px-2 pt-3">
                  <h6 className="fw-bold subhead">Terms and conditions:</h6>
                  <div className="subdata mb-1">
                    {props.text.termscondition
                      ? props.text.termscondition
                      : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga"}
                  </div>
                </div>
              </div>
              <div className="col-6  my-auto">
                <div>
                  <div className="subhead text-center fw-bold mb-2">
                    SIGNATURE / STAMP
                  </div>
                  <div className="subdata text-center mb-2">Place :</div>
                  <div className="subdata text-center mb-2">Date :</div>
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

export default Invoiceform;
