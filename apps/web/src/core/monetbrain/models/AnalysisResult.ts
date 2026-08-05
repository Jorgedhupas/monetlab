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


export interface MarketResult {

  resumen?: string;

  segmentos_objetivo?: string[];

  TAM_SAM_SOM?: {

    metodologia?: string;

    rangos_USD?: {

      TAM_anual?: string;

      SAM_3_anios?: string;

      SOM_3_anios?: string;

    };

  };


  demanda_estacional?: string;


  competencia?: unknown;

}


export interface CompetitionResult {

  panorama?: string;

  jugadores_masivos_nacionales_y_multinacionales?: string[];

  jugadores_premium_artesanales_y_afines?: string[];

  sustitutos_y_categorias_adyacentes?: string[];

  canales_de_venta_relevantes?: string[];

  intensidad_competitiva?: string;

}


export interface RiskItem {

  id?: string;

  nombre?: string;

  descripcion?: string;

  probabilidad?: string;

  impacto?: string;

  criticidad?: string;

  mitigacion?: string[];

}


export interface RiskResult {

  financieros?: RiskItem[];

  legales?: RiskItem[];

  tecnologicos?: RiskItem[];

  operativos?: RiskItem[];

  comerciales?: RiskItem[];

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