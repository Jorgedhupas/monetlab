type TimelineStep = {
  period: string;
  action: string;
};

type Props = {
  timeline?: TimelineStep[];
};

export default function TimelineCard({ timeline = [] }: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl p-8">

      <h2 className="text-2xl font-bold mb-8">
        🗺️ Hoja de Ruta
      </h2>

      {timeline.length === 0 ? (

        <p className="text-slate-400">
          No hay una hoja de ruta disponible.
        </p>

      ) : (

        <div className="space-y-5">

          {timeline.map((step, index) => (

            <div
              key={index}
              className="flex gap-5 items-start border-l-2 border-blue-500 pl-6 pb-6"
            >

              <div>

                <h3 className="font-bold text-blue-400">
                  {step.period}
                </h3>

                <p className="text-slate-300 mt-1">
                  {step.action}
                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}