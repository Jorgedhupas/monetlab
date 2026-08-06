import type { GrowthResult } from "@/core/monetbrain/models/GrowthResult";

type Props = {
  growth: GrowthResult;
};

function numberFormat(value: number) {
  return new Intl.NumberFormat("es-CO").format(value);
}

function money(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function GrowthCard({
  growth,
}: Props) {

  return (

    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">

      <h2 className="text-2xl font-bold mb-8">
        📈 Crecimiento proyectado
      </h2>


      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">

        <Metric
          title="Clientes mensuales"
          value={numberFormat(growth.monthlyClients)}
          color="text-green-400"
        />

        <Metric
          title="Visitantes web"
          value={numberFormat(growth.websiteVisitors)}
          color="text-cyan-400"
        />

        <Metric
          title="Seguidores sociales"
          value={numberFormat(growth.socialFollowers)}
          color="text-purple-400"
        />

        <Metric
          title="Publicidad mensual"
          value={money(growth.monthlyAdsBudget)}
          color="text-orange-400"
        />

        <Metric
          title="Crecimiento mensual"
          value={`${growth.monthlyGrowthRate}%`}
          color="text-emerald-400"
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