export class StrategyNormalizer {

  normalize(data: unknown) {

    if (!data || typeof data !== "object") {

      return {

        executiveSummary: "",

        strengths: [],

        weaknesses: [],

        contradictions: [],

        finalDecision: "",

        priority: ""

      };

    }

    const strategy = data as Record<string, any>;

    return {

      executiveSummary:
        strategy.executiveSummary ?? "",

      strengths:
        strategy.strengths ?? [],

      weaknesses:
        strategy.weaknesses ?? [],

      contradictions:
        strategy.contradictions ?? [],

      finalDecision:
        strategy.finalDecision ??
        strategy.investmentRecommendation ??
        "",

      priority:
        strategy.priority ?? ""

    };

  }

}

export const strategyNormalizer = new StrategyNormalizer();