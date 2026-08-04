type BusinessModel = {
  name: string;
  score: number;
  recurringRevenue: boolean;
  scalability: string;
  complexity: string;
  description: string;
};

type Props = {
  recommended: BusinessModel;
  alternatives: BusinessModel[];
};

export default function BusinessModelCard({
  recommended,
  alternatives,
}: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

      <h2 className="text-2xl font-bold text-white mb-6">
        Modelo de Negocio
      </h2>

      {/* Modelo recomendado */}

      <div className="bg-emerald-900/20 border border-emerald-600 rounded-xl p-6 mb-8">

        <div className="flex items-center justify-between mb-4">

          <h3 className="text-xl font-bold text-emerald-400">
            ⭐ Modelo recomendado
          </h3>

          <span className="bg-emerald-600 px-3 py-1 rounded-full text-sm font-semibold">
            {recommended?.score ?? 0}/100
          </span>

        </div>

        <h4 className="text-lg font-semibold text-white mb-3">
          {recommended?.name ?? "No definido"}
        </h4>

        <p className="text-slate-300 leading-relaxed mb-5">
          {recommended?.description ?? "Sin descripción."}
        </p>

        <div className="grid md:grid-cols-3 gap-4">

          <div className="bg-slate-800 rounded-lg p-4">

            <p className="text-slate-400 text-sm">
              Ingresos recurrentes
            </p>

            <p className="font-bold text-white mt-1">
              {recommended?.recurringRevenue ? "Sí" : "No"}
            </p>

          </div>

          <div className="bg-slate-800 rounded-lg p-4">

            <p className="text-slate-400 text-sm">
              Escalabilidad
            </p>

            <p className="font-bold text-white mt-1">
              {recommended?.scalability ?? "-"}
            </p>

          </div>

          <div className="bg-slate-800 rounded-lg p-4">

            <p className="text-slate-400 text-sm">
              Complejidad
            </p>

            <p className="font-bold text-white mt-1">
              {recommended?.complexity ?? "-"}
            </p>

          </div>

        </div>

      </div>

      {/* Alternativas */}

      <h3 className="text-lg font-bold text-white mb-4">
        Otras alternativas
      </h3>

      <div className="grid md:grid-cols-3 gap-5">

        {(alternatives ?? []).map((model, index) => (

          <div
            key={`${model?.name ?? "modelo"}-${index}`}
            className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-slate-500 transition"
          >

            <div className="flex items-center justify-between mb-3">

              <h4 className="font-semibold text-white">
                {model?.name ?? "Modelo"}
              </h4>

              <span className="text-emerald-400 font-bold">
                {model?.score ?? 0}
              </span>

            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {model?.description ?? "Sin descripción"}
            </p>

            <div className="space-y-2 text-sm">

              <div className="flex justify-between">

                <span className="text-slate-400">
                  Recurrente
                </span>

                <span className="text-white">
                  {model?.recurringRevenue ? "Sí" : "No"}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-400">
                  Escalabilidad
                </span>

                <span className="text-white">
                  {model?.scalability ?? "-"}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-400">
                  Complejidad
                </span>

                <span className="text-white">
                  {model?.complexity ?? "-"}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}