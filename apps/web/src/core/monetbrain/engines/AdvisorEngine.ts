import type { AnalysisResult } from "../models/AnalysisResult";
import type { AdvisorResult } from "../models/AdvisorResult";

export class AdvisorEngine {

  analyze(result: AnalysisResult): AdvisorResult {

    let executiveSummary = "";
    let decision = "";
    let decisionScore = result.score;
    let firstStep = "";
    let biggestRisk = "";
    let objective = "";

    const recommendedRevenueModels: string[] = [];

    // Resumen ejecutivo

    if (result.score >= 90) {

      executiveSummary =
        "La idea presenta un potencial muy alto. Existe una buena combinación entre demanda, rentabilidad y posibilidades de crecimiento.";

      decision = "Lanzar el proyecto.";

    } else if (result.score >= 75) {

      executiveSummary =
        "La idea es prometedora, pero necesita validación antes de realizar inversiones importantes.";

      decision = "Validar el mercado.";

    } else {

      executiveSummary =
        "La idea necesita ajustes antes de convertirse en una oportunidad sólida.";

      decision = "Replantear el modelo.";

    }

    // Primer paso

    if (result.market === "Global") {

      firstStep =
        "Crear una audiencia digital y validar el producto con clientes internacionales.";

    } else if (result.market === "Latinoamérica") {

      firstStep =
        "Validar el mercado local y comenzar a construir comunidad en redes sociales.";

    } else {

      firstStep =
        "Realizar entrevistas con clientes potenciales antes de invertir.";

    }

    // Riesgo principal

    if (result.competition === "Alta") {

      biggestRisk =
        "Entrar a competir sin una propuesta claramente diferenciada.";

    } else {

      biggestRisk =
        "Invertir demasiado dinero antes de validar la demanda.";

    }

    // Objetivo inicial

    objective =
      "Conseguir los primeros 100 clientes satisfechos.";

    // Modelos de ingresos

    if (result.ideas.includes("Marketplace")) {

      recommendedRevenueModels.push("Marketplace");

    }

    if (result.ideas.includes("Cursos")) {

      recommendedRevenueModels.push("Cursos");

    }

    if (result.ideas.includes("Afiliados")) {

      recommendedRevenueModels.push("Afiliados");

    }

    recommendedRevenueModels.push("Venta directa");

    return {

      executiveSummary,

      decision,

      decisionScore,

      firstStep,

      biggestRisk,

      objective,

      recommendedRevenueModels

    };

  }

}