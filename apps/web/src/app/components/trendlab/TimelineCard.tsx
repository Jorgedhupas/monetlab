type TimelineStep = {
  period: string;
  action: string;
};

type Props = {
  timeline?: TimelineStep[];
};

export default function TimelineCard({
  timeline = [],
}: Props) {

  return (

    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">

      <h2 className="text-2xl font-bold mb-2">
        🗺️ Hoja de Ruta
      </h2>

      <p className="text-slate-400 mb-8">
        Plan sugerido para convertir la idea en un negocio rentable.
      </p>

      {timeline.length === 0 ? (

        <div className="bg-slate-800 rounded-xl p-6 text-slate-400">
          MonetBrain aún no generó una hoja de ruta.
        </div>

      ) : (

        <div className="space-y-6">

          {timeline.map((step, index) => (

            <div
              key={index}
              className="flex items-start gap-5"
            >

              <div className="flex flex-col items-center">

                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                {index < timeline.length - 1 && (
                  <div className="w-1 h-16 bg-blue-700 mt-2 rounded-full" />
                )}

              </div>

              <div className="flex-1 bg-slate-800 rounded-xl p-5 border border-slate-700">

                <div className="text-blue-400 font-semibold mb-2">
                  {step.period}
                </div>

                <div className="text-slate-300 leading-7">
                  {step.action}
                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}