type MarketResult =
  | string
  | {
      score?: number;
      classification?: string;
      explanation?: string;

      TAM_SAM_SOM?: {
        rangos_USD?: {
          TAM_anual?: string;
          SAM_3_anios?: string;
          SOM_3_anios?: string;
        };
      };

      growthRate?: string;
      demandTrend?: string;
      entryDifficulty?: string;
      saturation?: string;
    };

type Props = {
  market: MarketResult;
};

export default function MarketCard({ market }: Props) {
  if (typeof market === "string") {
    return (
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
        <h2 className="text-2xl font-bold mb-6">🌍 Mercado</h2>

        <p className="text-slate-300 whitespace-pre-line">
          {market}
        </p>
      </div>
    );
  }

  const tam =
    market.TAM_SAM_SOM?.rangos_USD?.TAM_anual ?? "-";

  const sam =
    market.TAM_SAM_SOM?.rangos_USD?.SAM_3_anios ?? "-";

  const som =
    market.TAM_SAM_SOM?.rangos_USD?.SOM_3_anios ?? "-";

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

      <h2 className="text-2xl font-bold mb-6">
        🌍 Mercado
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mb-6">

        <Metric
          title="TAM"
          value={tam}
        />

        <Metric
          title="SAM"
          value={sam}
        />

        <Metric
          title="SOM"
          value={som}
        />

      </div>

      <Section
        title="Clasificación"
        value={market.classification}
      />

      <Section
        title="Explicación"
        value={market.explanation}
      />

      <Section
        title="Crecimiento"
        value={market.growthRate}
      />

      <Section
        title="Tendencia"
        value={market.demandTrend}
      />

      <Section
        title="Dificultad de entrada"
        value={market.entryDifficulty}
      />

      <Section
        title="Saturación"
        value={market.saturation}
      />

    </div>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value?: string;
}) {
  return (
    <div className="bg-slate-800 rounded-xl p-4">
      <div className="text-slate-400 text-sm">
        {title}
      </div>

      <div className="text-xl font-bold mt-2">
        {value ?? "-"}
      </div>
    </div>
  );
}

function Section({
  title,
  value,
}: {
  title: string;
  value?: string;
}) {
  if (!value) return null;

  return (
    <div className="mb-5">
      <h3 className="font-semibold mb-2">
        {title}
      </h3>

      <p className="text-slate-300 whitespace-pre-line">
        {value}
      </p>
    </div>
  );
}