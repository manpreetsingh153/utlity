
import { PrismaClient } from "@prisma/client";
var mysql = require("mysql");
 
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient()
export async function GET() {

  try {
      const user = await prisma.user.findMany({})
  
     return NextResponse.json({data: user} , { status: 200 });
   
   } catch (error) {
        return NextResponse.json(
           {
              message: error,
           },
           { status: 500 }
        );
     }
  
}
