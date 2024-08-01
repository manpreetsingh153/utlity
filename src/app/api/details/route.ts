
// import pool from "@/app/config/db";
import { PrismaClient } from "@prisma/client";
var mysql = require("mysql");

import { NextResponse } from "next/server";

const prisma = new PrismaClient()
export async function GET(request:any) {

  try {
    // const requestData = await request.json();
    // console.log(requestData.body.email)
    // console.log("requestData.body.email")
    const userExist = await prisma.po_detail.findMany();
     return NextResponse.json({data: userExist} , { status: 200 });
   
   } catch (error) {
        return NextResponse.json(
           {
              message: error,
           },
           { status: 500 }
        );
     }
  
}
export async function POST(request: any, response:any) {

   try {
      const requestData = await request.json();
     console.log(requestData.body)
     console.log("requestData.body.email")
      const userExist= await prisma.user.findUnique({
        where:{
          email:requestData.body.email 
        },
       
      })
      if(requestData.body.query==='updatepassword' && userExist)
        {
          // const match = (requestData.body.)
         
          console.log("updated")
        }
      return NextResponse.json({data: userExist} , { status: 200 });
    
    } catch (error) {
         return NextResponse.json(
            {
               message: error,
            },
            { status: 500 }
         );
      }
   
}
// const POST= async (request: any)=>{
//    const requestData= await request.get();
// return Response.json({"message":"Post"});
// }
// export {POST};

// import { POST } from "../auth/[...nextauth]/route";

// export async function GET() {
//    const res = await fetch('http://localhost:3000/api/details')
//    const data = await res.json()

//    return Response.json({ data })
// }
//    try {
//       const requestData=await request.json();
//       console.log(requestData.body.email);
//       const results = await new Promise((resolve, reject) => {
//          pool.query('SELECT * FROM user WHERE email = ?', [requestData.body.email], (error: any, results: any, fields: any) => {
//             if (error) {
//                 console.log({ message: 'Error querying data from MySQL' }); 
//                 response.status(500).json({ message: 'Error querying data from MySQL' }); 
//                 console.log({ message: 'Data matched in MySQL successfully' }); 
//                 response.status(200).json({ data: results }); 
//             }
//         });
//       // pool.query('SELECT * FROM user WHERE email = '+ requestData.body.email+";", (error: any, results: any, fields: any) => {

//       //    if (error) {
//       //       console.log({ message: 'Error inserting data into MySQL' });
//       //       } else {
//       //          response.status(200).json({ message: 'Data is matched into MySQL successfully' });
//       //       }
//       //    });
//       })
//       return NextResponse.json({ data: results }, { status: 200 });

//       // pool.query('SELECT * FROM user WHERE email = '+ requestData.body.email+";", (error: any, results: any, fields: any) => {
//                   // if (error) {
//                   //    response.status(500).json({ message: 'Error inserting data into MySQL' });
//                   // } else {
//                   //    response.status(200).json({ message: 'Data is matched into MySQL successfully' });
//                   // }
//                //    return NextResponse.json
//                // });
//  }
// export async function GET() {
//    try {

//       const results = await new Promise((resolve, reject) => {
//          pool.query("SELECT * FROM user ", (err: any, rows: []) => {
//             if (err) {
//                reject(err);
//             } else {
//                resolve(rows);
//             }
//          });
//       })
//       console.log(results);
//       return NextResponse.json({ data: results }, { status: 200 });
//    } catch (error) {
//       return NextResponse.json(
//          {
//             message: error,
//          },
//          { status: 500 }
//       );
//    }

// }

// export default async function handler(request:Request, response:Response) {


//    if (request.method === 'POST') {
//       const data  = request.body;

  

      

//       // Insert data into the database
//       pool.query('INSERT INTO your_table_name SET ?', data, (error: any, results: any, fields: any) => {
//          if (error) {
//             response.status(500).json({ message: 'Error inserting data into MySQL' });
//          } else {
//             response.status(200).json({ message: 'Data inserted into MySQL successfully' });
//          }
//       });

//       // Close the connection
//       connection.end();
//    } else {
//       res.status(405).json({ message: 'Method Not Allowed' });
//    }
// }


