"use client";
import React, { useState } from "react";
import { Card, Dropdown, ProgressBar } from "react-bootstrap";
import Chartbar from "../../Cards/Chartbar";
import Previusincome from "./Previusincome";


// fas fa-ellipsis-v

const Spending = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value));
  };

  const handleInputChange = (event) => {
    setSliderValue(parseInt(event.target.value));
  };
  return (
    <>
      <section className="">
        <div className="row g-4 ">
          <div className="col-lg-6">
            <Card className="border-0 shadow-lg px-2 rounded-4">
              <div className="card-title py-3 px-3 fw-bold">Spendings</div>
              <div className="card-body">
                <div className="row g-4">
                  <div className="col-md-6 ">
                    <div className="d-flex">
                      <svg
                        className="me-3 text-danger"
                        width="14"
                        height="54"
                        viewBox="0 0 14 54"
                        fill="#f75961"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="-6.10352e-05"
                          width={14}
                          height={54}
                          rx={7}
                          fill="currentColor"
                        />
                      </svg>
                      <div className="text-start fs-6">
                        Investment
                        <div className=" text-dark">
                          $1,567/<span className="text-secondary">$5,000</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="d-flex">
                      <svg
                        className="me-3 text-danger"
                        width="14"
                        height="54"
                        viewBox="0 0 14 54"
                        fill="#f75961"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="-6.10352e-05"
                          width={14}
                          height={54}
                          rx={7}
                          fill="currentColor"
                        />
                      </svg>
                      <div className="text-start fs-6">
                        Investment
                        <div className="div text-dark">
                          $1,567/<span className="text-secondary">$5,000</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="d-flex">
                      <svg
                        className="me-3 text-danger"
                        width="14"
                        height="54"
                        viewBox="0 0 14 54"
                        fill="#f75961"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="-6.10352e-05"
                          width={14}
                          height={54}
                          rx={7}
                          fill="currentColor"
                        />
                      </svg>
                      <div className="text-start fs-6">
                        Investment
                        <div className="div text-dark">
                          $1,567/<span className="text-secondary">$5,000</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="d-flex">
                      <svg
                        className="me-3 text-danger"
                        width="14"
                        height="54"
                        viewBox="0 0 14 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="-6.10352e-05"
                          width={14}
                          height={54}
                          rx={7}
                          fill="currentColor"
                        />
                      </svg>
                      <div className="text-start fs-6">
                        Investment
                        <div className="div text-dark">
                          $1,567/<span className="text-secondary">$5,000</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <Card className="border-0">
                      <div
                        className="investment-card bg-danger position-relative card-body rounded-4 text-center"
                        style={{
                          background: "#f75961",
                        }}
                      >
                        <div className="position-relative">
                          <svg style={{ width: "90px", height: "95px" }}>
                            <path
                              d="M 45 0 A 45 45 0 1 1 13.180194846605364 76.81980515339464 L 21.665476220843935 68.33452377915607 A 33 33 0 1 0 45 12"
                              data-value={5}
                              className="text-center"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M 13.180194846605364 76.81980515339464 A 45 45 0 0 1 44.99999999999999 0 L 44.99999999999999 12 A 33 33 0 0 0 21.665476220843935 68.33452377915607"
                              data-value={3}
                              className="text-center"
                              fill="rgba(234, 234, 234, 0.2)"
                            />
                          </svg>
                          <div>
                            <small className="small-cont position-absolute top text-light">
                              71%
                            </small>
                          </div>
                          <span className="fs-14 text-light d-block">
                            Investment
                          </span>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="col-md-6 ">
                    <Card className="border-0">
                      <div
                        className="investment-card bg-danger  position-relative card-body rounded-4 text-center"
                        style={{
                          background: "#f75961",
                        }}
                      >
                        <div className="position-relative">
                          <svg style={{ width: "90px", height: "95px" }}>
                            <path
                              d="M 45 0 A 45 45 0 0 1 76.81980515339464 76.81980515339464 L 68.33452377915607 68.33452377915606 A 33 33 0 0 0 45 12"
                              data-value={3}
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M 76.81980515339464 76.81980515339464 A 45 45 0 1 1 44.99999999999999 0 L 44.99999999999999 12 A 33 33 0 1 0 68.33452377915607 68.33452377915606"
                              data-value={5}
                              fill="rgba(255, 255, 255, 0.2)"
                            />
                          </svg>
                          <div>
                            <small className="small-cont position-absolute top text-light">
                              21%
                            </small>
                          </div>
                          <span className="fs-14 text-light d-block">
                            Investment
                          </span>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="col-md-6 ">
                    <Card className="border-0">
                      <div
                        className=" investment-card card-body bg-danger rounded-4 text-center"
                        style={{
                          background: "#f75961",
                        }}
                      >
                        <div className="position-relative">
                          <svg style={{ width: "90px", height: "95px" }}>
                            <path
                              d="M 45 0 A 45 45 0 0 1 76.81980515339464 13.180194846605364 L 68.33452377915607 21.665476220843935 A 33 33 0 0 0 45 12"
                              data-value={1}
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M 76.81980515339464 13.180194846605364 A 45 45 0 1 1 44.99999999999999 0 L 44.99999999999999 12 A 33 33 0 1 0 68.33452377915607 21.665476220843935"
                              data-value={7}
                              fill="rgba(234, 234, 234, 0.2)"
                            />
                          </svg>
                          <div>
                            <small className="small-cont position-absolute top text-light">
                              21%
                            </small>
                          </div>
                          <span className="fs-14 text-light d-block">
                            Investment
                          </span>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="col-md-6 ">
                    <Card className="border-0">
                      <div
                        className="investment-card bg-danger card-body rounded-4 text-center"
                        style={{
                          background: "#f75961",
                        }}
                      >
                        <div className="position-relative">
                          <svg
                            className=""
                            style={{ width: "90px", height: "95px" }}
                          >
                            <path
                              d="M 45 0 A 45 45 0 1 1 18.549663646838702 8.594235253127373 L 25.603086674348383 18.30243918562674 A 33 33 0 1 0 45 12"
                              data-value="9"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M 18.549663646838702 8.594235253127373 A 45 45 0 0 1 44.99999999999999 0 L 44.99999999999999 12 A 33 33 0 0 0 25.603086674348383 18.30243918562674"
                              data-value={1}
                              fill="rgba(255, 255, 255, 0.2)"
                            />
                          </svg>
                          <small className="small-cont position-absolute top text-light">
                            21%
                          </small>
                          <div></div>
                          <span className="fs-14 text-light d-block">
                            Investment
                          </span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>{" "}
            <Card className="border-0 spending  my-3 shadow-lg rounded-4">
              <div className="card-title pt-3 px-4 fw-bold d-flex justify-content-between">
                <div className="spending-tag">
                  Transaction Overview
                  <div className="text ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, eius!
                  </div>
                </div>
                <div className="option">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="dropdown-toggle"
                      variant=""
                      id="dropdown-basic"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 512"
                        height={20}
                        fill="#212529"
                      >
                        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                      </svg>
                      {/* <i className="fas fa-ellipsis-v"></i> */}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Delete</Dropdown.Item>
                      <Dropdown.Item href="#">Edit</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body">
                <Chartbar />
              </div>
            </Card>
            <Card
              className="border-0 spending postition-relative my-3 shadow-lg rounded-4 overflow-hidden"
              style={{ height: "200px" }}
            >
              <div className="card-title pt-3 px-4 fw-bold d-flex justify-content-between">
                <div className="spending-tag">
                  Weekly Wallet Usage
                  <div className="text d-flex align-items-end">
                    <svg
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9999 6L5.99994 -2.62268e-07L-6.10352e-05 6"
                        fill="#2BC155"
                      ></path>
                    </svg>
                    <h3 className="fw-bold my-auto"> 43% </h3>
                    Lorem ipsum dolor
                  </div>
                </div>
                <div className="option align-items-end d-flex">
                  <svg
                    width="21"
                    height="15"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.999939 13.5C1.91791 12.4157 4.89722 9.22772 6.49994 7.5L12.4999 10.5L19.4999 1.5"
                      stroke="#2BC155"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M6.49994 7.5C4.89722 9.22772 1.91791 12.4157 0.999939 13.5H19.4999V1.5L12.4999 10.5L6.49994 7.5Z"
                      fill="url(#paint0_linear2)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear2"
                        x1="10.2499"
                        y1="3"
                        x2="10.9999"
                        y2="13.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#2BC155"
                          stopOpacity="0.73"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#2BC155"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text">4% (30 days)</span>
                </div>
              </div>
              <div className="card-body">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  id="wave"
                  className="text-danger position-absolute start-0 top-50 end-0 bg-pattren"
                  style={{ transform: "rotate(0deg)", transition: "0.3s" }}
                  viewBox="0 0 1440 490"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="sw-gradient-0"
                      x1={0}
                      x2={0}
                      y1={1}
                      y2={0}
                    >
                      <stop stopColor="rgba(243, 106, 62, 1)" offset="0%" />
                      <stop stopColor="rgba(255, 179, 11, 1)" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path
                    style={{ transform: "translate(0, 0px)", opacity: 1 }}
                    fill="currentColor"
                    d="M0,196L10,196C20,196,40,196,60,171.5C80,147,100,98,120,73.5C140,49,160,49,180,98C200,147,220,245,240,269.5C260,294,280,245,300,196C320,147,340,98,360,81.7C380,65,400,82,420,89.8C440,98,460,98,480,122.5C500,147,520,196,540,204.2C560,212,580,180,600,179.7C620,180,640,212,660,245C680,278,700,310,720,302.2C740,294,760,245,780,236.8C800,229,820,261,840,253.2C860,245,880,196,900,163.3C920,131,940,114,960,122.5C980,131,1000,163,1020,196C1040,229,1060,261,1080,285.8C1100,310,1120,327,1140,343C1160,359,1180,376,1200,326.7C1220,278,1240,163,1260,114.3C1280,65,1300,82,1320,138.8C1340,196,1360,294,1380,351.2C1400,408,1420,425,1430,432.8L1440,441L1440,490L1430,490C1420,490,1400,490,1380,490C1360,490,1340,490,1320,490C1300,490,1280,490,1260,490C1240,490,1220,490,1200,490C1180,490,1160,490,1140,490C1120,490,1100,490,1080,490C1060,490,1040,490,1020,490C1000,490,980,490,960,490C940,490,920,490,900,490C880,490,860,490,840,490C820,490,800,490,780,490C760,490,740,490,720,490C700,490,680,490,660,490C640,490,620,490,600,490C580,490,560,490,540,490C520,490,500,490,480,490C460,490,440,490,420,490C400,490,380,490,360,490C340,490,320,490,300,490C280,490,260,490,240,490C220,490,200,490,180,490C160,490,140,490,120,490C100,490,80,490,60,490C40,490,20,490,10,490L0,490Z"
                  />
                </svg>
              </div>
            </Card>
          </div>
          <div className="col-lg-6">
            <Card className="border-0 spending px-2 mb-3 shadow-lg rounded-4">
              <div className="card-title pt-3 px-4 fw-bold d-flex justify-content-between">
                <div className="spending-tag">
                  Quick Transfer
                  <div className="text ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, eius!
                  </div>
                </div>
                <div className="option">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="dropdown-toggle"
                      variant=""
                      id="dropdown-basic"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 512"
                        height={20}
                        fill="#212529"
                      >
                        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                      </svg>

                      {/* <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /> */}
                      {/* <FontAwesomeIcon icon="fas fa-ellipsis-v" className="text-dark" /> */}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Delete</Dropdown.Item>
                      <Dropdown.Item href="#">Edit</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body">
                <div className="image1 d-flex justify-content-between px-3 py-2">
                  <div className="d-flex">
                    <div className="profilebtn" />
                    <div className="px-3">
                      <div className="name fw-bold">Name</div>
                      <div className="username ">username</div>
                    </div>
                  </div>
                  <div className="btn">btn</div>
                </div>
                <div className="recent-brand my-2 d-flex justify-content-between">
                  <span>Recent Friend</span>
                  <span className="recent-brand">See more</span>
                </div>
                <div className="d-flex my-3 justify-content-center">
                  <div className="profilebtn" />
                  <div className="profilebtn" />
                  <div className="profilebtn" />
                  <div className="profilebtn" />
                </div>
                <div>Insert amount</div>
                <h2 className="text-center my-3"> {sliderValue}</h2>

                <input
                  type="range"
                  min={0}
                  max={800}
                  value={sliderValue}
                  onChange={handleSliderChange}
                  className="form-range"
                  id="customRange1"
                />
                <div className="balance d-flex my-2 justify-content-between">
                  <div>Your balance</div>
                  <div>Rs 200</div>
                </div>
                <button
                  type="button"
                  className="btn btn-danger w-100 rounded-3 py-2"
                >
                  Transfer now
                </button>
              </div>
            </Card>
            <Card className="border-0 spending px-2 mb-3 shadow-lg rounded-4">
              <div className="card-title pt-3 px-4 fw-bold d-flex justify-content-between">
                <div className="spending-tag">
                  Bar Spendings
                  <div className="text ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
                <div className="option">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="dropdown-toggle"
                      variant=""
                      id="dropdown-basic"
                    >
                      {/* <i className="fas fa-ellipsis-v" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 512"
                        height={20}
                        fill="#212529"
                      >
                        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                      </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Delete</Dropdown.Item>
                      <Dropdown.Item href="#">Edit</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body">
                {/* <div className="d-flex">
                    <div className="profilebtn" />
                    <div className="px-3">
                      <div className="name fw-bold">Name</div>
                      <div className="username ">username</div>
                    </div>
                  </div> */}
                <ProgressBar now={60} />

                <div className="recent-brand my-3 d-flex justify-content-between">
                  <small className="small">Investment</small>
                  <small className="small">
                    <span className="fw-bold">$2000/</span> $2100
                  </small>
                </div>

                <ProgressBar variant="danger" now={40} />

                <div className="recent-brand my-3 d-flex justify-content-between">
                  <small className="small">Investment</small>
                  <small className="small">
                    <span className="fw-bold">$2000/</span> $2100
                  </small>
                </div>

                <ProgressBar variant="warning" now={60} />

                <div className="recent-brand my-3 d-flex justify-content-between">
                  <small className="small">Investment</small>
                  <small className="small">
                    <span className="fw-bold">$2000/</span> $2100
                  </small>
                </div>

                <ProgressBar variant="success" now={60} />

                <div className="recent-brand my-3 d-flex justify-content-between">
                  <small className="small">Investment</small>
                  <small className="small">
                    <span className="fw-bold">$2000/</span> $2100
                  </small>
                </div>

                <button
                  type="button"
                  className="btn btn-danger py-3 fw-bold bg-transparent text-danger  w-100 rounded-3 py-2"
                >
                  Transfer now
                </button>
              </div>
            </Card>
            <Previusincome />
          </div>
        </div>
      </section>
    </>
  );
};

export default Spending;
