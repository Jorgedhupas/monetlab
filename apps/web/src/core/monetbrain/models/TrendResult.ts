export interface TrendResult {

  trend: string;

  growth: {

    monthlyClients: number;

    websiteVisitors: number;

    socialFollowers: number;

    monthlyAdsBudget: number;

    monthlyGrowthRate: number;

  };

}