"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import "./style/login.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

import axios from "axios";
import loginValidate from "@/lib/validate";
import { useFormik } from "formik";

function Login(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit,
  });
  const [message, setMessage] = useState(null);
  async function onSubmit(value) {
    signIn("credentials", {
      email: value.email,
      password: value.password,
    });
  }

  const session = useSession();

  const router = useRouter();
  console.log(session);
  useEffect(() => {
    if (session.data) {
      return sessionStorage.getItem("currenturl")
        ? router.push(sessionStorage.getItem("currenturl"))
        : router.push("/dashboard");
    } else {
      router.push("/login");
      location;
    }
  }, [session.status]);
  return (
    <div className="login-page mt-0 overflow-scroll h-100">
      <div className="text-center">
        <div className="content-wrapper mt-0">
          <div className="content">
            <div className="login-wrapper bg-white pt-3 shadow-lg">
              <h1 className="title">login</h1>
              <div className="mobile-hint">you can login with:</div>
              <div className="social-media">
                <ul>
                  <li className="facebook rounded-3">
                    <Link
                      href="#"
                      className="d-flex "
                      onClick={() => signIn("facebook")}
                    >
                      <div className="icon facebook-icon" />
                      <div className="text">login with facebook</div>
                    </Link>
                  </li>
                  <li className="google rounded-3">
                    <Link href="#" onClick={() => signIn("google")}>
                      <div className="icon google-icon" />
                      <div className="text">login with google</div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="or-section">
                <div className="left-line" />
                <h2>OR</h2>
                <div className="right-line" />
              </div>

              <div className="login-form">
                <div className="form" style={{ textAlign: "start" }}>
                  <form onSubmit={formik.handleSubmit}>
                    <p className="content-item">
                      <label>
                        <span>email address</span>
                        <input
                          style={{ paddingLeft: "10px" }}
                          type="text"
                          name="email"
                          // onChange={formik.handleChange}
                          {...formik.getFieldProps("email")}
                          // value={formik.values.email}
                          placeholder="Enter your email"
                          required
                        />
                      </label>
                      {formik.errors.email && formik.touched.email ? (
                        <span>{formik.errors.email} </span>
                      ) : (
                        ""
                      )}
                    </p>
                    <p className="content-item">
                      <label>
                        <span>password</span>
                        <input
                          style={{ paddingLeft: "10px" }}
                          type="password"
                          name="password"
                          {...formik.getFieldProps("password")}
                          // onChange={formik.handleChange}
                          // value={formik.values.password}
                          placeholder="Enter your password"
                          required
                        />
                        {formik.errors.password && formik.touched.password ? (
                          <span>{formik.errors.password} </span>
                        ) : (
                          ""
                        )}
                        {message ? <span>{message} </span> : ""}
                      </label>
                    </p>
                    <button type="submit" className="login filled square">
                      login
                    </button>
                    <div className="clear-fix" />
                  </form>
                </div>
              </div>

              <p className="signupbtn">
                Don't have an account?{" "}
                <span>
                  {" "}
                  <Link href="/sign-up" className="link">
                    Sign up
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
// export { isMailexist };

export default Login;
