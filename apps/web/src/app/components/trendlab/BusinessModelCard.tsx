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
    <div className="bg-slate-900 rounded-2xl p-8">

      <h2 className="text-2xl font-bold mb-8">
        💼 Modelo de Negocio
      </h2>

      <div className="bg-slate-800 rounded-xl p-6 border border-green-500">

        <p className="text-green-400 font-bold">
          Recomendado
        </p>

        <h3 className="text-2xl font-bold mt-2">
          {recommended.name}
        </h3>

        <p className="text-slate-300 mt-3">
          {recommended.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

          <div>

            <p className="text-slate-500">
              Score
            </p>

            <p className="font-bold">
              {recommended.score}
            </p>

          </div>

          <div>

            <p className="text-slate-500">
              Escalabilidad
            </p>

            <p className="font-bold">
              {recommended.scalability}
            </p>

          </div>

          <div>

            <p className="text-slate-500">
              Complejidad
            </p>

            <p className="font-bold">
              {recommended.complexity}
            </p>

          </div>

          <div>

            <p className="text-slate-500">
              Recurrente
            </p>

            <p className="font-bold">
              {recommended.recurringRevenue ? "Sí" : "No"}
            </p>

          </div>

        </div>

      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">
        Otras alternativas
      </h3>

      <div className="space-y-4">

        {alternatives.map((model) => (

          <div
            key={model.name}
            className="bg-slate-800 rounded-xl p-5"
          >

            <div className="flex justify-between">

              <strong>
                {model.name}
              </strong>

              <span>
                {model.score}/100
              </span>

            </div>

            <p className="text-slate-400 mt-2">
              {model.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}