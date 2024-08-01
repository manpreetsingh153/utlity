
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient;

export  async function GET(req: any){
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json({ res: users });
    }
    catch (err) {
        return NextResponse.json({ res: err })
    }
}
export async function POST(request: any, response: any) {
    try {
        const requestData = await request.json();
        console.log("requestData")
        console.log(requestData)
        const { email, password, name } = requestData.body;
        console.log("email")
        console.log(email)
        const newUser = await prisma.user.
        create(
            {
                data: {
                    email,
                    password,
                    name
                }
            }
        )
        return NextResponse.json({ data: newUser }, { status: 200 });
    }
    catch (error) {
        return NextResponse.json(
            {
                message: error,
            },
            { status: 500 }
        );
    }
}

