import { NextResponse } from "next/server";

import { orchestrator } from "@/core/orchestrator/MonetOrchestrator";

export async function POST(req:Request){

    try{

        const body=await req.json();

        const resultado = await orchestrator.analyze(body.idea);

        return NextResponse.json(resultado);

    }

    catch (error) {

    console.error("ERROR API:", error);

    return NextResponse.json(
        {
            error: "Error interno"
        },
        {
            status: 500
        }
    );

}

}