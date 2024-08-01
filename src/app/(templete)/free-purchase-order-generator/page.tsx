'use client'
import React, { useEffect } from "react";
// import Purchaseform from "@/components/Dashboard/purchaseorder/Purchaseform";
import Mainpurchase from "@/components/Dashboard/purchaseorder/Mainpurchase";
// import Purchaseform from "@/components/Dashboard/purchaseorder/Purchaseform copy";
import Header from "@/components/layout/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

const data = [
  {
    b: "1",
  },
];
const page = () => {
  const session = useSession()
  const router = useRouter()
  // useEffect(() => {
  //   const usedata = async () =>{
  //     const response = await axios.post("http://localhost:3000/api/details", {
  //       body: {
  //         email: session.data?.user?.email,
  //       },
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (response.data[0].password === null) {
  //       router.push("/createpassword");
  //     } else if (response.data[0].contact === null) {
  //       router.push("/contactdetail");
  //     }
  //   };
  
  // usedata()
  // }, [session])
  
  return (
    <div>
      <Header data={"true"} />
      <div className="mt-5 pt-5">
        {/* <Purchaseform /> */}
        <Mainpurchase />
      </div>
    </div>
  );
};

export default page;
