import type { RevenueResult } from "../models/RevenueResult";

export class RevenueEngine {

  analyze(category: string): RevenueResult {

    switch (category) {

      case "cafe":

        return {

          conservative: {

            name: "Conservador",

            monthlyRevenue: 15000000,

            yearlyRevenue: 180000000,

            estimatedClients: 250

          },

          expected: {

            name: "Esperado",

            monthlyRevenue: 43000000,

            yearlyRevenue: 516000000,

            estimatedClients: 750

          },

          optimistic: {

            name: "Optimista",

            monthlyRevenue: 100000000,

            yearlyRevenue: 1200000000,

            estimatedClients: 1800

          }

        };

      case "ia":

        return {

          conservative: {

            name: "Conservador",

            monthlyRevenue: 30000000,

            yearlyRevenue: 360000000,

            estimatedClients: 120

          },

          expected: {

            name: "Esperado",

            monthlyRevenue: 80000000,

            yearlyRevenue: 960000000,

            estimatedClients: 400

          },

          optimistic: {

            name: "Optimista",

            monthlyRevenue: 200000000,

            yearlyRevenue: 2400000000,

            estimatedClients: 1200

          }

        };

      default:

        return {

          conservative: {

            name: "Conservador",

            monthlyRevenue: 5000000,

            yearlyRevenue: 60000000,

            estimatedClients: 100

          },

          expected: {

            name: "Esperado",

            monthlyRevenue: 12000000,

            yearlyRevenue: 144000000,

            estimatedClients: 250

          },

          optimistic: {

            name: "Optimista",

            monthlyRevenue: 25000000,

            yearlyRevenue: 300000000,

            estimatedClients: 600

          }

        };

    }

  }

}