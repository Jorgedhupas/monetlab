import { MarketAgent } from "@/services/agents/MarketAgent";
import { FinanceAgent } from "@/services/agents/FinanceAgent";
import { RiskAgent } from "@/services/agents/RiskAgent";
import { TrendAgent } from "@/services/agents/TrendAgent";
import { StrategyAgent } from "@/services/agents/StrategyAgent";

export class MonetBrain {

  private market = new MarketAgent();
  private finance = new FinanceAgent();
  private risk = new RiskAgent();
  private trend = new TrendAgent();
  private strategy = new StrategyAgent();

  async think(prompt: string) {

    console.log("🧠 MonetBrain analizando...");

    const [market, finance, risk, trend] = await Promise.all([

      this.market.execute(prompt),

      this.finance.execute(prompt),

      this.risk.execute(prompt),

      this.trend.execute(prompt)

    ]);

    console.log("✅ Especialistas terminaron.");

console.log("MARKET RESULT:");
console.log(JSON.stringify(market,null,2));

console.log("FINANCE RESULT:");
console.log(JSON.stringify(finance,null,2));

console.log("RISK RESULT:");
console.log(JSON.stringify(risk,null,2));

console.log("TREND RESULT:");
console.log(JSON.stringify(trend,null,2));

    const strategy = await this.strategy.execute({

      market,
      finance,
      risk,
      trend

    });

    console.log("👔 StrategyAgent terminó.");

    return {

      market,
      finance,
      risk,
      trend,
      strategy,

      generatedAt: new Date().toISOString()

    };

  }

}

export const monetBrain = new MonetBrain();