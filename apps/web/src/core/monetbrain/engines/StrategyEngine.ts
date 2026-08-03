import { KnowledgeEngine } from "./KnowledgeEngine";

export type StrategyResult = {

  platforms: string[];

  ideas: string[];

};

export class StrategyEngine {

  private knowledgeEngine: KnowledgeEngine;

  constructor() {

    this.knowledgeEngine = new KnowledgeEngine();

  }

  analyze(category: string): StrategyResult {

    const knowledge = this.knowledgeEngine.get(category);

    const ideas = [

      ...knowledge.businessModels,

      ...knowledge.revenueModels

    ];

    return {

      platforms: [...new Set(knowledge.platforms)],

      ideas: [...new Set(ideas)]

    };

  }

}