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

}