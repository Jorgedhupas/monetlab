export interface ScoreInput {
  trendScore: number;
  originality: number;
  confidence: number;
}

export class ScoreEngine {

  calculate(input: ScoreInput): number {

    const score =
      input.trendScore * 0.50 +
      input.originality * 0.30 +
      input.confidence * 0.20;

    return Math.round(score);

  }

}