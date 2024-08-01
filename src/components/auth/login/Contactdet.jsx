"use client";
import axios from "axios";
import React from "react";
import "./style/login.css";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Contactdet = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      contact: "",
    },
    onSubmit,
  });
  const session = useSession();
  // console.log(session);
  async function onSubmit(value) {
    // console.log(value);
    try {
      const getData = async () => {
        const data = await axios.post(
          "https://utlity-manpreets-projects-05f6dc9b.vercel.app/api/details/signup",
          {
            body: {
              email: session.data.user.email,
              contact: value.contact,
              update: "updatecontact",
            },
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // console.log("data");
        // console.log(data.data.data);
        if (data.data.data === true) {
          alert("Contact  successfully added");
          sessionStorage.getItem("currenturl")
            ? router.push(sessionStorage.getItem("currenturl"))
            : router.push("/dashboard");
        }
      };

      getData();
    } catch (error) {
      console.log("hello");
    }
  }
  return (
    <div>
      <div className="login-page h-100">
        <div className="content-wrapper">
          <div className="content">
            <div className="login-wrapper shadow-lg bg-white">
              <h1 className="title">Add Contact </h1>

              <div className="login-form">
                <div className="form" style={{ textAlign: "start" }}>
                  <form onSubmit={formik.handleSubmit}>
                    <p className="content-item">
                      <label>
                        <span>Number</span>
                        <input
                          style={{ paddingLeft: "10px" }}
                          type="text"
                          name="contact"
                          {...formik.getFieldProps("contact")}
                          id="contact"
                          placeholder="Enter your number"
                          required
                        />
                      </label>
                    </p>

                    <button type="submit" className="login filled square">
                      Add Contact
                    </button>
                    <div className="clear-fix" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactdet;
