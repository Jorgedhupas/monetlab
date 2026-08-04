import { OpenAIProvider } from "../ai/OpenAIProvider";

export class TrendSpecialist {

  private ai = new OpenAIProvider();

  async analyze(idea: string) {

    const prompt = `
Eres un analista mundial de tendencias.

Analiza la siguiente idea.

${idea}

Responde únicamente sobre:

- tendencia
- crecimiento
- competencia
- oportunidades
- riesgos

No hables de marketing.

No hables de finanzas.

No inventes datos.

`;

    return await this.ai.analyze(prompt);

  }

}