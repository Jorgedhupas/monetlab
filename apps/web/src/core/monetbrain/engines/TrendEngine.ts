export type TrendResult = {
  score: number;
  trend: string;
  confidence: number;
};

export class TrendEngine {

  analyze(category: string): TrendResult {

    switch (category) {

      case "ai":

        return {
          score: 99,
          trend: "Explosiva",
          confidence: 98,
        };

      case "cafe":

        return {
          score: 94,
          trend: "Alta",
          confidence: 92,
        };

      case "soap":

        return {
          score: 90,
          trend: "Alta",
          confidence: 88,
        };

      default:

        return {
          score: 75,
          trend: "Media",
          confidence: 70,
        };

    }

  }

}