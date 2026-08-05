import { OpenAIProvider } from "@/services/ai/OpenAIProvider";
import { RiskPrompt } from "@/core/prompts/RiskPrompt";

export class RiskAgent {

  private ai = new OpenAIProvider();

  async execute(prompt: string) {

    console.log("⚠️ RiskAgent ejecutándose...");

    return await this.ai.analyze(`
${RiskPrompt}

Idea de negocio:

${prompt}
`);

  }

}