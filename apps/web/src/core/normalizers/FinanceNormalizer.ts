import type { FinanceResult } from "@/core/monetbrain/models/FinanceResult";

export class FinanceNormalizer {

  normalize(data: unknown): FinanceResult {

    const finance = (data ?? {}) as Record<string, any>;

    return {

      initialInvestment:
        Number(finance.initialInvestment ?? 0),

      monthlyCosts:
        Number(finance.monthlyCosts ?? 0),

      breakEvenMonths:
        Number(finance.breakEvenMonths ?? 0),

      roi:
        Number(finance.roi ?? 0),

      estimatedProfit:
        Number(finance.estimatedProfit ?? 0),

      cashFlow:
        finance.cashFlow ?? ""

    };

  }

}

export const financeNormalizer = new FinanceNormalizer();