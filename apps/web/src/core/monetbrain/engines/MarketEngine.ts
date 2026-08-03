export type MarketResult = {

  market: string;

  competition: string;

  income: string;

};

export class MarketEngine {

  analyze(score: number): MarketResult {

    if (score > 95) {

      return {

        market: "Global",

        competition: "Alta",

        income: "$$$$$",

      };

    }

    if (score > 85) {

      return {

        market: "Latinoamérica",

        competition: "Media",

        income: "$$$$",

      };

    }

    return {

      market: "Local",

      competition: "Baja",

      income: "$$$",

    };

  }

}