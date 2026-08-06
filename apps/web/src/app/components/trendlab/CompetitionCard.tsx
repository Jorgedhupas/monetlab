import type { CompetitionResult } from "@/core/monetbrain/models/CompetitionResult";

type Props = {
  competition: CompetitionResult | string;
};

export default function CompetitionCard({
  competition,
}: Props) {

  if (typeof competition === "string") {
    return (
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
        <h2 className="text-2xl font-bold mb-4">
          ⚔ Competencia
        </h2>

        <p className="text-slate-300 whitespace-pre-line">
          {competition}
        </p>
      </div>
    );
  }

  return (

    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-6">
        ⚔ Competencia
      </h2>

      <Metric
        title="Intensidad competitiva"
        value={competition.intensidad_competitiva}
      />

      <Section
        title="Panorama"
        items={
          competition.panorama
            ? [competition.panorama]
            : []
        }
      />

      <Section
        title="Grandes empresas"
        items={
          competition.jugadores_masivos_nacionales_y_multinacionales
        }
      />

      <Section
        title="Marcas premium"
        items={
          competition.jugadores_premium_artesanales_y_afines
        }
      />

      <Section
        title="Sustitutos"
        items={
          competition.sustitutos_y_categorias_adyacentes
        }
      />

      <Section
        title="Canales"
        items={
          competition.canales_de_venta_relevantes
        }
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

  if (!value) return null;

  return (

    <div className="mb-6 bg-slate-800 rounded-xl p-4">

      <div className="text-slate-400 text-sm">
        {title}
      </div>

      <div className="text-xl font-bold mt-2 text-cyan-400">
        {value}
      </div>

    </div>

  );

}

function Section({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) {

  if (!items || items.length === 0) return null;

  return (

    <div className="mb-8">

      <h3 className="font-semibold text-lg mb-3">
        {title}
      </h3>

      <div className="space-y-3">

        {items.map((item, index) => (

          <div
            key={index}
            className="bg-slate-800 rounded-lg p-4 text-slate-300"
          >
            {item}
          </div>

        ))}

      </div>

    </div>

  );

}