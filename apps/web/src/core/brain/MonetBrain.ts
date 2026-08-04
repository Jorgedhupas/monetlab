import { MarketAgent } from "@/services/agents/MarketAgent";
import { FinanceAgent } from "@/services/agents/FinanceAgent";
import { RiskAgent } from "@/services/agents/RiskAgent";
import { TrendAgent } from "@/services/agents/TrendAgent";

export class MonetBrain {

    private market = new MarketAgent();
    private finance = new FinanceAgent();
    private risk = new RiskAgent();
    private trend = new TrendAgent();

    async think(prompt:string){

        const [
            market,
            finance,
            risk,
            trend
        ] = await Promise.all([

            this.market.execute(prompt),

            this.finance.execute(prompt),

            this.risk.execute(prompt),

            this.trend.execute(prompt)

        ]);

        return{

            market,

            finance,

            risk,

            trend

        };

    }

}