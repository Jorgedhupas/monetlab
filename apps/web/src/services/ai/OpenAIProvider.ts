import OpenAI from "openai";

import { trendLabPrompt } from "@/core/prompts/trendlab.prompt";

export class OpenAIProvider {

  private client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async analyze(idea: string) {

    console.log("🤖 OpenAI Provider");
    console.log("Consultando GPT...");

    const completion = await this.client.chat.completions.create({

      model: "gpt-5",

      messages: [

        {
          role: "user",
          content: trendLabPrompt(idea),
        },

      ],


    });

    const content = completion.choices[0].message.content ?? "{}";

const clean = content
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

console.log("========== RESPUESTA GPT ==========");
console.log(clean);
console.log("===================================");

return JSON.parse(clean);

  }

}