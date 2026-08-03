export interface BusinessModel {

  name: string;

  score: number;

  recurringRevenue: boolean;

  scalability: string;

  complexity: string;

  description: string;

}

export interface BusinessModelResult {

  recommended: BusinessModel;

  alternatives: BusinessModel[];

}