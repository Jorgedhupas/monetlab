import { KeywordEngine } from "./engines/KeywordEngine";
import { TrendEngine } from "./engines/TrendEngine";
import { MarketEngine } from "./engines/MarketEngine";
import { RiskEngine } from "./engines/RiskEngine";
import { StrategyEngine } from "./engines/StrategyEngine";
import { OpportunityEngine } from "./engines/OpportunityEngine";
import { TimelineEngine } from "./engines/TimelineEngine";
import { ScoreEngine } from "./engines/ScoreEngine";
import { KnowledgeEngine } from "./engines/KnowledgeEngine";
import { ReasoningEngine } from "./engines/ReasoningEngine";
import { AdvisorEngine } from "./engines/AdvisorEngine";
import { AudienceEngine } from "./engines/AudienceEngine";
import { BusinessModelEngine } from "./engines/BusinessModelEngine";
import { RevenueEngine } from "./engines/RevenueEngine";
import { FinanceEngine } from "./engines/FinanceEngine";
import { PricingEngine } from "./engines/PricingEngine";
import { GrowthEngine } from "./engines/GrowthEngine";

import type { AnalysisResult } from "./models/AnalysisResult";

export class MonetBrain {

  private keywordEngine: KeywordEngine;
  private knowledgeEngine: KnowledgeEngine;
  private trendEngine: TrendEngine;
  private marketEngine: MarketEngine;
  private riskEngine: RiskEngine;
  private strategyEngine: StrategyEngine;
  private opportunityEngine: OpportunityEngine;
  private timelineEngine: TimelineEngine;
  private scoreEngine: ScoreEngine;
  private reasoningEngine: ReasoningEngine;
  private advisorEngine: AdvisorEngine;
  private audienceEngine: AudienceEngine;
  private businessModelEngine: BusinessModelEngine;
  private revenueEngine: RevenueEngine;
  private financeEngine: FinanceEngine;
  private pricingEngine: PricingEngine;
  private growthEngine: GrowthEngine;

  constructor() {

    this.keywordEngine = new KeywordEngine();
    this.knowledgeEngine = new KnowledgeEngine();
    this.trendEngine = new TrendEngine();
    this.marketEngine = new MarketEngine();
    this.riskEngine = new RiskEngine();
    this.strategyEngine = new StrategyEngine();
    this.opportunityEngine = new OpportunityEngine();
    this.timelineEngine = new TimelineEngine();
    this.scoreEngine = new ScoreEngine();
    this.reasoningEngine = new ReasoningEngine();
    this.advisorEngine = new AdvisorEngine();
    this.audienceEngine = new AudienceEngine();
    this.businessModelEngine = new BusinessModelEngine();
    this.revenueEngine = new RevenueEngine();
    this.financeEngine = new FinanceEngine();
    this.pricingEngine = new PricingEngine();
    this.growthEngine = new GrowthEngine();

  }

  analyze(text: string): AnalysisResult {

    const keywords = this.keywordEngine.analyze(text);

    this.knowledgeEngine.get(keywords.category);

    const audience = this.audienceEngine.analyze(
  keywords.category
);

const businessModel =
  this.businessModelEngine.analyze(
    keywords.category
  );

  const revenue =
  this.revenueEngine.analyze(
    keywords.category
  );

  const finance =
  this.financeEngine.analyze(
    keywords.category
  );

  const pricing =
  this.pricingEngine.analyze(
    keywords.category
  );

  const growth =
  this.growthEngine.analyze(
    keywords.category
  );

console.log("CATEGORY:", keywords.category);

console.log("AUDIENCE:", audience);

    const trend = this.trendEngine.analyze(keywords.category);

    const market = this.marketEngine.analyze(trend.score);

    const risk = this.riskEngine.analyze(text, keywords.category);

    const strategy = this.strategyEngine.analyze(keywords.category);

    const opportunity = this.opportunityEngine.analyze(trend.score);

    const timeline = this.timelineEngine.analyze(text);

    const finalScore = this.scoreEngine.calculate({

      trendScore: trend.score,

      originality: risk.originality,

      confidence: trend.confidence

    });

    const partialResult = {

      score: finalScore,

      trend: trend.trend,

      confidence: trend.confidence,

      market: market.market,

      competition: market.competition,

      income: market.income,

      aiRisk: risk.aiRisk,

      originality: risk.originality,

      recommendation: opportunity.recommendation,

      investmentLevel: opportunity.investmentLevel,

      estimatedTime: opportunity.estimatedTime,

      platforms: strategy.platforms,

      ideas: strategy.ideas,

      timeline

    };

    const reasoning = this.reasoningEngine.analyze(
      partialResult as AnalysisResult
    );

    const advisor = this.advisorEngine.analyze({

      ...partialResult,

      reasoning

    } as AnalysisResult);

    return {

  ...partialResult,

  reasoning,

  advisor,

  audience,

  businessModel,

  revenue,

  finance,

  pricing,

  growth

};

  }

}