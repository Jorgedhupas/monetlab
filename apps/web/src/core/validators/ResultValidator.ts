import { Resultado } from "@/types/Resultado";

export class ResultValidator {

  validate(data: any): Resultado {

    return {

      score: data.score ?? 0,

      trend: data.trend ?? "Sin información",

      confidence: data.confidence ?? 0,

      market: data.market ?? "Sin información",

      competition: data.competition ?? "Sin información",

      income: data.income ?? "Sin información",

      aiRisk: data.aiRisk ?? "Sin información",

      originality: data.originality ?? 0,

      recommendation: data.recommendation ?? "Sin información",

      investmentLevel: data.investmentLevel ?? "No definido",

      estimatedTime: data.estimatedTime ?? "No definido",

      platforms: data.platforms ?? [],

      ideas: data.ideas ?? [],

      timeline: data.timeline ?? [],

      businessModel: {

        recommended:

          data.businessModel?.recommended ?? {

            name: "No disponible",

            score: 0,

            recurringRevenue: false,

            scalability: "No definida",

            complexity: "No definida",

            description: "Sin información"

          },

        alternatives:

          data.businessModel?.alternatives ?? []

      },

      finance: {

        initialInvestment:

          data.finance?.initialInvestment ?? 0,

        monthlyCosts:

          data.finance?.monthlyCosts ?? 0,

        breakEvenMonths:

          data.finance?.breakEvenMonths ?? 0,

        roi:

          data.finance?.roi ?? 0,

        estimatedProfit:

          data.finance?.estimatedProfit ?? 0,

        cashFlow:

          data.finance?.cashFlow ?? "Sin información"

      },

      pricing: {

        recommendedPrice:

          data.pricing?.recommendedPrice ?? 0,

        minimumPrice:

          data.pricing?.minimumPrice ?? 0,

        premiumPrice:

          data.pricing?.premiumPrice ?? 0,

        grossMargin:

          data.pricing?.grossMargin ?? 0,

        netMargin:

          data.pricing?.netMargin ?? 0,

        averageTicket:

          data.pricing?.averageTicket ?? 0

      },

      growth: {

        monthlyClients:

          data.growth?.monthlyClients ?? 0,

        websiteVisitors:

          data.growth?.websiteVisitors ?? 0,

        socialFollowers:

          data.growth?.socialFollowers ?? 0,

        monthlyAdsBudget:

          data.growth?.monthlyAdsBudget ?? 0,

        monthlyGrowthRate:

          data.growth?.monthlyGrowthRate ?? 0

      }

    };

  }

}

export const resultValidator = new ResultValidator();