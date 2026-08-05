import type { AnalysisResult } from "@/core/monetbrain/models/AnalysisResult";

export class ResultValidator {


validate(data:any):AnalysisResult{


return {


score:
data.score ??
data.viabilidad ??
data.atractivo ??
0,


trend:
data.trend ??
data.tendencia ??
"Sin información",


confidence:
data.confidence ??
data.confianza ??
70,


market:
data.market ??
data.mercado ??
data.analisis_mercado ??
"Sin información",


competition:
data.competition ??
data.competencia ??
"Sin información",


income:
data.income ??
data.ingresos ??
data.modelo_ingresos ??
"Sin información",


aiRisk:
data.aiRisk ??
data.risk ??
data.riesgos ??
"Sin información",


originality:
data.originality ??
data.originalidad ??
0,


recommendation:
data.recommendation ??
data.recomendacion ??
"Sin información",


investmentLevel:
data.investmentLevel ??
data.nivel_inversion ??
"No definido",


estimatedTime:
data.estimatedTime ??
data.tiempo_estimado ??
"No definido",


platforms:
data.platforms ?? [],


ideas:
data.ideas ?? [],


timeline:
data.timeline ?? [],



businessModel:{


recommended:
data.businessModel?.recommended ??
{
name:"Modelo no definido",
score:0,
recurringRevenue:false,
scalability:"Pendiente",
complexity:"Pendiente",
description:""
},


alternatives:
data.businessModel?.alternatives ?? []

},



finance:{


initialInvestment:
data.finance?.initialInvestment ??
data.inversion_inicial?.total ??
0,


monthlyCosts:
data.finance?.monthlyCosts ??
0,


breakEvenMonths:
data.finance?.breakEvenMonths ??
data.punto_de_equilibrio?.meses ??
0,


roi:
data.finance?.roi ??
data.ROI?.escenarios?.base?.ROI_anual ??
0,


estimatedProfit:
data.finance?.estimatedProfit ??
data.rentabilidad?.base?.ebitda_aprox_anual ??
0,


cashFlow:
data.finance?.cashFlow ??
JSON.stringify(data.flujo_de_caja ?? {})
},



pricing:{


recommendedPrice:
data.pricing?.recommendedPrice ??
data.precio ??
0,


minimumPrice:
data.pricing?.minimumPrice ??
0,


premiumPrice:
data.pricing?.premiumPrice ??
0,


grossMargin:
data.margenes?.margen_bruto_pct ??
0,


netMargin:
data.margenes?.margen_ebitda_pct_base ??
0,


averageTicket:
0

},



reasoning: {

summary: "",

strengths: [],

weaknesses: [],

nextSteps: []

},


advisor: {

executiveSummary: "",

decision: "",

decisionScore: 0,

firstStep: "",

biggestRisk: "",

objective: "",

recommendedRevenueModels: []

},


audience: {

primaryAudience: "",

ageRange: "",

interests: [],

painPoints: [],

preferredPlatforms: [],

buyingPower: ""

},


revenue: {

conservative: {

name: "",

monthlyRevenue: 0,

yearlyRevenue: 0,

estimatedClients: 0

},

expected: {

name: "",

monthlyRevenue: 0,

yearlyRevenue: 0,

estimatedClients: 0

},

optimistic: {

name: "",

monthlyRevenue: 0,

yearlyRevenue: 0,

estimatedClients: 0

}

},


growth:{


monthlyClients:0,

websiteVisitors:0,

socialFollowers:0,

monthlyAdsBudget:0,

monthlyGrowthRate:0

}


};


}


}


export const resultValidator = new ResultValidator();