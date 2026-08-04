import type { PricingResult } from "../models/PricingResult";

export class PricingEngine {

  analyze(category: string): PricingResult {

    switch (category) {

      case "cafe":

        return {

          recommendedPrice: 38000,

          minimumPrice: 25000,

          premiumPrice: 55000,

          grossMargin: 62,

          netMargin: 31,

          averageTicket: 76000

        };

      case "ia":

        return {

          recommendedPrice: 89000,

          minimumPrice: 49000,

          premiumPrice: 199000,

          grossMargin: 91,

          netMargin: 58,

          averageTicket: 178000

        };

      case "jabon":

        return {

          recommendedPrice: 18000,

          minimumPrice: 12000,

          premiumPrice: 30000,

          grossMargin: 68,

          netMargin: 34,

          averageTicket: 54000

        };

      default:

        return {

          recommendedPrice: 30000,

          minimumPrice: 18000,

          premiumPrice: 45000,

          grossMargin: 50,

          netMargin: 25,

          averageTicket: 60000

        };

    }

  }

}