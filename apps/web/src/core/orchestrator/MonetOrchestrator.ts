import { MarketAgent } from "@/services/agents/MarketAgent";
import { ResultValidator } from "@/core/validators/ResultValidator";
import { resultNormalizer } from "@/core/normalizers/ResultNormalizer";

export class MonetOrchestrator {

  private marketAgent = new MarketAgent();

  async analyze(prompt: string) {

    console.log("🚀 MonetOrchestrator ejecutándose...");

    const result = await this.marketAgent.execute(prompt);

    const validator = new ResultValidator();

    const validated = validator.validate(result);

    const normalized = resultNormalizer.normalize(validated);

    return normalized;

  }

}

export const orchestrator = new MonetOrchestrator();