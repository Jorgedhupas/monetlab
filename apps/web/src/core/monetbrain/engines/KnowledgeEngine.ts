import { knowledge } from "../knowledge";
import type { Knowledge } from "../models/Knowledge";

export class KnowledgeEngine {

  get(category: string): Knowledge {

    const item = knowledge.find(
      k => k.category === category
    );

    if (item) {
      return item;
    }

    return {

      category: "general",

      name: "General",

      keywords: [],

      businessModels: [],

      audiences: [],

      platforms: ["YouTube"],

      revenueModels: [],

      startupCost: "Medio",

      growthPotential: 70,

      aiRisk: "Medio"

    };

  }

}