"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import Contactdet from "@/components/auth/login/Contactdet";

const Contactpage = () => {
  const router = useRouter();

  const session = useSession();
 
  if (session.status==='authenticated') {
    return (
      <>
        <Contactdet />
      </>
    );
  }
  else if(session.status==='loading')
    {
      <p>Loading ....</p>
    }
   else {
    router.push("/login");
  }
};

export default Contactpage;
