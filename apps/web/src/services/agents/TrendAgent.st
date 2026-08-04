import { OpenAIProvider } from "../ai/OpenAIProvider";

export class TrendAgent{

    private ai=new OpenAIProvider();

    async execute(prompt:string){

        console.log("📈 TrendAgent");

        return await this.ai.analyze(`
Analiza únicamente:

-tendencias

-crecimiento

-demanda

-futuro del mercado

Devuelve JSON.

${prompt}
`);

    }

}