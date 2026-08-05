export interface AgentResponse {

  // ==========================
  // INTELIGENCIA GENERAL
  // ==========================

  score: number;

  confidence: number;

  trend: string;


  // ==========================
  // ANALISIS DE MERCADO
  // ==========================

  market: string;

  competition: string;

  income: string;

  aiRisk: string;



  // ==========================
  // ORIGINALIDAD Y DECISION
  // ==========================

  originality: number;

  recommendation: string;

  investmentLevel: string;

  estimatedTime: string;



  // ==========================
  // RECURSOS GENERADOS
  // ==========================

  platforms: string[];

  ideas: string[];

  timeline: TimelineStep[];



  // ==========================
  // MODELO DE NEGOCIO
  // ==========================

  businessModel: BusinessModel;



  // ==========================
  // FINANZAS
  // ==========================

  finance: Finance;



  // ==========================
  // PRECIOS
  // ==========================

  pricing: Pricing;



  // ==========================
  // CRECIMIENTO
  // ==========================

  growth: Growth;

}



// ==========================
// TIMELINE
// ==========================

export interface TimelineStep {

  period: string;

  action: string;

}



// ==========================
// BUSINESS MODEL
// ==========================

export interface BusinessModel {

  recommended: {

    name: string;

    score: number;

    recurringRevenue: boolean;

    scalability: string;

    complexity: string;

    description: string;

  };


  alternatives: {

    name: string;

    score: number;

    recurringRevenue: boolean;

    scalability: string;

    complexity: string;

    description: string;

  }[];

}



// ==========================
// FINANCE
// ==========================

export interface Finance {

  initialInvestment: number;

  monthlyCosts: number;

  breakEvenMonths: number;

  roi: number;

  estimatedProfit: number;

  cashFlow: string;

}



// ==========================
// PRICING
// ==========================

export interface Pricing {

  recommendedPrice: number;

  minimumPrice: number;

  premiumPrice: number;

  grossMargin: number;

  netMargin: number;

  averageTicket: number;

}



// ==========================
// GROWTH
// ==========================

export interface Growth {

  monthlyClients: number;

  websiteVisitors: number;

  socialFollowers: number;

  monthlyAdsBudget: number;

  monthlyGrowthRate: number;

}