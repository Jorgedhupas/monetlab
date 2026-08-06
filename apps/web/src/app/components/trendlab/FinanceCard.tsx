import type { FinanceResult } from "@/core/monetbrain/models/FinanceResult";

type Props = {
  finance: FinanceResult;
};

function money(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function FinanceCard({
  finance,
}: Props) {

  return (

    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">

      <h2 className="text-2xl font-bold mb-8">
        💰 Finanzas
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">

        <Metric
          title="Inversión inicial"
          value={money(finance.initialInvestment)}
          color="text-cyan-400"
        />

        <Metric
          title="Costos mensuales"
          value={money(finance.monthlyCosts)}
          color="text-orange-400"
        />

        <Metric
          title="Punto de equilibrio"
          value={`${finance.breakEvenMonths} meses`}
          color="text-green-400"
        />

        <Metric
          title="ROI"
          value={`${finance.roi}%`}
          color="text-purple-400"
        />

        <Metric
          title="Utilidad estimada"
          value={money(finance.estimatedProfit)}
          color="text-emerald-400"
        />

      </div>

      <div className="mt-8 bg-slate-800 rounded-xl p-6">

        <h3 className="text-lg font-semibold mb-3">
          Flujo de caja
        </h3>

        <p className="text-slate-300 whitespace-pre-line leading-8">
          {finance.cashFlow}
        </p>

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