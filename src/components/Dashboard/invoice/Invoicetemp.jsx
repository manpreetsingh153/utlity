"use client";
import Image from "next/image";
import invoicepic from "@/assets/images/invoicepic.png";
import invoicepic2 from "@/assets/images/invoicepic2.png";
import invoicepic3 from "@/assets/images/invoicepic3.png";
import Invoiceform from "./Invoiceform";
import Invoiceform2 from "./Invoiceform2";
import Invoiceform3 from "./Invoiceform3";
import React, { useEffect, useMemo, useState } from "react";
import "../style/invoice.css";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import makeid from "@/lib/Random";
import axios from "axios";

const style = {
  marginRight: 10,
  textAlign: "start !important",
};
const Invoicetemp = () => {
  const [themecolor, setThemecolor] = useState("");
  const [currency, setCurrency] = useState("");
  const componentRef = useRef();
  const [previewImage, setPreviewImage] = useState(null);
  const session = useSession();
  // console.log(session);
  const router = useRouter();
  const [text, setText] = useState({
    invoicecat: "INVOICE",
    id: "",
    email: session.data?.user.email,
  });
  const [inputs, setInputs] = useState([
    { itemname: "", quantity: "", rate: "", tax: "", timestamp: "" },
  ]);

  const alldata = useMemo(
    () => ({ text, inputs, previewImage, currency, themecolor }),
    [text, inputs, previewImage, currency, themecolor]
  );
  const [templete, setTemplete] = useState(0);
  const handleCurrency = (e) => {
    setCurrency(e.target.value);
    // console.log(currency);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("currenturl", "/free-invoice-generator");
    }
  }, []);

  const handletheme = (e) => {
    const value = e.target.value;
    setThemecolor(e.target.value);
  };
  const addInput = () => {
    setInputs([
      ...inputs,
      { itemname: "", quantity: "", rate: "", tax: "", timestamp: "" },
    ]);
  };
  const removeRow = (index) => {
    const updatedRows = [...inputs];
    updatedRows.splice(index, 1);
    setInputs(updatedRows);
  };

  const handlechange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    // console.log(text);

    setText((prev) => ({ ...prev, [key]: value }));
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
          localStorage.setItem("companylogo", e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlclick = () => {
    session.data
      ? handlePrints()
      : router.push("/login", "/dashboard/invoice/timesheet-invoice");
  };
  // const updateName = (newName) => {
  //   setInputs((prevState) => ({
  //     ...prevState,
  //     timestamp: newName,
  //   }));
  // };
  let sum = 0,
    total = 0;
  const handlePrints = async () => {
    let date = Math.floor(Date.now() / 10).toString();
    // console.log(text.po);
    text.id = date;
    inputs.forEach((input, index) => {
      inputs[index].timestamp = date;
    });
    // console.log(inputs.timestamp);
    const data = await axios.post("https://utlity-manpreets-projects-05f6dc9b.vercel.app/api/var", {
      body: {
        text: text,
        inputs: inputs,
        table1: "invoice_detail",
        table2: "invoice_item",
      },

      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log("response");
    // console.log(data);
    handlePrint();
  };
  const handlePrint = useReactToPrint({
    onBeforePrint: async () => {
      // console.log(alldata);
      // console.log(text);
      // console.log(inputs);
    },
    content: () => componentRef.current,
    documentTitle: "Visitor Pass",
    onAfterPrint: () => {
      console.log("Printed PDF successfully!");
      // setTimeout(() => {
      //   router.push("/donation");
      // }, 1000);
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
                <div className="col-md-8">
                  <div className="col-md-12 d-block text-center mb-3 d-md-none">
                    <h4 className="fw-bold">INVOICE</h4>
                  </div>
                  <div className="form-group h-100 col-md-6">
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
                <div className="col-md-4">
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
                          // placeholder="required"
                          id="floatingTextarea2"
                          name="invoicenum"
                          onChange={handlechange}
                          value={text.invoicenum}
                        />

                        <label htmlFor="floatingTextarea2">
                          Invoice Number #
                        </label>
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
                          Billing section
                        </h4>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="required"
                          id="floatingTextarea2"
                          name="bcompanyname"
                          onChange={handlechange}
                          value={text.bcompanyname}
                        />
                        {/* style="height: 100px" */}
                        <label htmlFor="floatingTextarea2">Bill To</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="baddress"
                          onChange={handlechange}
                          value={text.baddress}
                        />
                        <label htmlFor="floatingTextarea2">Address</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="bcity"
                          onChange={handlechange}
                          value={text.bcity}
                        />
                        <label htmlFor="floatingTextarea2">City</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="bstate"
                          onChange={handlechange}
                          value={text.bstate}
                        />
                        <label htmlFor="floatingTextarea2">State</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="bpin"
                          onChange={handlechange}
                          value={text.bpin}
                        />
                        <label htmlFor="floatingTextarea2">PIN</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="bcountry"
                          onChange={handlechange}
                          value={text.bcountry}
                        />
                        <label htmlFor="floatingTextarea2">Country</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="bcontact"
                          onChange={handlechange}
                          value={text.bcontact}
                        />
                        <label htmlFor="floatingTextarea2">Contact</label>
                      </div>
                    </div>

                    <div className="col-12 d-block d-md-none">
                      <h4
                        className="text-start  my-2 fw-bold py-2"
                        style={{ background: "#f8f9fa" }}
                      >
                        Shipping section
                      </h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="scompanyname"
                          onChange={handlechange}
                          value={text.scompanyname}
                        />
                        <label htmlFor="floatingTextarea2">Ship To</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="saddress"
                          onChange={handlechange}
                          value={text.saddress}
                        />
                        <label htmlFor="floatingTextarea2">Address</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="scity"
                          onChange={handlechange}
                          value={text.scity}
                        />
                        <label htmlFor="floatingTextarea2">City</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="sstate"
                          onChange={handlechange}
                          value={text.sstate}
                        />
                        <label htmlFor="floatingTextarea2">State</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="spin"
                          onChange={handlechange}
                          value={text.spin}
                        />
                        <label htmlFor="floatingTextarea2">PIN</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="scountry"
                          onChange={handlechange}
                          value={text.scountry}
                        />
                        <label htmlFor="floatingTextarea2">Country</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="scontact"
                          onChange={handlechange}
                          value={text.scontact}
                        />
                        <label htmlFor="floatingTextarea2">Contact</label>
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
                          name="orderdate"
                          onChange={handlechange}
                          value={text.ordedate}
                        />
                        <label htmlFor="floatingTextarea2">Date</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="paymentterm"
                          onChange={handlechange}
                          value={text.paymentterm}
                        />
                        <label htmlFor="floatingTextarea2">Payment Terms</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="date"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          name="duedate"
                          onChange={handlechange}
                          value={text.duedate}
                        />
                        <label htmlFor="floatingTextarea2">Due Date</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 border-3 rounded-0 border-bottom"
                          placeholder="Leave a comment here"
                          name="po"
                          onChange={handlechange}
                          value={text.po}
                          id="floatingTextarea2"
                        />
                        <label htmlFor="floatingTextarea2">PO Number</label>
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
                        style={{ backgroundColor: "#f8f9fa !important" }}
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        width="50%"
                        style={{ backgroundColor: "#f8f9fa !important" }}
                      >
                        Item
                      </th>
                      <th
                        scope="col"
                        className=""
                        width="15%"
                        style={{ backgroundColor: "#f8f9fa !important" }}
                      >
                        Quantity
                      </th>
                      <th
                        width="15%"
                        className=""
                        scope="col"
                        style={{ backgroundColor: "#f8f9fa !important" }}
                      >
                        Rate
                      </th>
                      <th
                        scope="col"
                        style={{ backgroundColor: "#f8f9fa !important" }}
                      >
                        Amount
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
                        <th scope="row" className="text-secondary">
                          {index + 1}
                        </th>
                        <td>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              placeholder="Discription of product"
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
                              placeholder="Quantity"
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
                          <div className="input-group mb-3">
                            <input
                              type="number"
                              placeholder="Rate"
                              className="form-control border-2"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                              id={`rate${index}`}
                              name={`rate${index}`}
                              onChange={(e) =>
                                handleInputChange(index, "rate", e.target.value)
                              }
                              value={input.rate}
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          {/* <div className="input-group mb-3 text-secondary text-center"> */}
                          <span>
                            {currency} {input.quantity * input.rate}
                          </span>
                          {/* </div> */}
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
              <div className="col-md-12">
                <div className="row">
                  <div className="col-sm-6">
                    <span className="input-group-text bg-transparent border-0">
                      Notes
                    </span>
                    <div className="input-group">
                      <textarea
                        className="form-control border-2"
                        aria-label="With textarea"
                        name="notes"
                        onChange={handlechange}
                        value={text.notes}
                        // defaultValue={""}
                      />
                    </div>
                    <span className="input-group-text bg-transparent border-0">
                      Terms and Condition {sum}
                    </span>
                    <div className="input-group">
                      <textarea
                        className="form-control border-2"
                        aria-label="With textarea"
                        // defaultValue={""}
                        name="termscondition"
                        onChange={handlechange}
                        value={text.termscondition}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 mt-3 mt-sm-0">
                    <div className="row">
                      <div className="col-6 text-md-end sub-total-sec">
                        <span
                          className="bg-transparent border-0"
                          id="inputGroup-sizing-sm"
                        >
                          Sub Total
                        </span>
                      </div>
                      <div className="col-5">
                        <div className="input-group-sm mb-3">
                          <div className="text-start">
                            {currency}{" "}
                            {inputs.map((input, index) => {
                              sum = sum + input.rate * input.quantity;
                            })}
                            {sum}{" "}
                          </div>
                        </div>
                      </div>
                      <div className="col-6 text-md-end">
                        <span
                          className="bg-transparent border-0"
                          id="inputGroup-sizing-sm"
                        >
                          Tax
                        </span>
                      </div>
                      <div className="col-5">
                        <div className="input-group input-group-sm mb-3">
                          <input
                            type="number"
                            onChange={handlechange}
                            className="form-control border-0 border-3 rounded-0 border-bottom"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            // id="tax"
                            id="tax"
                            name="tax"
                            value={text.tax}
                          />
                          <span className="input-group-text bg-transparent border-0 border-3 rounded-0 border-bottom">
                            %
                          </span>
                        </div>
                      </div>
                      <div className="col-6 text-md-end">
                        <span
                          className="bg-transparent border-0"
                          id="inputGroup-sizing-sm"
                        >
                          Discount
                        </span>
                      </div>
                      <div className="col-5">
                        <div className="input-group input-group-sm mb-3">
                          <input
                            type="number"
                            onChange={handlechange}
                            className="form-control border-0 border-3 rounded-0 border-bottom"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            // id="tax"
                            id="discount"
                            name="discount"
                            value={text.discount}
                          />
                          <span className="input-group-text bg-transparent border-0 border-3 rounded-0 border-bottom">
                            %
                          </span>
                        </div>
                      </div>
                      <div className="col-6 text-md-end">
                        <span
                          className="bg-transparent border-0"
                          id="inputGroup-sizing-sm"
                        >
                          Total
                        </span>
                      </div>
                      <div className="col-5">
                        <div className="input-group-sm mb-3">
                          <div className="text-start">
                            {currency}{" "}
                            {inputs.map((input, index) => {
                              total =
                                total +
                                (sum +
                                  parseInt(
                                    `${text.tax ? (text.tax * sum) / 100 : 0}`
                                  ) -
                                  parseInt(
                                    `${
                                      text.discount
                                        ? (text.discount * sum) / 100
                                        : 0
                                    }`
                                  ));
                            })}
                            {total}
                          </div>
                        </div>
                      </div>
                      <div className="col-6 text-md-end">
                        <span
                          className="bg-transparent border-0"
                          id="inputGroup-sizing-sm"
                        >
                          Amount Paid
                        </span>
                      </div>
                      <div className="col-5">
                        <div className="input-group input-group-sm mb-3">
                          <span className="input-group-text bg-transparent border-0 border-3 rounded-0 border-bottom">
                            {" "}
                            {currency}{" "}
                          </span>
                          <input
                            onChange={handlechange}
                            type="number"
                            className="form-control border-0 border-3 rounded-0 border-bottom"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            name="amountpaid"
                            value={text.amountpaid}
                          />
                        </div>
                      </div>
                      <div className="col-6 text-md-end">
                        <span
                          className="bg-transparent border-0"
                          id="inputGroup-sizing-sm"
                        >
                          Balance Due
                        </span>
                      </div>
                      <div className="col-5">
                        <div className="input-group-sm mb-3">
                          <div className="text-start">
                            {currency}{" "}
                            {parseInt(total - text.amountpaid)
                              ? parseInt(total - text.amountpaid)
                              : "0"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="px-lg-2 px-md-5 p-2">
              <div className="row g-3">
                <div className="col-12">
                  <button
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
                      tabIndex="{-1}"
                      aria-labelledby="exampleModalLabel"
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
                                templete.toString() === "0"
                                  ? "d-block"
                                  : "d-none "
                              }`}
                            >
                              <Invoiceform
                                text={text}
                                previewImage={previewImage}
                                themecolor={themecolor}
                                inputs={inputs}
                                currency={currency}
                              />
                            </div>
                            <div
                              className={`${
                                templete.toString() === "1"
                                  ? "d-block"
                                  : "d-none"
                              }`}
                            >
                              <Invoiceform2
                                text={text}
                                previewImage={previewImage}
                                themecolor={themecolor}
                                inputs={inputs}
                                currency={currency}
                              />
                            </div>
                            <div
                              className={`${
                                templete.toString() === "2"
                                  ? "d-block"
                                  : "d-none"
                              }`}
                            >
                              <Invoiceform3
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
                      value="#000000"
                      style={{
                        height: "20px ",
                        width: "20px ",
                        backgroundColor: "#000000",
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
                          templete.toString() === 0
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
                    <div className="col-4 text-start ">
                      {" "}
                      <button
                        className={`${
                          templete.toString() === 1
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
                          templete.toString() === 2
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
                    </div>
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
                                    className={`${
                                      templete.toString() === 0
                                        ? " border-3 border-primary"
                                        : "border-0"
                                    }`}
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
                                <div className="col-4 text-center">
                                  <button
                                    className={`${
                                      templete.toString() === 1
                                        ? " border-3 border-primary"
                                        : "border-0"
                                    }`}
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
                                    className={`${
                                      templete.toString() === 2
                                        ? " border-3 border-primary"
                                        : "border-0"
                                    }`}
                                    onClick={() => setTemplete(2)}
                                  >
                                    <Image
                                      src={invoicepic3}
                                      alt=""
                                      style={{ width: "100%" }}
                                      height={200}
                                    />
                                  </button>
                                </div>
                                <div className="col-11 mx-auto bg-danger">
                                  PRO
                                </div>
                                <div className="col-4 text-center">
                                  working on it......
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
                {/* <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() =>
                    generatePDF(componentRef, { filename: "page.pdf" })
                  }
                >
                  pdf
                </button> */}
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

export default Invoicetemp;
