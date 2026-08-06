import type { AdvisorResult } from "./AdvisorResult";
import type { AudienceResult } from "./AudienceResult";
import type { BusinessModelResult } from "./BusinessModelResult";
import type { RevenueResult } from "./RevenueResult";
import type { FinanceResult } from "./FinanceResult";
import type { PricingResult } from "./PricingResult";
import type { GrowthResult } from "./GrowthResult";
import type { MarketResult } from "./MarketResult";
import type { CompetitionResult } from "./CompetitionResult";
import type { RiskResult } from "./RiskResult";


export interface TimelineStep {
  period: string;
  action: string;
}


export interface Reasoning {

  summary: string;

  strengths: string[];

  weaknesses: string[];

  nextSteps: string[];

}



export interface CashFlowResult {

  proyeccion_ano_1?: unknown;

  supuestos?: unknown;

}


export interface AnalysisResult {


  score: number;


  trend: string;


  confidence: number;



  market: MarketResult | string;



  competition: CompetitionResult | string;



  income: string;



  aiRisk: RiskResult | string;



  originality: number;



  recommendation: string;



  investmentLevel: string;



  estimatedTime: string;



  platforms: string[];



  ideas: string[];



  timeline: TimelineStep[];



  reasoning: Reasoning;



  advisor: AdvisorResult;



  audience: AudienceResult;



  businessModel: BusinessModelResult;



  revenue: RevenueResult;



  finance: FinanceResult;



  pricing: PricingResult;



  growth: GrowthResult;



  executiveSummary?: string;



  strengths?: string[];



  weaknesses?: string[];



  contradictions?: {

    tema: string;

    observacion: string;

    implicacion: string;

  }[];



  finalDecision?: string;



  priority?: string;



  strategy?: {

    executiveSummary?: string;

    strengths?: string[];

    weaknesses?: string[];

    contradictions?: unknown[];

    finalDecision?: string;

    priority?: string;

  };


}