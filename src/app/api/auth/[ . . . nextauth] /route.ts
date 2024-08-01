import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,

    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
  ],
  pages: { signIn: "/login" },

});
export { handler as GET, handler as POST };

// const getData = async (email: any, password: any) => {

//   const userExist = await prisma.user.findUnique({
//     where: {
//       email: email,
//     },
//     select: {
//       email: true,
//       id: true,
//       name: true,
//       password: true,
//     },
//   });

//   if (userExist)
//     return { id: userExist.id.toString(), email: userExist.email, name: userExist.name };

//   console.log("not success");
//   return null

// }
// const data = await axios.post("http://localhost:3000/api/details", {
//   body: {
//     email: email,
//     password: password,
//   },
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// if (email === data.data[0].email) {
//   console.log("email matched...");
//   if (password === data.data[0].password) {
//     console.log("password matched...");
//     console.log(data.data[0]);
//     return data.data[0];
//   } else {
//     console.log("wrong pass");
//     return null;
//     // throw new Error("Wrong  Password");
//   }
// } else {
// console.log("not success");
// return null;
// throw new Error("Wrong Email or Password");
// }
// };
