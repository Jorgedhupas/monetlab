import { OpenAIProvider } from "@/services/ai/OpenAIProvider";
import { StrategyPrompt } from "@/core/prompts/StrategyPrompt";

export class StrategyAgent {

  private ai = new OpenAIProvider();

  async execute(data: any) {

    console.log("🧠 StrategyAgent ejecutándose...");

    const prompt = `
${StrategyPrompt}

Analiza los siguientes informes realizados por especialistas.

MARKET
${JSON.stringify(data.market, null, 2)}

FINANCE
${JSON.stringify(data.finance, null, 2)}

RISK
${JSON.stringify(data.risk, null, 2)}

TREND
${JSON.stringify(data.trend, null, 2)}
`;

    const result = await this.ai.analyze(prompt);

console.log("========= STRATEGY RESULT =========");
console.log(JSON.stringify(result,null,2));
console.log("===================================");

return result;

  }

}

export const strategyAgent = new StrategyAgent();