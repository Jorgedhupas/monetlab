import { OpenAIProvider } from "@/services/ai/OpenAIProvider";
import { RiskPrompt } from "@/core/prompts/RiskPrompt";

import type {
  RiskResult,
} from "@/core/monetbrain/models/RiskResult";

export class RiskAgent {

  private ai = new OpenAIProvider();

  async execute(
    prompt: string
  ): Promise<RiskResult> {

    console.log("⚠️ RiskAgent ejecutándose...");

    return await this.ai.analyze(`
${RiskPrompt}

Idea de negocio:

${prompt}
`) as RiskResult;

  }

}