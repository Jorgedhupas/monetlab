type Finance = {
  initialInvestment: number;
  monthlyCosts: number;
  breakEvenMonths: number;
  roi: number;
  estimatedProfit: number;
  cashFlow: string;
};

type Props = {
  finance: Finance;
};

const money = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);

export default function FinanceCard({ finance }: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl p-8">

      <h2 className="text-2xl font-bold mb-8">
        💰 Finanzas Proyectadas
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Inversión Inicial</p>
          <p className="text-2xl font-bold text-green-400">
            {money(finance.initialInvestment)}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Costos Mensuales</p>
          <p className="text-2xl font-bold">
            {money(finance.monthlyCosts)}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">ROI</p>
          <p className="text-2xl font-bold text-blue-400">
            {finance.roi}%
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Punto de Equilibrio</p>
          <p className="text-2xl font-bold">
            {finance.breakEvenMonths} meses
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Utilidad Estimada</p>
          <p className="text-2xl font-bold text-green-400">
            {money(finance.estimatedProfit)}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Flujo de Caja</p>
          <p className="text-2xl font-bold text-yellow-400">
            {finance.cashFlow}
          </p>
        </div>

      </div>

    </div>
  );
}