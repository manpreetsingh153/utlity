
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // email: { label: "Email", type: "text" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        try {
          const { email, password } = credentials

          const user = await prisma.user.findUnique({
            where: {
              email: email,
            }
          })
          if (!user || !user.password) {
            throw new Error("not found")
          }
          console.log(user)
          if (user.password === password) {
            console.log(user.id.toString(), user.email, user.name, user.contact)
            return { id: user.id.toString(), email: user.email, name: user.name, contact: user.contact };
          }
          else
            throw new Error("password not match")
        }
        catch (error) {
          console.log("error", error)
          return null;
        }
      },
    }),
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
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        if (account?.provider === "google") {

          const userExist = await prisma.user.findUnique({
            where: { email: profile?.email },
          });
          console.log("signin", { user, account, profile, email, credentials })
          if (!userExist) {
            await prisma.user.create({
              data: {
                email: profile?.email as string,
                name: profile?.name as string,
              },
            });
          }
        }
        return true;
      } catch (error) {
        console.error("Error during sign-in callback:", error);
        return false;
      }
    },
    async jwt({ token, user, session }) {
      console.log("jwt", { token, user, session })

      return token
    }, async session({ session, token, user }) {
      console.log("session", { token, user, session })
      return session
    }
  },

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
