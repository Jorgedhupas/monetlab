export interface RevenueScenario {

  name: string;

  monthlyRevenue: number;

  yearlyRevenue: number;

  estimatedClients: number;

}

export interface RevenueResult {

  conservative: RevenueScenario;

  expected: RevenueScenario;

  optimistic: RevenueScenario;

}