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
        <div className="invoice-box rounded-4 ">
          <div className="row">
            <div className="col-5">
              <h3 className="fw-bold text-dark mt-3">
                {props.text.invoicecat}
              </h3>
            </div>
            <div className="col-7 text-end">
              <h3 className="fw-bold text-dark mt-3">
                {" "}
                <Image
                  src={props.previewImage ? props.previewImage : logo}
                  width={100}
                  height={62}
                  priority={true}
                  alt="img"
                />
              </h3>
            </div>
            <div className="col-7"></div>
          </div>
          <div className="col-12">
            <table cellPadding={0} cellSpacing={0}>
              <tbody>
                <tr className="information ">
                  <td colSpan={2}></td>
                </tr>
                <tr >
                  <td>
                    Company Name :{" "}
                    {props.text.bcompanyname ? (
                      <span> {props.text.bcompanyname} </span>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    Addres :{" "}
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
                      )}{" "}
                      {props.text.bpin ? <span> {props.text.bpin} </span> : ""}{" "}
                    </span>{" "}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Country :{" "}
                    {props.text.bcountry ? (
                      <span> {props.text.bcountry} , </span>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    Contact :{" "}
                    {props.text.bcontact ? (
                      <span>{props.text.bcontact} </span>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
                <tr className="details"></tr>
                <tr className="heading">
                  <td
                    style={{
                      backgroundColor: `${
                        props.themecolor ? props.themecolor : "#cfe1b9f9"
                      }`,
                      color: `${
                        props.themecolor === "#ffffff" ? "#6b6969" : ""
                      }`,
                    }}
                  >
                    Vendor Address :{" "}
                    {props.text.saddress ? (
                      <span> {props.text.saddress} , </span>
                    ) : (
                      ""
                    )}{" "}
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
                    )}
                    {props.text.spin ? <span> {props.text.spin} </span> : ""}
                  </td>
                </tr>
                <tr>
                  <td>
                    Vendor's Company : <span>{props.text.scompanyname} </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Contact : <span>{props.text.scontact} </span>
                  </td>
                  <td>
                    PO # : <span>{props.text.po} </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Order Date : <span>{props.text.orderdate} </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Delivery Date : <span>{props.text.duedate} </span>
                  </td>
                </tr>
                <tr className="heading">
                  <td
                    style={{
                      backgroundColor: `${
                        props.themecolor ? props.themecolor : "#cfe1b9f9"
                      }`,
                      color: `${
                        props.themecolor === "#ffffff" ? "#6b6969" : ""
                      }`,
                    }}
                  >
                    Item Description
                  </td>
                  <td
                    className="text-center"
                    style={{
                      backgroundColor: `${
                        props.themecolor ? props.themecolor : "#cfe1b9f9"
                      }`,
                      color: `${
                        props.themecolor === "#ffffff" ? "#6b6969" : ""
                      }`,
                    }}
                  >
                    Qty
                  </td>
                  <td
                    className="text-center"
                    style={{
                      backgroundColor: `${
                        props.themecolor ? props.themecolor : "#cfe1b9f9"
                      }`,
                      color: `${
                        props.themecolor === "#ffffff" ? "#6b6969" : ""
                      }`,
                    }}
                  >
                    Rate
                  </td>
                  <td
                    className="text-center"
                    style={{
                      backgroundColor: `${
                        props.themecolor ? props.themecolor : "#cfe1b9f9"
                      }`,
                      color: `${
                        props.themecolor === "#ffffff" ? "#6b6969" : ""
                      }`,
                    }}
                  >
                    Amount
                  </td>
                </tr>

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

                <tr className="total">
                  <td />
                  <td>SubTotal : </td>
                  <td></td>
                  <td>
                    {" "}
                    <span>
                      {" "}
                      {props.currency} {sum ? sum : "0"}{" "}
                    </span>
                  </td>
                </tr>
                <tr className="total">
                  <td />
                  <td>Purchase Tax :</td>
                  <td></td>

                  <td>{props.text.tax} %</td>
                </tr>
                <tr className="total">
                  <td />
                  <td>Total:</td>
                  <td></td>
                  <td>
                    {" "}
                    {props.currency}
                    {sum +
                      parseInt(
                        ((props.text.tax ? props.text.tax : "0") * sum) / 100
                      )}
                  </td>
                </tr>
         
                <tr className="heading">
                  <td
                    style={{
                      backgroundColor: `${
                        props.themecolor ? props.themecolor : "#cfe1b9f9"
                      }`,
                      color: `${
                        props.themecolor === "#ffffff" ? "#6b6969" : ""
                      }`,
                    }}
                  >
                    Notes :
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="subdata mb-1">
                      {props.text.notes
                        ? props.text.notes
                        : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga"}
                    </div>
                  </td>
                </tr>
                <tr className="heading">
                  <td
                    style={{
                      backgroundColor: `${
                        props.themecolor ? props.themecolor : "#cfe1b9f9"
                      }`,
                      color: `${
                        props.themecolor === "#ffffff" ? "#6b6969" : ""
                      }`,
                    }}
                  >
                    Terms &amp; Conditions :
                  </td>
                </tr>
                <tr>
                  <td className="mb-3">
                    <div className="subdata mb-1">
                      {props.text.termscondition
                        ? props.text.termscondition
                        : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga"}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
