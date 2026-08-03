import { KnowledgeEngine } from "./KnowledgeEngine";

export type RiskResult = {
  aiRisk: string;
  originality: number;
};

export class RiskEngine {

  private knowledgeEngine: KnowledgeEngine;

  constructor() {
    this.knowledgeEngine = new KnowledgeEngine();
  }

  analyze(text: string, category: string): RiskResult {

    const idea = text.toLowerCase();

    const knowledge = this.knowledgeEngine.get(category);

    let originality = 95;

    if (
      idea.includes("copiar") ||
      idea.includes("igual") ||
      idea.includes("clonar")
    ) {
      originality = 20;
    }
    else if (
      idea.includes("inspirado") ||
      idea.includes("adaptar") ||
      idea.includes("mejorar")
    ) {
      originality = 70;
    }

    return {

      aiRisk: knowledge.aiRisk,

      originality

    };

  }

}