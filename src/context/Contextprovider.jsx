"use client";
import { SessionProvider } from "next-auth/react";
import React, { createContext, useContext, useState } from "react";
const UserContext = createContext(undefined);
export function Contextprovider({ children }) {
  const [first, setFirst] = useState("name");
  return <UserContext.Provider value={"name"}>{children}</UserContext.Provider>;
}

// export default Contextprovider;
// export { UserContext };

export default function useUsercontext() {
  return <> useContext(UserContext) </>;
}
