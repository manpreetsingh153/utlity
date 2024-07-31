"use client";
import Image from "next/image";
import invoicepic from "@/assets/images/invoicepic.png";
import invoicepic2 from "@/assets/images/invoicepic2.png";
import invoicepic3 from "@/assets/images/invoicepic3.png";
import Salaryfform from "@/components/Dashboard/offerletter/Salaryoffer";
import Purchase2 from "@/components/Dashboard/purchaseorder/Purchase copy";

import React, { useEffect, useState } from "react";
import "../style/invoice.css";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useSession } from "next-auth/react";


import Link from "next/link";

import { useRouter } from "next/navigation";
import axios from "axios";

const style = {
  marginRight: 10,
  textAlign: "start !important",
};
const Newoffertemp = () => {
  const [themecolor, setThemecolor] = useState("");
  const [currency, setCurrency] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const session = useSession();
  // const router = useRouter();
  const router = useRouter();
  const [text, setText] = useState({ invoicecat: "OFFER WITH SALARY",email:session.data?.user.email});
  const [inputs, setInputs] = useState([
    { itemname: "", quantity: "",  timestamp: "" },
  ]);
  const [templete, setTemplete] = useState(0);
  const handleCurrency = (e) => {
    setCurrency(e.target.value);
    // console.log(currency);
  };

  // console.log(templete + "value");

  const handletheme = (e) => {
    const value = e.target.value;

    setThemecolor(e.target.value);
  };
  const addInput = () => {
    setInputs([...inputs, { itemname: "", quantity: "" }]);
  };
  const removeRow = (index) => {
    const updatedRows = [...inputs];
    updatedRows.splice(index, 1);
    setInputs(updatedRows);
  };

  const handlechange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    // setText(event.target.value);
    // console.log(text);

    setText((prev) => ({ ...prev, [key]: value }));
    if (typeof window !== "undefined") {
      // console.log('we are running on the client')
      localStorage.setItem(key, value);
    }
    // console.log(value);
  };
  const handleInputChange = (index, name, value, value1, value2, value3) => {
    const newInputs = [...inputs];

    newInputs[index] = { ...newInputs[index], [name]: value };

    setInputs(newInputs);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
        if (typeof window !== "undefined") {
          // console.log('we are running on the client')
          localStorage.setItem("companylogo", e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handlePrints = async () => {
    let date = Math.floor(Date.now() / 10).toString();
    // console.log(text.po);
    text.id = date;
    inputs.forEach((input, index) => {
      inputs[index].timestamp = date;
    });

    // console.log(inputs.timestamp);
    const data = await axios.post("http://localhost:3000/api/var", {
      body: {
        text: text,
        inputs: inputs,
        table1: "offer_letter",
        table2: "salary_detail",
      },
  
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log("response");
    // console.log(data);
    handlePrint();
  };
  // const targetRef = useRef();
  // const { toPDF, targetRef } = usePDF({ filename: "invoice.pdf" });
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("currenturl", "/free-purchase-order-generator");
    }
  }, []);

  const handlclick = () => {
    session.data
      ? handlePrints()
      : router.push("/login", "/dashboard/invoice/timesheet-invoice");
    // : router.push({
    //     pathname: "/login",
    //     query: "/dashboard/invoice/timesheet-invoice",
    //   });
  };
  // console.log(session + "status 2");

  let sum = 0,
    total = 0;
  // console.log(previewImage);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Visitor Pass",
    onAfterPrint: () => {
      console.log("Printed PDF successfully!");
      // setTimeout(() => {
      //   router.push("/donation");
      // }, 500);
    },
  });
  return (
    <>
      {/* {typeof window !== "undefined" ? localStorage.getItem("invoicenum") : ""} */}
      <div className="container-lg my-5">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-9 shadow">
            <div className="p-md-5 p-2">
              <div className="row g-5">
                <div className="col-md-4">
                  <div className="col-md-12 d-block text-center mb-3 d-md-none">
                    <h4 className="fw-bold">OFFER LETTER</h4>
                  </div>
                  <div className="form-group h-100 col-md-11">
                    <div className="h-100  position-relative">
                      <div className=" h-100">
                        <label
                          className="mb-4 form-control h-100 btn text-dark btn-outline-secondary d-flex justify-content-center align-items-center"
                          style={{
                            // height: "150px",
                            backgroundImage: `url(${
                              previewImage ? previewImage : ""
                            })`,
                            backgroundRepeat: "no-repeat",
                            // backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        >
                          {previewImage ? "" : "Upload Your Logo"}

                          <input
                            type="file"
                            name="companylogo"
                            required
                            title="size should be in 100 x 62"
                            onChange={handleFileChange}
                            className="uploadFile img"
                            style={{
                              width: 0,
                              height: 0,
                              overflow: "hidden",
                            }}
                          />
                        </label>
                        {previewImage ? (
                          <button
                            type="button"
                            className="btn btn-close btn-outline-secondary position-absolute top-0 end-0"
                            onClick={() => setPreviewImage(null)}
                            aria-label="Close"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row g-1">
                    <div className="col-md-12 d-none d-md-block">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control border-1 text-end fw-bold  "
                          // placeholder="required"
                          id="floatingTextarea2"
                          name="invoicecat"
                          onChange={handlechange}
                          // defaultValue={"INVOICE"}
                          value={text.invoicecat}
                        />
                      </div>
                      {/* <h4 className="text-end">INVOICE</h4> */}
                    </div>
                    <div className="col-md-12 mt-3 mt-md-1">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          name="subject"
                          onChange={handlechange}
                          value={text.subject}
                          id="floatingTextarea2"
                        />
                        <label htmlFor="floatingTextarea2">SUBJECT</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 order-2 order-md-1">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="col-12 d-block d-md-none">
                        <h4
                          className="text-start  my-2 fw-bold py-2"
                          style={{ background: "#f8f9fa" }}
                        >
                          Company section
                        </h4>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="required"
                          id="floatingTextarea2"
                          name="emp_name"
                          onChange={handlechange}
                          value={text.emp_name}
                        />
                        {/* style="height: 100px" */}
                        <label
                          className="col-12 d-block d-md-none"
                          htmlFor="floatingTextarea2"
                        >
                          Name
                        </label>
                        <label
                          className="col-12 d-none d-md-block"
                          htmlFor="floatingTextarea2"
                        >
                          Employee Name
                        </label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="desination"
                          onChange={handlechange}
                          value={text.desination}
                        />
                        <label htmlFor="floatingTextarea2">Designation</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="contact_info"
                          onChange={handlechange}
                          value={text.contact_info}
                        />
                        <label htmlFor="floatingTextarea2">Email</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="department"
                          onChange={handlechange}
                          value={text.department}
                        />
                        <label htmlFor="floatingTextarea2">Department</label>
                      </div>
                    </div>

                    <div className="col-12 d-block d-md-none">
                      <h4
                        className="text-start  my-2 fw-bold py-2"
                        style={{ background: "#f8f9fa" }}
                      >
                        Sender section
                      </h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="sendername"
                          onChange={handlechange}
                          value={text.sendername}
                        />
                        <label htmlFor="floatingTextarea2">Sender Name</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="sendsignation"
                          onChange={handlechange}
                          value={text.sendsignation}
                        />
                        <label htmlFor="floatingTextarea2">Designation</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="senderemail"
                          onChange={handlechange}
                          value={text.senderemail}
                        />
                        <label htmlFor="floatingTextarea2">Email</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="campanyname"
                          onChange={handlechange}
                          value={text.campanyname}
                        />
                        <label htmlFor="floatingTextarea2">Company Name</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 order-1 order-md-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="date"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="date"
                          onChange={handlechange}
                          value={text.date}
                        />
                        <label htmlFor="floatingTextarea2">Date</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="date"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="expirydate"
                          onChange={handlechange}
                          value={text.expirydate}
                        />
                        <label htmlFor="floatingTextarea2">
                          Offer expiry date
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 table-responsive">
                <table
                  className="table mt-4 "
                  style={{ backgroundColor: "#1c6bbb !important" }}
                >
                  <thead style={{ backgroundColor: "#3c5e80 !important" }}>
                    <tr style={{ backgroundColor: "#3d71a5 !important" }}>
                      <th
                        scope="col"
                        width="50%"
                        style={{ backgroundColor: "#f8f9fa !important" }}
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className=""
                        width="49%"
                        style={{ backgroundColor: "#f8f9fa !important" }}
                      >
                        Salary
                      </th>

                      <th
                        scope="col"
                        width="1%"
                        style={{ backgroundColor: "#f8f9fa !important" }}
                      />
                    </tr>
                  </thead>

                  <tbody>
                    {inputs.map((input, index) => (
                      <tr key={index}>
                        <td>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              placeholder="Type"
                              className="form-control border-2"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                              id={`name${index}`}
                              name={`itemname${index}`}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "itemname",
                                  e.target.value
                                )
                              }
                              value={input.itemname}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="input-group mb-3">
                            <input
                              type="number"
                              placeholder="Salary"
                              className="form-control border-2"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                              id={`quantity${index}`}
                              name={`quantity${index}`}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "quantity",
                                  e.target.value
                                )
                              }
                              value={input.quantity}
                            />
                          </div>
                        </td>

                        <td>
                          {" "}
                          {index > 0 ? (
                            <button
                              className="fa-solid fa-minus bg-transparent border-0"
                              onClick={() => removeRow(index)}
                            />
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={addInput}
              >
                Add Item
              </button>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="px-lg-2 px-md-5 p-2">
              <div className="row g-3">
                <div className="col-12">
                  <button
                    // href={{ pathname: "/dashboard/invoice/timesheet-invoice/form", query: text }}
                    type="button"
                    className="btn btn-outline-success w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Preview
                  </button>
                  <div>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                          <div className="text-end">
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div
                            className="modal-body py-0 my-0 px-0"
                            ref={componentRef}
                          >
                            <div
                              className={`${
                                templete === 0 ? "d-block" : "d-none "
                              }`}
                            >
                              <Salaryfform
                                text={text}
                                previewImage={previewImage}
                                themecolor={themecolor}
                                inputs={inputs}
                                currency={currency}
                              />
                            </div>
                            <div
                              className={`${
                                templete === 1 ? "d-block" : "d-none"
                              }`}
                            >
                              <Purchase2
                                text={text}
                                previewImage={previewImage}
                                themecolor={themecolor}
                                inputs={inputs}
                                currency={currency}
                              />
                            </div>
                            <div
                              className={`${
                                templete === 2 ? "d-block" : "d-none"
                              }`}
                            >
                              <Salaryfform
                                text={text}
                                previewImage={previewImage}
                                themecolor={themecolor}
                                inputs={inputs}
                                currency={currency}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />
                <div className="col-12">
                  <div className="fw-bold d-flex align-items-center justify-content-evenly">
                    <span> Theme</span>
                    <button
                      type="button"
                      onClick={handletheme}
                      value="#ffffff"
                      style={{
                        height: "20px ",
                        width: "20px ",
                        backgroundColor: "#ffffff",
                        borderRadius: "50%",
                      }}
                    />
                    <button
                      type="button"
                      onClick={handletheme}
                      value="#ea4e0b"
                      style={{
                        height: "20px ",
                        width: "20px ",
                        backgroundColor: "#ea4e0b",
                        borderRadius: "50%",
                      }}
                    />
                    <button
                      type="button"
                      onClick={handletheme}
                      value="#17A6D2"
                      style={{
                        height: "20px ",
                        width: "20px ",
                        backgroundColor: "#17A6D2",
                        borderRadius: "50%",
                      }}
                    />
                    <button
                      type="button"
                      onClick={handletheme}
                      value="rgb(255, 0, 0)"
                      style={{
                        height: "20px ",
                        width: "20px ",
                        backgroundColor: "rgb(255, 0, 0)",
                        borderRadius: "50%",
                      }}
                    />
                    <button
                      type="button"
                      onClick={handletheme}
                      value="rgb(0, 129, 2)"
                      style={{
                        height: "20px ",
                        width: "20px ",
                        backgroundColor: "rgb(0, 129, 2)",
                        borderRadius: "50%",
                      }}
                    />
                    <button
                      type="button"
                      onClick={handletheme}
                      value="#ffa822"
                      style={{
                        height: "20px ",
                        width: "20px ",
                        backgroundColor: "#ffa822",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </div>

                <hr />
                <div className="col-12">
                  <div className="row g-1 w-100">
                    <div className="col-4 text-center ">
                      {/* <iframe src="/dashboard/invoice/commercial-invoice" frameborder="0" width={100} height={1500}></iframe> */}
                      <button
                        className={`${
                          templete === 0
                            ? " border-3 border-primary"
                            : "border-0"
                        }`}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        // onClick={() => handletemplete(0)}
                        onClick={() => setTemplete(0)}
                      >
                        <Image src={invoicepic} alt="" height={100} />
                      </button>
                    </div>
                    {/* <div className="col-4 text-start ">
                      {" "}
                      <button
                        className={`${
                          templete === 1
                            ? " border-3 border-primary"
                            : "border-0"
                        }`}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => setTemplete(1)}
                      >
                        <Image
                          src={invoicepic2}
                          alt=""
                          height={100}
                          width={80}
                        />{" "}
                      </button>
                    </div>
                    <div className="col-4 text-center">
                      <button
                        className={`${
                          templete === 2
                            ? " border-3 border-primary"
                            : "border-0"
                        }`}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => setTemplete(2)}
                      >
                        <Image
                          src={invoicepic3}
                          alt=""
                          height={100}
                          width={90}
                        />{" "}
                      </button>
                    </div> */}
                  </div>
                </div>
                <div>
                  <div>
                    <div
                      className="btn btn-transparent text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      View More <i className="fa-solid fa-arrow-right"></i>
                    </div>

                    <div
                      className="modal fade"
                      id="exampleModal2"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Modal title
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <div className="row">
                              {" "}
                              <div className="row g-3">
                                <div className="col-4 text-center">
                                  <button
                                    className="border-0"
                                    onClick={() => setTemplete(0)}
                                  >
                                    <Image
                                      src={invoicepic}
                                      alt=""
                                      style={{ width: "100%" }}
                                      height={200}
                                    />
                                  </button>
                                </div>
                                {/* <div className="col-4 text-center">
                                  <button
                                    className="border-0"
                                    onClick={() => setTemplete(1)}
                                  >
                                    <Image
                                      src={invoicepic2}
                                      alt=""
                                      height={200}
                                      style={{ width: "100%" }}
                                    />
                                  </button>
                                </div>
                                <div className="col-4 text-center">
                                  <button
                                    className="border-0"
                                    onClick={() => setTemplete(2)}
                                  >
                                    <Image
                                      src={invoicepic3}
                                      alt=""
                                      style={{ width: "100%" }}
                                      height={200}
                                    />
                                  </button>
                                </div> */}
                                <div className="col-11 mx-auto bg-danger">
                                  PRO
                                </div>
                                <div className="col-4 text-center">
                                  Not Available.....
                                </div>
                                {/* <div className="col-4 text-center">
                                  <Image src={invoicepic} alt="" height={200} />
                                </div>
                                <div className="col-4 text-center">
                                  <Image src={invoicepic} alt="" height={200} />
                                </div>
                                <div className="col-4 text-center">
                                  <Image src={invoicepic} alt="" height={200} />
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handleCurrency}
                >
                  <option>Currency</option>
                  <option value={"$"}>$ (United States Dollar)</option>
                  <option value={"€"}>€ (Euro)</option>
                  <option value={"£"}>£ ( British Pound)</option>
                  <option value={"₹"}>₹ (INR)</option>
                </select>
                <div className="text-success text-center fw-bold">
                  Save default
                </div>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handlclick}
                >
                  Download
                </button>

                <button type="button" className="btn btn-secondary">
                  History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newoffertemp;
