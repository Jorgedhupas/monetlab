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

  }

  analyze(text: string): AnalysisResult {

    // Detectar categoría
    const keywords = this.keywordEngine.analyze(text);

    // Obtener conocimiento del sector
    this.knowledgeEngine.get(keywords.category);

    // Analizar tendencia
    const trend = this.trendEngine.analyze(
      keywords.category
    );

    // Analizar mercado
    const market = this.marketEngine.analyze(
      trend.score
    );

    // Analizar riesgo
    const risk = this.riskEngine.analyze(
      text,
      keywords.category
    );

    // Estrategia
    const strategy = this.strategyEngine.analyze(
      keywords.category
    );

    // Oportunidad
    const opportunity = this.opportunityEngine.analyze(
      trend.score
    );

    // Hoja de ruta
    const timeline = this.timelineEngine.analyze(
      text
    );

    // Puntaje final
    const finalScore = this.scoreEngine.calculate({

      trendScore: trend.score,

      originality: risk.originality,

      confidence: trend.confidence

    });

    // Resultado base
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

    // Razonamiento
    const reasoning = this.reasoningEngine.analyze(
      partialResult as AnalysisResult
    );

    // Resultado final
    return {

      ...partialResult,

      reasoning

    };

  }

}