"use client";
import React, { useEffect } from "react";
import Invoicetemp from "@/components/Dashboard/invoice/Invoicetemp";
import Header from "@/components/layout/Header";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const page = () => {
  const session = useSession();
  const router = useRouter();
  // useEffect(() => {
  //   const usedata = async () => {
  //     const response = await axios.get(
  //       "http://localhost:3000/api/details",
  //       {
  //         email: session.data?.user?.email as string,
  //       }
  //     );
  //   };

  //   usedata();
  // }, [session]);

  return (
    <div>
      <Header data={"true"} />
      {/* <Timesheetinvoice/> */}
      <div className="mt-5 pt-5">
        <Invoicetemp />
        {/* <Timesheetform /> */}
      </div>
    </div>
  );
};

export default page;
