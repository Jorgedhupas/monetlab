import type { AnalysisResult } from "../models/AnalysisResult";
import type { ReasoningResult } from "../models/ReasoningResult";

export class ReasoningEngine {

  analyze(result: AnalysisResult): ReasoningResult {

    const strengths: string[] = [];
    const weaknesses: string[] = [];
    const nextSteps: string[] = [];

    if (result.score >= 90) {

      strengths.push(
        "La oportunidad presenta un alto potencial de crecimiento."
      );

    } else if (result.score >= 75) {

      strengths.push(
        "Existe una oportunidad interesante si se ejecuta correctamente."
      );

    } else {

      weaknesses.push(
        "La idea necesita una validación más profunda."
      );

    }

    if (result.aiRisk === "Muy Bajo") {

      strengths.push(
        "La automatización por IA representa un riesgo reducido."
      );

    } else {

      weaknesses.push(
        "El avance de la IA puede afectar este modelo de negocio."
      );

    }

    if (result.competition === "Alta") {

      weaknesses.push(
        "La competencia es elevada y será necesario diferenciar la propuesta."
      );

    }

    nextSteps.push(
      "Validar la demanda con clientes reales."
    );

    nextSteps.push(
      "Construir un producto mínimo viable (MVP)."
    );

    nextSteps.push(
      "Crear contenido en las plataformas recomendadas."
    );

    const summary =
      `La idea obtuvo una puntuación de ${result.score}/100. ` +
      `El mercado objetivo es ${result.market} y el nivel de competencia es ${result.competition}.`;

    return {

      summary,

      strengths,

      weaknesses,

      nextSteps

    };

  }

}