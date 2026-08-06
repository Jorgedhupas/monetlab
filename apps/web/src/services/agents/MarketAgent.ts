import { openAIProvider } from "@/services/ai/OpenAIProvider";
import { MarketPrompt } from "@/core/prompts/MarketPrompt";

import type {
  MarketResult,
} from "@/core/monetbrain/models/MarketResult";

export class MarketAgent {

  private ai = openAIProvider;

  async execute(
  prompt: string
): Promise<MarketResult> {

  console.log("📊 MarketAgent ejecutándose...");

  return await this.ai.analyze(`
${MarketPrompt}

Idea de negocio:

${prompt}
`) as MarketResult;

}

}