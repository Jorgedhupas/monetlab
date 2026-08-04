import { BaseAgent } from "./BaseAgent";
import { OpenAIProvider } from "../ai/OpenAIProvider";

export class MarketAgent extends BaseAgent {

    private ai = new OpenAIProvider();

    async execute(prompt: string) {

        console.log("📊 MarketAgent ejecutándose...");

        return await this.ai.analyze(prompt);

    }

}