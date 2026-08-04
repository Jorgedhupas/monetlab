export class BusinessReportBuilder {

  build(gptText: string, data: any) {

    return {

      score: data.score,

      trend: data.trend,

      confidence: data.confidence,

      market: data.market,

      competition: data.competition,

      income: data.income,

      aiRisk: data.aiRisk,

      originality: data.originality,

      recommendation: data.recommendation,

      investmentLevel: data.investmentLevel,

      estimatedTime: data.estimatedTime,

      platforms: data.platforms,

      ideas: data.ideas,

      timeline: data.timeline,

      businessModel: data.businessModel,

      finance: data.finance,

      pricing: data.pricing,

      growth: data.growth,

      advisor: {

        report: gptText

      }

    };

  }

}