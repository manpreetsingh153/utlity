import { NextRequest, NextResponse } from "next/server";
export async function GET(request:NextRequest,response:NextResponse) {

  try {

   
     return NextResponse.json({data: "hello"} , { status: 200 });
   
   } catch (error) {
        return NextResponse.json(
           {
              message: error,
           },
           { status: 500 }
        );
     }
}
