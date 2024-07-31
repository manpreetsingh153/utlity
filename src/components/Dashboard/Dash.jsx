"use client";
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "./style/dash.css";
import card1 from "../../assets/images/card-1.jpg";
import card2 from "../../assets/images/card-2.jpg";
import card3 from "../../assets/images/card-3.jpg";
import card4 from "../../assets/images/card-4.jpg";
import Image from "next/image";
import Dashcard from "./Dashcard";
import Dashdata from "./dashboardcontent/Dashdata";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dropdown } from "react-bootstrap";
import { signOut, useSession } from "next-auth/react";
import images from '@/assets/images/dummy-profile-pic-male1.jpg'
function Dash(data) {
  const pathname = usePathname();
  // console.log(pathname + " path");
  const [toggle, setToggle] = useState("");
  const [logoprev, setLogoprev] = useState("");

  const [property, setProperty] = useState("");
  const chntogle = () => {
    if (toggle === "toggled") {
      setToggle("");
      setProperty("");
      setLogoprev("");
    } else {
      setToggle("toggled");
      setProperty("cards_landscape_wrap-2");
      setLogoprev("toggled");
    }
  };

  const session = useSession();
  // console.log(session);
  
  // const images =
  //   "../../assets/images/dummy-profile-pic-male1.jpg";
  if (session.status === "authenticated") {
    return (
      <>
        <section className="py-3">
          <div className="container-fluid">
            <div className={`${toggle} `} id="wrapper">
              <Sidebar logoprev={logoprev} />
              <div
                id="navbar-wrapper"
                style={{
                  border: "0px",
                  borderColor: "transparent !important",
                  borderBottom: "1px solid #ece7e7",
                }}
              >
                <nav className="navbar navbar-inverse  bg-white shadow-lg">
                  <div className="container-fluid d-flex justify-content-between">
                    <div className="navbar-header  w-100 d-flex justify-content-between">
                      <Link
                        href="#"
                        className="navbar-brand px-3 text-dark"
                        id="sidebar-toggle"
                        onClick={chntogle}
                      >
                        {toggle ? (
                          <>
                            <i
                              className="fa-solid first-icon text-dark  fa-chevron-right"
                              style={{ fontSize: "30px" }}
                            ></i>
                          </>
                        ) : (
                          <>
                            <i
                              className="fa-solid first-icon text-dark fa-chevron-left"
                              style={{ fontSize: "30px" }}
                            ></i>
                          </>
                        )}
                        {!toggle ? (
                          <i
                            className="fa-solid second-icon text-dark fa-chevron-right"
                            style={{ fontSize: "30px" }}
                          ></i>
                        ) : (
                          <i
                            className="fa-solid second-icon text-dark fa-chevron-left"
                            style={{ fontSize: "30px" }}
                          ></i>
                        )}
                      </Link>
                      <div className="d-flex">
                        <div className="searchcontainer d-flex ">
                          <form className="d-flex" role="search">
                            <input
                              className="form-control"
                              type="search"
                              // style={{ borderRadius: "25px" }}
                              placeholder="Search...."
                              aria-label="Search"
                            />
                            <button className="d-flex" type="submit">
                              <i className="fa fa-search" aria-hidden="true" />
                            </button>
                          </form>
                        </div>

                        <Dropdown>
                          <Dropdown.Toggle
                            className={`btn btn-outline-dark profilebtn  ${
                              toggle === "toggled" ? "profilebtn1" : ""
                            } mx-2`}
                            variant=""
                            id="dropdown-basic"
                            style={{
                              background: `url(${
                                session.data.user.image
                                  ? session.data.user.image
                                  : images
                              })`,backgroundSize:"cover"
                            }}
                          ></Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item>
                              {session.data.user.name
                                ? session.data.user.name
                                : "Username"}{" "}
                            </Dropdown.Item>
                            <Dropdown.Item href="account">Account </Dropdown.Item>
                            <Dropdown.Item href="#">Service</Dropdown.Item>
                            <Dropdown.Item href="#" onClick={() => signOut("")}>
                              Log out
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className={`${property}`} id="cards_landscape_wrap-2">
                {pathname === "/dashboard" ? (
                  <Dashdata />
                ) : (
                  <Dashcard data={data} />
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else if (session.status === "loading") {
    <p>Loading ... </p>;
  } else route.push("/login");
}

export default Dash;
