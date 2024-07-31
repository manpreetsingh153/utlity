"use client";
import React from "react";
import "../style/dash.css";
import logo from "@/assets/images/final_logo.png";
import Image from "next/image";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const Salaryoffer = (props) => {
  let sum = 0;
  const session = useSession();
  const router = useRouter();
  const componentRef = useRef();

  return (
    <>
      <section className="mb-5" ref={componentRef}>
        <div className="">
          <div className="container-fluid invoice-box rounded-3" >
            <div className="d-flex justify-content-between text-align-center">
              <Image
                src={props.previewImage ? props.previewImage : logo}
                alt="img"
                width={100}
                height={100}
                className="d-block img-fluid ms-auto logo-s"
                priority={true}
              />
            </div>
            <div className="appointment-letter">
              <div className="offer-letter ali">
                <div className="row">
                  <div className="col">
                    <h6 className="text-blue fs-6 mb-3 side-m">
                      {props.text.campanyname
                        ? props.text.campanyname
                        : "[Company Name]"}{" "}
                    </h6>
                    <div className="text-blue fs-6 mb-3 side-m">
                      <div>
                        {props.text.date && props.text.contact_info
                          ? `${props.text.date} 
                        `
                          : "[Date and contact information]"}
                      </div>
                      <div>
                        {props.text.date && props.text.contact_info
                          ? `${props.text.contact_info} 
                        `
                          : ""}
                      </div>
                      <p />
                    </div>
                    <h6 className="fs-6 mb-3 side-m">
                      Subject:{" "}
                      <span className="">
                        {" "}
                        {props.text.subject
                          ? `${props.text.subject}`
                          : "[Subject (Job offer from)]"}
                      </span>
                    </h6>
                    <h6 className="fs-6 mb-3 line-h side-m">
                      Congratulations{" "}
                      <span className="text-blue">
                        {" "}
                        {props.text.emp_name
                          ? props.text.emp_name
                          : "[Employe Name]"}{" "}
                      </span>{" "}
                      on receiving a job offer from{" "}
                      <span className="text-blue">
                        {" "}
                        {props.text.campanyname
                          ? props.text.campanyname
                          : "[Company Name]"}{" "}
                      </span>
                      . We are pleased to offer you a position as a
                      <span className="text-blue">
                        {" "}
                        {props.text.desination
                          ? props.text.desination
                          : "[Designation]"}{" "}
                      </span>
                      in our{" "}
                      <span className="text-blue">
                        {props.text.department
                          ? props.text.department
                          : "[Department]"}{" "}
                      </span>
                      .
                    </h6>
                    <h6 className="fs-6 mb-3 side-m">Salary Details :</h6>
                    <div className="side-m">
                      <table className="table fs-6">
                        <thead></thead>
                        <tbody>
                          {props.inputs.map((row, index) => {
                            return (
                              <tr className="item" key={index}>
                                <td style={{ textAlign: "start" }}>
                                  {row?.itemname ? row?.itemname : "[Enter field]"}
                                </td>
                                <td style={{ textAlign: "start" }}>
                                  {row?.quantity
                                    ? row?.quantity
                                    : "[Amount (in rs)]"}{" "}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    <h6 className="fs-6 mb-3 line-h side-m">
                      If you choose to accept, please sign and return this
                      letter to me at{" "}
                      <span className="text-blue line-h">
                        {props.text.senderemail
                          ? props.text.senderemail
                          : "[E-mail ID]"}{" "}
                      </span>{" "}
                      by
                      <span className="text-blue line-h">
                        {" "}
                        {props.text.expirydate
                          ? props.text.expirydate
                          : " [offer expiry date]"}{" "}
                      </span>
                      .
                    </h6>
                    <p className="fs-6 mb-4 line-h side-m ">
                      Hope to welcome you to our team soon! We look forward to
                      working with you.
                    </p>

                    <h6 className="fs-6 mb-3 side-m">Best regards,,</h6>
                    <h6 className="text-blue fs-6 mb-3 side-m">
                      {props.text.sendername
                        ? props.text.sendername
                        : "[Sender Name]"}{" "}
                    </h6>
                    <h6 className="text-blue fs-6 mb-3 side-m">
                      {props.text.sendsignation
                        ? props.text.sendsignation
                        : "[Designation]"}{" "}
                    </h6>
                    <h6 className="text-blue fs-6 mb-3 side-m">
                      {props.text.campanyname
                        ? props.text.campanyname
                        : "[Company Name]"}{" "}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Salaryoffer;

// "use client";
// import React from "react";
// import "../style/dash.css";
// import logo from "@/assets/images/final_logo.png";
// import Image from "next/image";
// import { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
// 

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log("Email:", email);
//   console.log("Password:", password);
//   if (email === "abc@gmail.com" && password === "abc") {
//     // window.open("", "_self");
//     return 1;
//   } else {
//     alert("enter valid pass");
//     return 0;
//   }
// };
// const Salaryoffer = (props) => {
//   const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     // {window.open('/','_self');}
//     content: () => componentRef.current,
//     documentTitle: "Visitor Pass",
//     onAfterPrint: () => console.log("Printed PDF successfully!"),
//   });
//   return (
//     <>
//       <section className="my-5" ref={componentRef}>
//         <div className="container">
//           <div className="invoice-box rounded-3">
//             <div className="d-flex justify-content-between text-align-center">
//               <h3 className="fw-bold my-3 side-m">Offer With Salary</h3>
//               <Image
//                 src={props.previewImage ? props.previewImage : logo}
//                 alt="img"
//                 width={100}
//                 height={100}
//                 className="d-block img-fluid ms-auto logo-s"
//               />
//             </div>
//             <div className="appointment-letter">
//               <div className="offer-letter ali">
//                 <div className="row">
//                   <div className="col">
//                     <h6 className="text-blue fs-6 mb-3 side-m">
//                       {props.text.campanyname
//                         ? props.text.campanyname
//                         : "[Company Name]"}{" "}
//                     </h6>
//                     <div className="text-blue fs-6 mb-3 side-m">
//                       {props.text.date && props.text.contact_info
//                         ? `${props.text.date} and ${props.text.contact_info}`
//                         : "[Date and contact information]"}
//                       <p />
//                     </div>
//                     <h6 className="fs-6 mb-3 side-m">
//                       Subject:{" "}
//                       <span className="">
//                         {" "}
//                         {props.text.subject
//                           ? `${props.text.subject}`
//                           : "[Subject (Job offer from)]"}
//                       </span>
//                       <span className="text-blue">
//                         {" "}
//                         {props.text.campanyname
//                           ? props.text.campanyname
//                           : "[Company Name]"}{" "}
//                       </span>
//                     </h6>
//                     <h6 className="fs-6 mb-3 line-h side-m">
//                       Congratulations on receiving a job offer from{" "}
//                       <span className="text-blue">
//                         {" "}
//                         {props.text.campanyname
//                           ? props.text.campanyname
//                           : "[Company Name]"}{" "}
//                       </span>
//                       . We are pleased to offer you a position as a
//                       <span className="text-blue">
//                         {" "}
//                         {props.text.desination
//                           ? props.text.desination
//                           : "[Designation]"}{" "}
//                       </span>
//                       in our{" "}
//                       <span className="text-blue">
//                         {props.text.department
//                           ? props.text.department
//                           : "[Department]"}{" "}
//                       </span>
//                       .
//                     </h6>
//                     <h6 className="fs-6 mb-3 side-m">Salary Details :</h6>
//                     <div className="side-m">
//                       <table className="table fs-6">
//                         <thead></thead>
//                         <tbody>
//                           <tr style={{ textAlign: "start" }}>
//                             <td style={{ textAlign: "start" }}>
//                               Total package
//                             </td>
//                             <td style={{ textAlign: "start" }}>
//                               {props.text.amount
//                                 ? props.text.amount
//                                 : "[Amount (in rs)]"}{" "}
//                             </td>
//                           </tr>
//                           <tr style={{ textAlign: "start" }}>
//                             <td style={{ textAlign: "start" }}>Basic Salary</td>
//                             <td style={{ textAlign: "start" }}>
//                               {props.text.basicsalary
//                                 ? props.text.basicsalary
//                                 : "[Amount (in rs)]"}{" "}
//                             </td>
//                           </tr>
//                           <tr>
//                             <td style={{ textAlign: "start" }}>
//                               Provident Fund (PF)
//                             </td>
//                             <td style={{ textAlign: "start" }}>
//                               {props.text.pf
//                                 ? props.text.pf
//                                 : "[Amount (in rs)]"}{" "}
//                             </td>
//                           </tr>
//                           <tr>
//                             <td style={{ textAlign: "start" }}>Allowance</td>
//                             <td style={{ textAlign: "start" }}>
//                               {props.text.allowance
//                                 ? props.text.allowance
//                                 : "[Amount (in rs)]"}{" "}
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>

//                     <h6 className="fs-6 mb-3 line-h side-m">
//                       If you choose to accept, please sign and return this
//                       letter to me at{" "}
//                       <span className="text-blue line-h">
//                         {props.text.basicsalary
//                           ? props.text.basicsalary
//                           : "[E-mail ID]"}{" "}
//                       </span>{" "}
//                       by
//                       <span className="text-blue line-h">
//                         {" "}
//                         {props.text.expirydate
//                           ? props.text.expirydate
//                           : " [offer expiry date]"}{" "}
//                       </span>
//                       .
//                     </h6>
//                     <p className="fs-6 mb-4 line-h side-m ">
//                       Hope to welcome you to our team soon! We look forward to
//                       working with you.
//                     </p>

//                     <h6 className="fs-6 mb-3 side-m">Best regards,,</h6>
//                     <h6 className="text-blue fs-6 mb-3 side-m">
//                       {props.text.sendername
//                         ? props.text.sendername
//                         : "[Sender Name]"}{" "}
//                     </h6>
//                     <h6 className="text-blue fs-6 mb-3 side-m">
//                       {props.text.sendsignation
//                         ? props.text.sendsignation
//                         : "[Designation]"}{" "}
//                     </h6>
//                     <h6 className="text-blue fs-6 mb-3 side-m">
//                       {props.text.campanyname
//                         ? props.text.campanyname
//                         : "[Company Name]"}{" "}
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <button
//         type="button"
//         className="btn btn-secondary mt-4"
//         onClick={handlePrint}
//       >
//         Generate
//       </button>
//     </>
//   );
// };

// export default Salaryoffer;
