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