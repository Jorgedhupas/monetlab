type Props = {
  ideas: string[];
};

export default function IdeasCard({
  ideas,
}: Props) {

  return (

    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">

      <h2 className="text-2xl font-bold mb-2">
        💡 Oportunidades de monetización
      </h2>

      <p className="text-slate-400 mb-8">
        Formas recomendadas por MonetBrain para generar ingresos con esta idea.
      </p>

      {ideas.length === 0 ? (

        <div className="bg-slate-800 rounded-xl p-6 text-slate-400">
          No se generaron ideas de monetización.
        </div>

      ) : (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

          {ideas.map((idea, index) => (

            <div
              key={`${idea}-${index}`}
              className="bg-slate-800 border border-slate-700 hover:border-emerald-500 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
            >

              <div className="flex items-center justify-between mb-5">

                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <div className="text-2xl">
                  💰
                </div>

              </div>

              <p className="text-slate-300 leading-7">
                {idea}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}