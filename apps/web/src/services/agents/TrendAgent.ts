import { OpenAIProvider } from "@/services/ai/OpenAIProvider";
import { TrendPrompt } from "@/core/prompts/TrendPrompt";

import type {
  TrendResult,
} from "@/core/monetbrain/models/TrendResult";

export class TrendAgent {

  private ai = new OpenAIProvider();

  async execute(
    prompt: string
  ): Promise<TrendResult> {

    console.log("📈 TrendAgent ejecutándose...");

    return await this.ai.analyze(`
${TrendPrompt}

Idea de negocio:

${prompt}
`) as TrendResult;

  }

}