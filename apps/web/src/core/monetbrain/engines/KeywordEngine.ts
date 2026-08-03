import { knowledge } from "../knowledge";

export interface KeywordResult {
  category: string;
  matches: string[];
}

export class KeywordEngine {

  analyze(text: string): KeywordResult {

    const input = text.toLowerCase();

    let bestCategory = "general";

    let bestMatches: string[] = [];

    for (const module of knowledge) {

      const matches = module.keywords.filter(keyword =>
        input.includes(keyword.toLowerCase())
      );

      if (matches.length > bestMatches.length) {

        bestMatches = matches;

        bestCategory = module.category;

      }

    }

    return {

      category: bestCategory,

      matches: bestMatches

    };

  }

}