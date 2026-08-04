import { AnalysisResult } from "@/types/AnalysisResult";

export class ResultNormalizer {
  normalize(result: Partial<AnalysisResult>): AnalysisResult {
    return {
      score: result.score ?? 0,
      trend: result.trend ?? "Sin información",
      confidence: result.confidence ?? 0,
      market: result.market ?? "",
      competition: result.competition ?? "",
      income: result.income ?? "",
      aiRisk: result.aiRisk ?? "",
      originality: result.originality ?? 0,
      recommendation: result.recommendation ?? "",
      investmentLevel: result.investmentLevel ?? "",
      estimatedTime: result.estimatedTime ?? "",

      platforms: result.platforms ?? [],
      ideas: result.ideas ?? [],
      timeline: result.timeline ?? [],

      businessModel: {
        recommended: {
          name: result.businessModel?.recommended?.name ?? "No definido",
          score: result.businessModel?.recommended?.score ?? 0,
          recurringRevenue:
            result.businessModel?.recommended?.recurringRevenue ?? false,
          scalability:
            result.businessModel?.recommended?.scalability ?? "No definida",
          complexity:
            result.businessModel?.recommended?.complexity ?? "No definida",
          description:
            result.businessModel?.recommended?.description ?? "",
        },

        alternatives:
          result.businessModel?.alternatives?.map((item) => ({
            name: item.name ?? "Modelo",
            score: item.score ?? 0,
            recurringRevenue: item.recurringRevenue ?? false,
            scalability: item.scalability ?? "No definida",
            complexity: item.complexity ?? "No definida",
            description: item.description ?? "",
          })) ?? [],
      },

      finance: {
        initialInvestment: result.finance?.initialInvestment ?? 0,
        monthlyCosts: result.finance?.monthlyCosts ?? 0,
        breakEvenMonths: result.finance?.breakEvenMonths ?? 0,
        roi: result.finance?.roi ?? 0,
        estimatedProfit: result.finance?.estimatedProfit ?? 0,
        cashFlow: result.finance?.cashFlow ?? "",
      },

      pricing: {
        recommendedPrice: result.pricing?.recommendedPrice ?? 0,
        minimumPrice: result.pricing?.minimumPrice ?? 0,
        premiumPrice: result.pricing?.premiumPrice ?? 0,
        grossMargin: result.pricing?.grossMargin ?? 0,
        netMargin: result.pricing?.netMargin ?? 0,
        averageTicket: result.pricing?.averageTicket ?? 0,
      },

      growth: {
        monthlyClients: result.growth?.monthlyClients ?? 0,
        websiteVisitors: result.growth?.websiteVisitors ?? 0,
        socialFollowers: result.growth?.socialFollowers ?? 0,
        monthlyAdsBudget: result.growth?.monthlyAdsBudget ?? 0,
        monthlyGrowthRate: result.growth?.monthlyGrowthRate ?? 0,
      },
    };
  }
}

export const resultNormalizer = new ResultNormalizer();