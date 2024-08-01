"use client";
import React, { useEffect, useMemo, useState } from "react";
import "./style/account.css";
import Link from "next/link";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// import "./style/login.css";
import { useFormik } from "formik";

const Account = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      currentpassword: "",
      newpassword: "",
      confirmpassword: "",
    },
    onSubmit,
  });

  const [showpass, setShowpass] = useState("password");
  const handle = () => {
    if (showpass === "password") {
      setShowpass("text");
    } else {
      setShowpass("password");
    }
  };
  async function onSubmit(value) {
    // console.log(value);
    try {
      const getData = async () => {
        const data = await axios.post("https://utlity-manpreets-projects-05f6dc9b.vercel.app/api/details", {
          body: {
            email:session.data.user.email,
            password: value.currentpassword,
            newpassword: value.newpassword,
            confirmpassword: value.confirmpassword,
            query:"updatepassword"
          },
          headers: {
            "Content-Type": "application/json",
          },
        });
        // const data = await axios.post(
        //   "http://localhost:3000/api/details/signup",
        //   {
        //     body: {
        //       password: value.currentpassword,
        //       newpassword: value.newpassword,
        //       confirmpassword: value.confirmpassword,
        //     },
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   }
        // );

      
      };
      getData();
    } catch (error) {
      console.log("hello");
    }
  }
  const session = useSession();
  //   const route = useRouter()
  const [useremail, setUseremail] = useState("");
  const [userdetail, setUserdetail] = useState("");

  useEffect(() => {
    return () => {
      setUseremail(session.data?.user.email);
    };
  }, [session.data]);

  // console.log(useremail);
  // console.log("session.data?.user.email");
  useEffect(() => {
    const fetchuserdetail = async () => {
      const resp = await axios.post("http://localhost:3000/api/var", {
        body: {
          email: session.data?.user.email,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUserdetail(resp.data);
    };
    fetchuserdetail();
  }, [session.status]);
  console.log(userdetail.data);
  console.log("userdetail.data");
  console.log("userdetail");
  console.log(userdetail?.data?.email);
  //   const alldata = userdetail();
  return (
    <>
      <div className="container w-75 my-5">
        <Link
          className="nav-link fw-bold d-inline p-3 user-detail"
          aria-current="page"
          href="/dashboard"
        >
          Dashboard
        </Link>
        <div className="row my-4 g-4">
          <div className="col-8 user-detail fw-bold  rounded py-2">
            User Details{" "}
          </div>
          <div className="col-8 border-bottom">
            <div className="d-flex justify-content-between">
              Name : <span>{userdetail.data?.name}</span>{" "}
            </div>
          </div>
          <div className="col-8 border-bottom">
            {" "}
            <div className="d-flex justify-content-between">
              Email : <span>{userdetail?.data?.email} </span>{" "}
            </div>
          </div>
          <div className="col-8 border-bottom">
            <div className="d-flex justify-content-between">
              Contact : <span>{userdetail?.data?.contact}</span>{" "}
            </div>
          </div>
          <div className="col-8">
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-md-4">
                  {" "}
                  <p className="content-item form-group w-100">
                    <label className="w-100">
                      <input
                        className="form-control w-100"
                        style={{ paddingLeft: "10px" }}
                        type={showpass}
                        name="currentpassword"
                        {...formik.getFieldProps("currentpassword")}
                        id="currentpassword"
                        placeholder="Current Password"
                        required
                      />
                    </label>
                  </p>
                </div>
                <div className="col-md-4">
                  {" "}
                  <p className="content-item form-group w-100">
                    <label className="w-100">
                      <input
                        className="form-control w-100"
                        style={{ paddingLeft: "10px" }}
                        type={showpass}
                        {...formik.getFieldProps("newpassword")}
                        name="newpassword"
                        id="newpassword"
                        placeholder="New Password"
                        required
                      />
                    </label>
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="content-item form-group">
                    <label>
                      <input
                        style={{ paddingLeft: "10px" }}
                        className="form-control"
                        type={showpass}
                        name="confirmpassword"
                        {...formik.getFieldProps("confirmpassword")}
                        id="confirmpassword"
                        placeholder="Confirm Password"
                        required
                      />
                    </label>
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="login filled square btn btn-danger"
              >
                Update Password
              </button>
              <button className="btn " onClick={handle}>
                <i className="fa-solid fa-eye"></i>
              </button>
              <div className="clear-fix" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
