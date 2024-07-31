"use client";
import React from "react";
import { useState } from "react";
import "./style/style.css";
const Donation = () => {
  const [text, setText] = useState({});

  const handlechange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    // setText(event.target.value);

    setText((prev) => ({ ...prev, [key]: value }));
  };
  const onsunmitfun = () => {};
  return (
    <div>
      <div className="container-fluid">
        <div className="col-md-6 mx-auto mt-5 border border-3 border-secondary rounded-3 ">
          <div className="p-5">
            <h2 className="text-center fw-bold mb-4">Make a Donation</h2>
            <form action="#" onSubmit={onsunmitfun} method="post">
              <label className="fw-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className="px-4 rounded-3"
                type="text"
                id="name"
                name="name"
                onChange={handlechange}
                value={text.name}
                required
              />
              <label className="fw-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="px-4 rounded-3"
                type="email"
                id="email"
                value={text.email}
                onChange={handlechange}
                name="email"
                required
              />
              <label className="fw-bold mb-2" htmlFor="amount">
                Donation Amount:
              </label>
              <input
                className="px-4 rounded-3"
                type="text"
                name="amountdonation"
                value={"$1"}
                id=""
              />
              <input
                type="submit"
                defaultValue="Donate"
                onClick={onsunmitfun}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
