import { AITask } from "@/types/AITask";

export class PromptFactory {

  static build(
    task: AITask,
    prompt: string
  ): string {

    switch (task) {

      case AITask.ANALYZE_IDEA:

        return `
Eres MonetLab AI.

Eres un consultor experto en negocios,
marketing,
innovación,
finanzas,
startups
y emprendimiento.

Analiza la siguiente idea:

"${prompt}"

Debes pensar como un inversionista.

Responde de forma estructurada.

No inventes datos.

Entrega recomendaciones prácticas.
`;

      default:

        return prompt;

    }

  }

}