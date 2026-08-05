import OpenAI from "openai";

export class OpenAIProvider {

      name = "OpenAI";

  private client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });


  async analyze(prompt: string) {

    console.log("🤖 OpenAI Provider");
    console.log("Consultando GPT...");


    const completion = await this.client.chat.completions.create({

      model: "gpt-5",

      messages: [

        {
          role: "user",
          content: prompt,
        },

      ],

    });


    const content =
      completion.choices[0].message.content ?? "{}";


    const clean = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();



    console.log("========== RESPUESTA GPT ==========");
    console.log(clean);
    console.log("===================================");



    try {

      const parsed = JSON.parse(clean);

console.log("===== JSON PARSEADO =====");
console.log(JSON.stringify(parsed,null,2));

return parsed;


    } catch(error) {


      console.error("❌ GPT DEVOLVIÓ JSON INVÁLIDO");

      console.error(error);

      console.error("RESPUESTA ORIGINAL:");

      console.error(clean);



      return {

        score: 0,

        confidence: 0,

        trend: "Sin información",

        market: "",

        competition: "",

        income: "",

        aiRisk: "",

        originality: 0,

        recommendation:
          "El agente no pudo generar una respuesta válida.",

        investmentLevel: "",

        estimatedTime: "",

        platforms: [],

        ideas: [],

        timeline: [],


        businessModel: {

          recommended: {

            name: "No definido",

            score: 0,

            recurringRevenue: false,

            scalability: "",

            complexity: "",

            description: ""

          },

          alternatives: []

        },


        finance: {

          initialInvestment: 0,

          monthlyCosts: 0,

          breakEvenMonths: 0,

          roi: 0,

          estimatedProfit: 0,

          cashFlow: ""

        },


        pricing: {

          recommendedPrice: 0,

          minimumPrice: 0,

          premiumPrice: 0,

          grossMargin: 0,

          netMargin: 0,

          averageTicket: 0

        },


        growth: {

          monthlyClients: 0,

          websiteVisitors: 0,

          socialFollowers: 0,

          monthlyAdsBudget: 0,

          monthlyGrowthRate: 0

        },


        raw: clean

      };

    }

  }

}