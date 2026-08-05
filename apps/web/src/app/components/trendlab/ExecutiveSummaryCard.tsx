type Props = {
  score: number;
  confidence: number;
  executiveSummary: string;
  recommendation: string;
  finalDecision: string;
};

export default function ExecutiveSummaryCard({
  score,
  confidence,
  executiveSummary,
  recommendation,
  finalDecision,
}: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            Resumen Ejecutivo
          </h2>

          <p className="text-slate-400 mt-2">
            Decisión estratégica generada por MonetBrain
          </p>

        </div>

        <div className="text-right">

          <div className="text-5xl font-black text-cyan-400">
            {score}
          </div>

          <div className="text-slate-400">
            Score
          </div>

          <div className="mt-4 text-lg text-green-400">
            Confianza {confidence}%
          </div>

        </div>

      </div>

      <div className="mt-8 space-y-6">

        <Section
          title="Resumen"
          text={executiveSummary}
        />

        <Section
          title="Recomendación"
          text={recommendation}
        />

        <Section
          title="Decisión Final"
          text={finalDecision}
        />

      </div>

    </div>
  );
}

function Section({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>

      <h3 className="text-xl font-bold mb-2">
        {title}
      </h3>

      <p className="text-slate-300 leading-8 whitespace-pre-wrap">
        {text}
      </p>

    </div>
  );
}