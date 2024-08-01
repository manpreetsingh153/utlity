
import { PrismaClient } from "@prisma/client";
var mysql = require("mysql");
 
import { NextRequest, NextResponse } from "next/server";

export async function GET() {

  try {


     return NextResponse.json({data: 'userExist'} , { status: 200 });
   
   } catch (error) {
        return NextResponse.json(
           {
              message: error,
           },
           { status: 500 }
        );
     }
  
}
