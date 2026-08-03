type Props = {
  market: string;
  competition: string;
  income: string;
  aiRisk: string;
  originality: number;
  recommendation: string;
  investmentLevel: string;
  estimatedTime: string;
};

export default function MetricsGrid({
  market,
  competition,
  income,
  aiRisk,
  originality,
  recommendation,
  investmentLevel,
  estimatedTime,
}: Props) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

      <Card title="🌍 Mercado" value={market} color="text-purple-400" />

      <Card title="⚔ Competencia" value={competition} color="text-yellow-400" />

      <Card title="💰 Ingresos" value={income} color="text-green-400" />

      <Card title="🛡 Riesgo IA" value={aiRisk} color="text-red-400" />

      <Card
        title="💎 Originalidad"
        value={`${originality}%`}
        color="text-cyan-400"
      />

      <Card
        title="🚀 Recomendación"
        value={recommendation}
        color="text-blue-400"
      />

      <Card
        title="💵 Inversión"
        value={investmentLevel}
        color="text-orange-400"
      />

      <Card
        title="⏳ Tiempo"
        value={estimatedTime}
        color="text-pink-400"
      />

    </div>
  );
}

type CardProps = {
  title: string;
  value: string;
  color: string;
};

function Card({ title, value, color }: CardProps) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-blue-500 transition">

      <p className="text-slate-400 mb-3">
        {title}
      </p>

      <p className={`text-xl font-bold ${color}`}>
        {value}
      </p>

    </div>
  );
}