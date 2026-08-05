import { OpenAIProvider } from "@/services/ai/OpenAIProvider";
import { TrendPrompt } from "@/core/prompts/TrendPrompt";

export class TrendAgent {

  private ai = new OpenAIProvider();

  async execute(prompt: string) {

    console.log("📈 TrendAgent ejecutándose...");

    return await this.ai.analyze(`
${TrendPrompt}

Idea de negocio:

${prompt}
`);

  }

}