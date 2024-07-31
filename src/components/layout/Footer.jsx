/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import logo from "../../assets/images/utlitylogo2.png";
import Link from "next/link";

import "./style/style.css";

const Footer = () => {
  return (
    <div>
      <div className="pg-footer align-items-end">
        <footer className="footer">
          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <Link className="footer-copyright-link" href="#" target="_self">
                  {" "}
                  ©Copyright 2024. | Designed By: | All rights reserved.{" "}
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
