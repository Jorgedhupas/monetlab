import { OpenAIProvider } from "@/services/ai/OpenAIProvider";
import { FinancePrompt } from "@/core/prompts/FinancePrompt";

export class FinanceAgent {

  private ai = new OpenAIProvider();

  async execute(prompt: string) {

    console.log("💰 FinanceAgent ejecutándose...");

    return await this.ai.analyze(`
${FinancePrompt}

Idea de negocio:

${prompt}
`);

  }

}