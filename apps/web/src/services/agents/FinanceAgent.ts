import { OpenAIProvider } from "@/services/ai/OpenAIProvider";
import { FinancePrompt } from "@/core/prompts/FinancePrompt";

import type {
  FinanceResult,
} from "@/core/monetbrain/models/FinanceResult";

export class FinanceAgent {

  private ai = new OpenAIProvider();

  async execute(
    prompt: string
  ): Promise<FinanceResult> {

    console.log("💰 FinanceAgent ejecutándose...");

    return await this.ai.analyze(`
${FinancePrompt}

Idea de negocio:

${prompt}
`) as FinanceResult;

  }

}