"use client"; /* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import "./style/login.css";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";

function Signup() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      contact: "",
    },
    onSubmit,
  });

  async function onSubmit(value) {
    // console.log(value);
    try {
      const getData = async () => {
        const data = await axios.post("http://localhost:3000/api/details/signup", {
          body: {
            email: value.email,
            password: value.password,
            name: value.name,
            contact: value.contact,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });

        // console.log(data);
        if (data.data.data === "user exist") {
          alert("user already Exist you can login");
          // router.push("/login");
        }
      };
      getData();
      router.push("/login");
    } catch (error) {
      console.log("hello");
    }
  }
  return (
    <div>
      <div className="login-page">
        <div className="content-wrapper">
          <div className="content">
            <div className="login-wrapper shadow-lg bg-white">
              <h1 className="title">Signup</h1>

              <div className="login-form">
                <div className="form" style={{ textAlign: "start" }}>
                  <form onSubmit={formik.handleSubmit}>
                    <p className="content-item">
                      <label>
                        <span>enter name</span>
                        <input
                          style={{ paddingLeft: "10px" }}
                          type="text"
                          name="name"
                          {...formik.getFieldProps("name")}
                          id="name"
                          placeholder="Enter your Name"
                          required
                        />
                      </label>
                    </p>
                    <p className="content-item">
                      <label>
                        <span>email address</span>
                        <input
                          style={{ paddingLeft: "10px" }}
                          type="text"
                          {...formik.getFieldProps("email")}
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          required
                        />
                      </label>
                    </p>
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
                    <p className="content-item">
                      <label>
                        <span>password</span>
                        <input
                          style={{ paddingLeft: "10px" }}
                          type="password"
                          name="password"
                          {...formik.getFieldProps("password")}
                          id="password"
                          placeholder="Enter your password"
                          required
                        />
                      </label>
                    </p>
                    <button type="submit" className="login filled square">
                      Signup
                    </button>
                    <div className="clear-fix" />
                  </form>
                </div>
              </div>
              <p className="signupbtn">
                Have an account{" "}
                <span>
                  {" "}
                  <Link rel="preload" href="/login" className="link">
                    Login
                  </Link>
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
