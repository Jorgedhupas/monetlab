export interface AdvisorResult {

  executiveSummary: string;

  decision: string;

  decisionScore: number;

  firstStep: string;

  biggestRisk: string;

  objective: string;

  recommendedRevenueModels: string[];

}