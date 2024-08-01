"use client";
import React from "react";
import Dashcard from "../../components/Dashboard/Dashcard";
import Dash from "../../components/Dashboard/Dash";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { resolve } from "path";
const data = [];

const Dashpage = () => {
  const router = useRouter();
  const session = useSession();
  console.log(session)
  const usedata = async () => {

    const response = await axios.post("https://utlity-manpreets-projects-05f6dc9b.vercel.app/api/details", {
      body: {
        email: session.data.user.email,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response)
    // if (response.data[0]?.password === null) {
    //   router.push("/createpassword");
    // } else if (response.data[0]?.contact === null) {
    //   router.push("/contactdetail");
    // }
  };
  try {
    if (session.status === "authenticated") {
      return (
        <>
        {console.log("session",session)}
          {usedata()}
          <Dash />
        </>
      );
    } else if (session.status === "loading") {
      return <>Loading.....</>;
    } else {
      router.push("/login");
    }
  } catch(err) {
    resolve(err);
    // err;
  }
  
};

export default Dashpage;
