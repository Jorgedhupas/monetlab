export type OpportunityResult = {
  recommendation: string;
  investmentLevel: string;
  estimatedTime: string;
};

export class OpportunityEngine {

  analyze(score: number) : OpportunityResult {

    if (score >= 95) {
      return {
        recommendation: "Invertir inmediatamente",
        investmentLevel: "Alta",
        estimatedTime: "1 a 3 meses",
      };
    }

    if (score >= 85) {
      return {
        recommendation: "Muy recomendable",
        investmentLevel: "Media",
        estimatedTime: "3 a 6 meses",
      };
    }

    return {
      recommendation: "Validar antes de invertir",
      investmentLevel: "Baja",
      estimatedTime: "6 a 12 meses",
    };

  }

}