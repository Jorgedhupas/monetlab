import { OpenAIProvider } from "@/services/ai/OpenAIProvider";
import { StrategyPrompt } from "@/core/prompts/StrategyPrompt";

import type { StrategyResult } from "@/core/monetbrain/models/StrategyResult";

export class StrategyAgent {

  private ai = new OpenAIProvider();

  async execute(
  data: {
    market: unknown;
    finance: unknown;
    risk: unknown;
    trend: unknown;
    discussion: unknown;
  }
): Promise<StrategyResult> {

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

DISCUSSION
${JSON.stringify(data.discussion, null, 2)}
`;

    const result = await this.ai.analyze(prompt);

    console.log("========= STRATEGY RESULT =========");
    console.log(JSON.stringify(result, null, 2));
    console.log("===================================");

    return result as StrategyResult;

  }

}

export const strategyAgent = new StrategyAgent();