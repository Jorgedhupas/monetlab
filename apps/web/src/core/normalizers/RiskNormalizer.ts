import type {
  RiskResult,
  RiskItem,
} from "@/core/monetbrain/models/RiskResult";

export class RiskNormalizer {

  private normalizeItems(items: any): RiskItem[] {

    if (!Array.isArray(items)) return [];

    return items.map((item) => ({

      id: item.id ?? "",

      nombre:
        item.nombre ??
        item.name ??
        "",

      descripcion:
        item.descripcion ??
        item.description ??
        "",

      probabilidad:
        item.probabilidad ??
        item.probability ??
        "",

      impacto:
        item.impacto ??
        item.impact ??
        "",

      criticidad:
        item.criticidad ??
        item.criticality ??
        "",

      mitigacion:
        item.mitigacion ??
        item.mitigation ??
        []

    }));

  }

  normalize(data: unknown): RiskResult {

    const risk = (data ?? {}) as Record<string, any>;

    return {

      financieros:
        this.normalizeItems(
          risk.financieros ??
          risk.financial
        ),

      legales:
        this.normalizeItems(
          risk.legales ??
          risk.legal
        ),

      tecnologicos:
        this.normalizeItems(
          risk.tecnologicos ??
          risk.technological
        ),

      operativos:
        this.normalizeItems(
          risk.operativos ??
          risk.operational
        ),

      comerciales:
        this.normalizeItems(
          risk.comerciales ??
          risk.commercial
        )

    };

  }

}

export const riskNormalizer = new RiskNormalizer();