import type { MarketResult } from "@/core/monetbrain/models/MarketResult";

export class MarketNormalizer {

  normalize(data: unknown): MarketResult | string {

    if (!data) {
      return "Sin información";
    }

    if (typeof data === "string") {
      return data;
    }

    const market = data as Record<string, any>;

    return {

      resumen:
        market.resumen ??
        market.summary ??
        "",

      segmentos_objetivo:
        market.segmentos_objetivo ??
        market.segments ??
        [],

      TAM_SAM_SOM: {

        metodologia:
          market.TAM_SAM_SOM?.metodologia ??
          market.TAM_SAM_SOM?.methodology ??
          "",

        rangos_USD: {

          TAM_anual:
            market.TAM_SAM_SOM?.rangos_USD?.TAM_anual ??
            market.TAM_SAM_SOM?.ranges_USD?.TAM_year ??
            "",

          SAM_3_anios:
            market.TAM_SAM_SOM?.rangos_USD?.SAM_3_anios ??
            market.TAM_SAM_SOM?.ranges_USD?.SAM_3_years ??
            "",

          SOM_3_anios:
            market.TAM_SAM_SOM?.rangos_USD?.SOM_3_anios ??
            market.TAM_SAM_SOM?.ranges_USD?.SOM_3_years ??
            ""

        }

      },

      demanda_estacional:
        market.demanda_estacional ??
        market.seasonality ??
        "",

      competencia:
        market.competencia ??
        market.mainCompetitors ??
        []

    };

  }

}

export const marketNormalizer = new MarketNormalizer();