// "use client";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
export const metadata = {
  title: "Dashboard",
  description: "Generated by Next.js",
};
import axios from "axios";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();
  // const session = useSession();
  // console.log(session);
  // if (session.data) {
  try{
  return <>{children}</>;
  }catch(err){
    resolve(err)
  } // } else {
  //   router.push("/login");
  // }
}
function resolve(err: unknown) {
  throw new Error("Function not implemented.");
}

