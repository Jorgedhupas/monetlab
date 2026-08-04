import type { FinanceResult } from "../models/FinanceResult";

export class FinanceEngine {

  analyze(category: string): FinanceResult {

    switch (category) {

      case "cafe":

        return {

          initialInvestment: 45000000,

          monthlyCosts: 12000000,

          breakEvenMonths: 11,

          roi: 168,

          estimatedProfit: 72000000,

          cashFlow: "Positivo"

        };

      case "ia":

        return {

          initialInvestment: 18000000,

          monthlyCosts: 6000000,

          breakEvenMonths: 6,

          roi: 310,

          estimatedProfit: 185000000,

          cashFlow: "Muy Positivo"

        };

      case "jabon":

        return {

          initialInvestment: 22000000,

          monthlyCosts: 7000000,

          breakEvenMonths: 8,

          roi: 210,

          estimatedProfit: 98000000,

          cashFlow: "Positivo"

        };

      default:

        return {

          initialInvestment: 15000000,

          monthlyCosts: 5000000,

          breakEvenMonths: 12,

          roi: 140,

          estimatedProfit: 50000000,

          cashFlow: "Positivo"

        };

    }

  }

}