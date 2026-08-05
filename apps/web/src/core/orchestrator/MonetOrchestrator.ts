import { monetBrain } from "@/core/brain/MonetBrain";
import { resultValidator } from "@/core/validators/ResultValidator";
import { aiFusionEngine } from "@/core/brain/AIFusionEngine";
import { resultNormalizer } from "@/core/normalizers/ResultNormalizer";

export class MonetOrchestrator {

  async analyze(prompt: string) {

    console.log("🚀 MonetOrchestrator ejecutándose...");

    const brainResult = await monetBrain.think(prompt);


    console.log("========== BRAIN RESULT ==========");
    console.log(JSON.stringify(brainResult,null,2));
    console.log("=================================");



    const validated = {

      market: resultValidator.validate(brainResult.market),

      finance: resultValidator.validate(brainResult.finance),

      risk: resultValidator.validate(brainResult.risk),

      trend: resultValidator.validate(brainResult.trend),

      strategy: brainResult.strategy

    };


    console.log("========== VALIDATED ==========");
    console.log(JSON.stringify(validated,null,2));
    console.log("==============================");



    console.log("VALIDATED RESULT:");
console.log(JSON.stringify(validated,null,2));

const fused = aiFusionEngine.fuse(validated);

console.log("FUSED RESULT:");
console.log(JSON.stringify(fused,null,2));


    console.log("========== FUSED ==========");
    console.log(JSON.stringify(fused,null,2));
    console.log("==========================");



    const normalized = resultNormalizer.normalize(fused);


    console.log("========== NORMALIZED ==========");
    console.log(JSON.stringify(normalized,null,2));
    console.log("==============================");


    return normalized;

  }

}

export const orchestrator = new MonetOrchestrator();