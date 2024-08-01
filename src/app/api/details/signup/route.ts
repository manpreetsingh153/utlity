// import pool from "@/app/config/db";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { use } from "react";
const prisma = new PrismaClient();
// export async function GET(req: any) {
//     const users = await prisma.user.findMany();
//     return NextResponse.json({ res: users });
// }
export async function POST(request: any, response: any) {

    try {
        const requestData = await request.json();
        console.log("requestData")
        console.log(requestData)
        const { email, password, name, contact } = requestData.body;
        console.log("email")
        console.log(email)
        const userExist = await prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                email: true,
                name: true,
            },
        });
        console.log(userExist)
        if (!userExist) {
            const newUser = await prisma.user.create(
                {
                    data: {
                        email,
                        password,
                        name, contact
                    }
                }
            )
            return NextResponse.json({ data: newUser }, { status: 200 });
        }
        else if(userExist)
        {
            return NextResponse.json({ data: "user exist" }, { status: 200 });

        }
        // const exist = <any>await new Promise((resolve, reject) => {
        //     pool.query('SELECT email FROM user WHERE email = ?', [requestData.body.email], (error: any, results: unknown, fields: any) => {
        //         if (error) {

        //             reject({ message: 'Error querying data from MySQL' });
        //         } else {

        //             console.log({ message: 'Email exist' });
        //             resolve(results);
        //         }
        //     });
        // })
        // if (requestData.body.update === 'updatepassword') {
        //     const results = await new Promise((resolve, reject) => {
        //         pool.query('UPDATE user SET   password= (?)  WHERE email= (?)', [requestData.body.password, requestData.body.email], (error: any, results: unknown, fields: any) => {
        //             if (error) {
        //                 reject({ message: error });
        //             } else {
        //                 console.log({ message: 'Data matched in MySQL successfully' });
        //                 resolve(results);
        //             }
        //         });
        //     })
        //     return NextResponse.json({ data: true }, { status: 200 });
        // }
        // if (requestData.body.update === 'updatecontact') {
        //     const results = await new Promise((resolve, reject) => {
        //         pool.query('UPDATE user SET   contact= (?)  WHERE email= (?)', [requestData.body.contact, requestData.body.email], (error: any, results: unknown, fields: any) => {
        //             if (error) {
        //                 reject({ message: error });
        //             } else {
        //                 console.log({ message: 'Data matched in MySQL successfully' });
        //                 resolve(results);
        //             }
        //         });
        //     })
        //     return NextResponse.json({ data: true }, { status: 200 });
        // }

        // if (exist[0].email === requestData.body.email) {

        //     return NextResponse.json({ data: "user exist" }, { status: 200 });

        // }
        // else {

        //     const results = await new Promise((resolve, reject) => {
        //         pool.query('INSERT INTO user SET ?', [requestData.body], (error: any, results: unknown, fields: any) => {
        //             if (error) {
        //                 reject({ message: error });
        //             } else {
        //                 console.log({ message: 'Data matched in MySQL successfully' });
        //                 resolve(results);
        //             }
        //         });
        //     })
        //     return NextResponse.json({ data: results }, { status: 200 });
        // }
    } catch (error) {
        return NextResponse.json(
            {
                message: error,
            },
            { status: 500 }
        );
    }

}



