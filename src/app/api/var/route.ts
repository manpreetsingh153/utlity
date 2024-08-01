import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
// import db from '@/app/config/db'
// export async function GET() {
//   try {

//     const results = await new Promise((resolve, reject) => {
//       db.query("SELECT * FROM user ", (err: any, rows: []) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(rows);
//         }
//       });
//     })
//     console.log(results);
//     return NextResponse.json({ data: results }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         message: error,
//       },
//       { status: 500 }
//     );
//   }

// }
const prisma = new PrismaClient()
export async function GET(email: any) {
  try {
    // const results = await prisma.user.findUnique({
    //   where: {
    //     email: "admin@gmail.com"
    //   }
    // })
    const results = await prisma.user.findMany()

    // console.log(results);
    return NextResponse.json({ data: results }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      { status: 500 }
    );
  }

}
export async function POST(request: any, response: any) {

  try {
    const requestData = await request.json();
    console.log(requestData.body.email)
    console.log("requestData.body for ")
    const userExist = await prisma.user.findUnique({
      where: {
        email: requestData.body.email
      }
    })
    if(userExist)
    {
      NextResponse.json(userExist,{status:200})
    }
    console.log("userw", { userExist })
    // console.log("requestData po")
    // console.log(requestData.body.text)
    // const { id, email, invoicecat } = requestData.body.text
    // console.log({ id, email, invoicecat })
    const table1 = requestData.body.table1
    const table2 = requestData.body.table2
    // console.log(table1, table2)
    const tableTop = prisma[table1] as any;
    const results = await tableTop.create({

      data: {
        ...requestData.body.text,
        [table2]:
        {
          create: requestData.body.inputs
        },
        user: {
          connect: { id: userExist?.id },
        },
      }

    })
    return NextResponse.json(results, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      { status: 500 }
    );
  }

}









// // import pool from "@/app/config/db";

// // import { NextResponse } from "next/server";
// // export async function GET() {
// //   try {
// //     const results = await new Promise((resolve, reject) => {
// //       pool.query("SELECT * FROM user ", (err: any, rows: []) => {
// //         if (err) {
// //           reject(err);
// //         } else {
// //           resolve(rows);
// //         }
// //       });
// //     });

// //     return NextResponse.json({ data: results }, { status: 200 });
// //   } catch (error) {
// //     return NextResponse.json(
// //       {
// //         message: error,
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }
// // export async function POST(request: any, response: any) {
// //   try {
// //     // let value = [requestData.body.logourl, requestData.body.po, requestData.body.orderdate, requestData.body.paymentterm, requestData.body.deleverydate, requestData.body.generatedOn, requestData.body.bcompanyname, requestData.body.baddress, requestData.body.bcity, requestData.body.bstate, requestData.body.bcountary, requestData.body.bpin, requestData.body.bcontact, requestData.body.scompanyname, requestData.body.saddress, requestData.body.scity, requestData.body.sstate, requestData.body.scountary, requestData.body.spin, requestData.body.scontact, requestData.body.catagory]

// //     const requestData = await request.json();

// //     // requestData.anotherbody.inputs.map((item: any) => console.log(item))
// //     let sql1 = `INSERT INTO ${requestData.tablename.table1} SET ?`.toString()
// //     let sql2 = `INSERT INTO ${requestData.tablename.table2} SET ?`.toString()
// //     const results = await new Promise((resolve, reject) => {
// //       pool.query(sql1, [requestData.body.text], (error: any, results: unknown, fields: any) => {
// //         if (error) {
// //           reject({ message: error });

// //         } else {
// //           console.log({ message: 'Data matched in MySQL successfully' });
// //           resolve(results);
// //         }
// //       });
// //     })
// //     const results2 = await new Promise((resolve, reject) => {
// //       requestData.anotherbody.inputs.map((item: any) => {
// //         // console.log("item")
// //         // console.log(item)
// //         pool.query(sql2, item, (error: any, results: unknown, fields: any) => {
// //           if (error) {
// //             reject(error);
// //           } else {
// //             resolve(results);
// //           }
// //         });
// //       })
// //       // pool.query('INSERT INTO po_itemdetail SET ?', [requestData.anotherbody.inputs.map((item: any) => item)], (error: any, results: unknown, fields: any) => {
// //       //   if (error) {
// //       //     reject(error);
// //       //   } else {
// //       //     resolve(results);
// //       //   }
// //       // });
// //     });
// //     return NextResponse.json({ data: results, data2: results2 }, { status: 200 });
// //   }
// //   catch (error) {
// //     return NextResponse.json(
// //       {
// //         message: error,
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }
// // // const POST= async (request: any)=>{
// // //    const requestData= await request.get();
// // // return Response.json({"message":"Post"});
// // // }
// // // export {POST};

// // // import { POST } from "../auth/[...nextauth]/route";

// // // export async function GET() {
// // //    const res = await fetch('http://localhost:3000/api/details')
// // //    const data = await res.json()

// // //    return Response.json({ data })
// // // }
// // //    try {
// // //       const requestData=await request.json();
// // //       console.log(requestData.body.email);
// // //       const results = await new Promise((resolve, reject) => {
// // //          pool.query('SELECT * FROM user WHERE email = ?', [requestData.body.email], (error: any, results: any, fields: any) => {
// // //             if (error) {
// // //                 console.log({ message: 'Error querying data from MySQL' });
// // //                 response.status(500).json({ message: 'Error querying data from MySQL' });
// // //                 console.log({ message: 'Data matched in MySQL successfully' });
// // //                 response.status(200).json({ data: results });
// // //             }
// // //         });
// // //       // pool.query('SELECT * FROM user WHERE email = '+ requestData.body.email+";", (error: any, results: any, fields: any) => {

// // //       //    if (error) {
// // //       //       console.log({ message: 'Error inserting data into MySQL' });
// // //       //       } else {
// // //       //          response.status(200).json({ message: 'Data is matched into MySQL successfully' });
// // //       //       }
// // //       //    });
// // //       })
// // //       return NextResponse.json({ data: results }, { status: 200 });

// // //       // pool.query('SELECT * FROM user WHERE email = '+ requestData.body.email+";", (error: any, results: any, fields: any) => {
// // //                   // if (error) {
// // //                   //    response.status(500).json({ message: 'Error inserting data into MySQL' });
// // //                   // } else {
// // //                   //    response.status(200).json({ message: 'Data is matched into MySQL successfully' });
// // //                   // }
// // //                //    return NextResponse.json
// // //                // });
// // //  }
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

// // // export default async function handler(request:Request, response:Response) {

// // //    if (request.method === 'POST') {
// // //       const data  = request.body;

// // //       // Insert data into the database
// // //       pool.query('INSERT INTO your_table_name SET ?', data, (error: any, results: any, fields: any) => {
// // //          if (error) {
// // //             response.status(500).json({ message: 'Error inserting data into MySQL' });
// // //          } else {
// // //             response.status(200).json({ message: 'Data inserted into MySQL successfully' });
// // //          }
// // //       });

// // //       // Close the connection
// // //       connection.end();
// // //    } else {
// // //       res.status(405).json({ message: 'Method Not Allowed' });
// // //    }
// // // }
