"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

const LoginwithGoogle = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default LoginwithGoogle;
