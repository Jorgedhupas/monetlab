export class AIFusionEngine {


  private average(values: number[]) {

    const valid = values.filter(
      value =>
        typeof value === "number" &&
        !isNaN(value)
    );


    if (valid.length === 0)
      return 0;


    return valid.reduce(
      (a,b)=>a+b,
      0
    ) / valid.length;

  }



  private extractText(value:any):string {


    if(value === null || value === undefined)
      return "";


    if(typeof value === "string")
      return value;


    if(typeof value === "number")
      return String(value);



    if(typeof value === "object"){

      return JSON.stringify(
        value,
        null,
        2
      );

    }


    return "";

  }




  private unique(values:any[]) {


    const cleaned = values

      .map(value => this.extractText(value))


      .filter(
        value =>
          value &&
          value !== "Sin información" &&
          value !== "{}" &&
          value !== "null"
      );



    return [
      ...new Set(cleaned)
    ];

  }




  fuse(results:any) {


    const {

      market = {},

      finance = {},

      risk = {},

      trend = {},

      strategy = {}

    } = results;



    console.log(
      "🧩 AIFusionEngine fusionando resultados..."
    );




    return {



      score:

        Math.round(

          this.average([

            market.score,

            finance.score,

            risk.score,

            trend.score

          ])

        ),




      confidence:

        Number(

          this.average([

            market.confidence,

            finance.confidence,

            risk.confidence,

            trend.confidence

          ]).toFixed(2)

        ),




      trend:

        trend.trend ||

        market.trend ||

        "Sin información",





      market:

        this.unique([

          market.market,

          finance.market,

          risk.market,

          trend.market

        ]).join("\n\n"),




      competition:

        this.unique([

          market.competition,

          finance.competition,

          risk.competition,

          trend.competition

        ]).join("\n\n"),





      income:

        this.unique([

          market.income,

          finance.income,

          risk.income,

          trend.income

        ]).join("\n\n"),





      aiRisk:

        this.unique([

          market.aiRisk,

          finance.aiRisk,

          risk.aiRisk,

          trend.aiRisk

        ]).join("\n\n"),





      originality:

        Math.round(

          this.average([

            market.originality,

            finance.originality,

            risk.originality,

            trend.originality

          ])

        ),




      recommendation:

        this.unique([

          market.recommendation,

          finance.recommendation,

          risk.recommendation,

          trend.recommendation,

          strategy.finalDecision

        ]).join("\n\n"),





      investmentLevel:

        finance.investmentLevel ||

        market.investmentLevel ||

        "No definido",




      estimatedTime:

        finance.estimatedTime ||

        trend.estimatedTime ||

        "No definido",





      platforms:

        this.unique([

          ...(market.platforms || []),

          ...(finance.platforms || []),

          ...(risk.platforms || []),

          ...(trend.platforms || [])

        ]),





      ideas:

        this.unique([

          ...(market.ideas || []),

          ...(finance.ideas || []),

          ...(risk.ideas || []),

          ...(trend.ideas || [])

        ]),




      timeline:[

        ...(market.timeline || []),

        ...(finance.timeline || []),

        ...(risk.timeline || []),

        ...(trend.timeline || [])

      ],





      businessModel:

        market.businessModel ||

        trend.businessModel ||

        finance.businessModel ||

        strategy.businessModel ||

        {

          recommended:{

            name:"No definido",

            score:0,

            recurringRevenue:false,

            scalability:"Pendiente",

            complexity:"Pendiente",

            description:""

          },

          alternatives:[]

        },






      finance:

        finance.finance ||

        {

          initialInvestment:0,

          monthlyCosts:0,

          breakEvenMonths:0,

          roi:0,

          estimatedProfit:0,

          cashFlow:{}

        },






      pricing:

        finance.pricing ||

        {

          recommendedPrice:0,

          minimumPrice:0,

          premiumPrice:0,

          grossMargin:0,

          netMargin:0,

          averageTicket:0

        },





      growth:

        trend.growth ||

        {},






      // ==========================
      // CAPA ESTRATEGICA CEO
      // ==========================


      executiveSummary:

        strategy.executiveSummary || "",



      strengths:

        strategy.strengths || [],



      weaknesses:

        strategy.weaknesses || [],



      contradictions:

        strategy.contradictions || [],



      finalDecision:

        strategy.finalDecision || "",



      priority:

        strategy.priority || "Media",




      strategy

    };


  }


}



export const aiFusionEngine = new AIFusionEngine();