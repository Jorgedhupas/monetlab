import { OpenAIProvider } from "../ai/OpenAIProvider";

export class FinanceAgent {

    private ai = new OpenAIProvider();

    async execute(prompt:string){

        console.log("💰 FinanceAgent");

        return await this.ai.analyze(`
Eres un inversionista de Venture Capital.

Analiza únicamente:

- inversión inicial
- costos
- ROI
- flujo de caja
- punto de equilibrio
- márgenes

Responde únicamente JSON.

Idea:

${prompt}
`);

    }

}