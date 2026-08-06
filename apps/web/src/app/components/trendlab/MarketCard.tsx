import type { MarketResult } from "@/core/monetbrain/models/MarketResult";

type Props = {
  market: MarketResult | string;
};

export default function MarketCard({
  market,
}: Props) {

  if (typeof market === "string") {
    return (
      <Card title="🌍 Mercado">
        <p className="text-slate-300 whitespace-pre-line">
          {market}
        </p>
      </Card>
    );
  }

  const tam =
    market.TAM_SAM_SOM?.rangos_USD?.TAM_anual ?? "-";

  const sam =
    market.TAM_SAM_SOM?.rangos_USD?.SAM_3_anios ?? "-";

  const som =
    market.TAM_SAM_SOM?.rangos_USD?.SOM_3_anios ?? "-";

  return (

    <Card title="🌍 Mercado">

      <div className="grid md:grid-cols-3 gap-4 mb-8">

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

      {market.resumen && (
        <Section
          title="Resumen"
          text={market.resumen}
        />
      )}

      {market.demanda_estacional && (
        <Section
          title="Demanda"
          text={market.demanda_estacional}
        />
      )}

      {market.segmentos_objetivo &&
        market.segmentos_objetivo.length > 0 && (

        <div>

          <h3 className="text-lg font-semibold mb-4">
            Segmentos objetivo
          </h3>

          <div className="grid gap-3">

            {market.segmentos_objetivo.map((segmento, index) => (

              <div
                key={index}
                className="bg-slate-800 rounded-xl p-4 border border-slate-700"
              >
                {segmento}
              </div>

            ))}

          </div>

        </div>

      )}

    </Card>

  );

}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {

  return (

    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 shadow-lg">

      <h2 className="text-2xl font-bold mb-8">
        {title}
      </h2>

      {children}

    </div>

  );

}

function Metric({
  title,
  value,
}: {
  title: string;
  value: string;
}) {

  return (

    <div className="bg-slate-800 rounded-xl p-5 text-center">

      <div className="text-sm text-slate-400">
        {title}
      </div>

      <div className="text-xl font-bold text-cyan-400 mt-2">
        {value}
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

    <div className="mb-8">

      <h3 className="font-semibold text-lg mb-3">
        {title}
      </h3>

      <p className="text-slate-300 leading-8 whitespace-pre-line">
        {text}
      </p>

    </div>

  );

}