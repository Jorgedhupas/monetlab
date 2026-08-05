import type { AnalysisResult } from "@/core/monetbrain/models/AnalysisResult";


export class ResultNormalizer {


  normalize(result: Partial<AnalysisResult>): AnalysisResult {


    return {


      score: result.score ?? 0,

      trend: result.trend ?? "Sin información",

      confidence: result.confidence ?? 0,


      market: result.market ?? "Sin información",

      competition: result.competition ?? "Sin información",

      income: result.income ?? "Sin información",

      aiRisk: result.aiRisk ?? "Sin información",


      originality: result.originality ?? 0,


      recommendation:
        result.recommendation ?? "Sin recomendación",


      investmentLevel:
        result.investmentLevel ?? "No definido",


      estimatedTime:
        result.estimatedTime ?? "No definido",



      platforms:
        result.platforms ?? [],


      ideas:
        result.ideas ?? [],


      timeline:
        result.timeline ?? [],



      reasoning:
        result.reasoning ?? {

          summary: "",

          strengths: [],

          weaknesses: [],

          nextSteps: []

        },



      advisor:
        result.advisor ?? {

          executiveSummary: "",

          decision: "",

          decisionScore: 0,

          firstStep: "",

          biggestRisk: "",

          objective: "",

          recommendedRevenueModels: []

        },



      audience:
        result.audience ?? {

          primaryAudience: "",

          ageRange: "",

          interests: [],

          painPoints: [],

          preferredPlatforms: [],

          buyingPower: ""

        },



      businessModel:
        result.businessModel ?? {

          recommended: {

            name: "No definido",

            score: 0,

            recurringRevenue: false,

            scalability: "No definida",

            complexity: "No definida",

            description: ""

          },

          alternatives: []

        },



      finance:
        result.finance ?? {

          initialInvestment: 0,

          monthlyCosts: 0,

          breakEvenMonths: 0,

          roi: 0,

          estimatedProfit: 0,

          cashFlow: ""

        },



      pricing:
        result.pricing ?? {

          recommendedPrice: 0,

          minimumPrice: 0,

          premiumPrice: 0,

          grossMargin: 0,

          netMargin: 0,

          averageTicket: 0

        },



      growth:
        result.growth ?? {

          monthlyClients: 0,

          websiteVisitors: 0,

          socialFollowers: 0,

          monthlyAdsBudget: 0,

          monthlyGrowthRate: 0

        },




      revenue:
        result.revenue ?? {


          conservative: {

            name: "",

            monthlyRevenue: 0,

            yearlyRevenue: 0,

            estimatedClients: 0

          },


          expected: {

            name: "",

            monthlyRevenue: 0,

            yearlyRevenue: 0,

            estimatedClients: 0

          },


          optimistic: {

            name: "",

            monthlyRevenue: 0,

            yearlyRevenue: 0,

            estimatedClients: 0

          }


        },




      executiveSummary:
        result.executiveSummary ?? "",



      strengths:
        result.strengths ?? [],



      weaknesses:
        result.weaknesses ?? [],



      contradictions:
        result.contradictions ?? [],



      finalDecision:
        result.finalDecision ?? "",



      priority:
        result.priority ?? "",



      strategy:
        result.strategy ?? {

          executiveSummary: "",

          strengths: [],

          weaknesses: [],

          contradictions: [],

          finalDecision: "",

          priority: ""

        }



    };


  }


}



export const resultNormalizer = new ResultNormalizer();