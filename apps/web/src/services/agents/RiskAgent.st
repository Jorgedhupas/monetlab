import { OpenAIProvider } from "../ai/OpenAIProvider";

export class RiskAgent{

    private ai=new OpenAIProvider();

    async execute(prompt:string){

        console.log("⚠️ RiskAgent");

        return await this.ai.analyze(`
Analiza únicamente:

-riesgos

-legales

-operativos

-financieros

-tecnológicos

Devuelve únicamente JSON.

${prompt}
`);

    }

}