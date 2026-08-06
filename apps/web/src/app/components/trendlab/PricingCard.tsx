import type { PricingResult } from "@/core/monetbrain/models/PricingResult";


type Props = {
  pricing: PricingResult;
};


function money(value: number) {

  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);

}


function percent(value: number) {

  return `${value}%`;

}


export default function PricingCard({
  pricing,
}: Props) {


  return (

    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">


      <h2 className="text-2xl font-bold mb-8">
        💰 Estrategia de precios
      </h2>


      <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-5">


        <Metric
          title="Precio recomendado"
          value={money(pricing.recommendedPrice)}
          color="text-green-400"
        />


        <Metric
          title="Precio mínimo"
          value={money(pricing.minimumPrice)}
          color="text-yellow-400"
        />


        <Metric
          title="Precio premium"
          value={money(pricing.premiumPrice)}
          color="text-purple-400"
        />


        <Metric
          title="Margen bruto"
          value={percent(pricing.grossMargin)}
          color="text-cyan-400"
        />


        <Metric
          title="Margen neto"
          value={percent(pricing.netMargin)}
          color="text-blue-400"
        />


        <Metric
          title="Ticket promedio"
          value={money(pricing.averageTicket)}
          color="text-orange-400"
        />


      </div>


    </div>

  );

}



function Metric({

  title,
  value,
  color,

}: {

  title: string;
  value: string;
  color: string;

}) {


  return (

    <div className="bg-slate-800 rounded-xl p-5">


      <div className="text-sm text-slate-400">
        {title}
      </div>


      <div className={`text-xl font-bold mt-3 ${color}`}>
        {value}
      </div>


    </div>

  );

}