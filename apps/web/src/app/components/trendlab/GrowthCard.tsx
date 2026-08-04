type Growth = {
  monthlyClients: number;
  websiteVisitors: number;
  socialFollowers: number;
  monthlyAdsBudget: number;
  monthlyGrowthRate: number;
};

interface GrowthCardProps {
  growth: Growth;
}

export default function GrowthCard({ growth }: GrowthCardProps) {
  return (
    <div className="bg-slate-900 rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6">
        📈 Plan de Crecimiento
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Clientes por mes</p>
          <p className="text-3xl font-bold">
            {growth.monthlyClients}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Visitas Web</p>
          <p className="text-3xl font-bold">
            {growth.websiteVisitors}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Seguidores</p>
          <p className="text-3xl font-bold">
            {growth.socialFollowers}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Publicidad mensual</p>
          <p className="text-3xl font-bold">
            ${growth.monthlyAdsBudget.toLocaleString("es-CO")}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Crecimiento mensual</p>
          <p className="text-3xl font-bold text-green-400">
            {growth.monthlyGrowthRate}%
          </p>
        </div>

      </div>
    </div>
  );
}