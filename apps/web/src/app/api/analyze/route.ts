import { NextResponse } from "next/server";

import { monetBrain } from "@/core/monetbrain";

export async function POST(req:Request){

    try{

        const body=await req.json();

        const resultado=monetBrain(body.idea);

        return NextResponse.json(resultado);

    }

    catch{

        return NextResponse.json(

            {

                error:"Error interno"

            },

            {

                status:500

            }

        );

    }

}