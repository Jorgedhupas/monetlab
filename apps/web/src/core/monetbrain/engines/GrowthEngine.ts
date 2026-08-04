import type { GrowthResult } from "../models/GrowthResult";

export class GrowthEngine {

  analyze(category: string): GrowthResult {

    switch (category) {

      case "cafe":

        return {

          monthlyClients: 250,

          websiteVisitors: 9000,

          socialFollowers: 12000,

          monthlyAdsBudget: 2500000,

          monthlyGrowthRate: 12

        };

      case "ia":

        return {

          monthlyClients: 120,

          websiteVisitors: 15000,

          socialFollowers: 18000,

          monthlyAdsBudget: 5000000,

          monthlyGrowthRate: 18

        };

      case "jabon":

        return {

          monthlyClients: 180,

          websiteVisitors: 7000,

          socialFollowers: 9000,

          monthlyAdsBudget: 1800000,

          monthlyGrowthRate: 10

        };

      default:

        return {

          monthlyClients: 100,

          websiteVisitors: 4000,

          socialFollowers: 5000,

          monthlyAdsBudget: 1000000,

          monthlyGrowthRate: 8

        };

    }

  }

}