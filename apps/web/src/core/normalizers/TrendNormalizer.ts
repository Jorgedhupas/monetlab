export class TrendNormalizer {

  normalize(data: unknown): string {

    if (!data) return "Sin información";

    if (typeof data === "string") {
      return data;
    }

    const trend = data as Record<string, any>;

    return (
      trend.summary ??
      trend.resumen ??
      trend.recommendation ??
      JSON.stringify(trend, null, 2)
    );

  }

}

export const trendNormalizer = new TrendNormalizer();