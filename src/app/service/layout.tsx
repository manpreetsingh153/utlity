// 'use client'
import React, { ReactNode } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { metadata } from "../layout";
export default function ServiceLayout({ children }: { children: ReactNode }) {
  metadata.title = "Service";
  metadata.description = "About services";

  return (
    <>
      <Header active />
      <div className="mt-5 pt-5">{children}</div>
      <Footer />
    </>
  );
}
