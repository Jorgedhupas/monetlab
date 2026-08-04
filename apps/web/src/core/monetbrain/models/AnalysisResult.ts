import type { AdvisorResult } from "./AdvisorResult";
import type { AudienceResult } from "./AudienceResult";
import type { BusinessModelResult } from "./BusinessModelResult";
import type { RevenueResult } from "./RevenueResult";
import type { FinanceResult } from "./FinanceResult";
import type { PricingResult } from "./PricingResult";
import type { GrowthResult } from "./GrowthResult";

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

export interface AnalysisResult {

  score: number;

  trend: string;

  confidence: number;

  market: string;

  competition: string;

  income: string;

  aiRisk: string;

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

}