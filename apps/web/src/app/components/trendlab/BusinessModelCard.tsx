import type { BusinessModelResult } from "@/core/monetbrain/models/BusinessModelResult";


type Props = {
  recommended: BusinessModelResult["recommended"];
  alternatives: BusinessModelResult["alternatives"];
};


export default function BusinessModelCard({
  recommended,
  alternatives,
}: Props) {


  return (

    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">


      <h2 className="text-2xl font-bold mb-8">
        🚀 Modelo de negocio
      </h2>


      <div className="bg-gradient-to-br from-blue-900/40 to-slate-800 rounded-2xl p-6 border border-blue-700 mb-8">


        <div className="flex justify-between items-start mb-5">


          <h3 className="text-2xl font-bold text-blue-300">
            {recommended.name}
          </h3>


          <span className="bg-blue-600 px-4 py-2 rounded-full font-bold">
            {recommended.score}/100
          </span>


        </div>


        <p className="text-slate-300 leading-8 mb-6">
          {recommended.description}
        </p>


        <div className="grid md:grid-cols-3 gap-4">


          <Metric
            title="Ingresos recurrentes"
            value={
              recommended.recurringRevenue
                ? "Sí"
                : "No"
            }
          />


          <Metric
            title="Escalabilidad"
            value={recommended.scalability}
          />


          <Metric
            title="Complejidad"
            value={recommended.complexity}
          />


        </div>


      </div>


      {alternatives.length > 0 && (

        <div>


          <h3 className="text-lg font-semibold mb-5">
            Modelos alternativos
          </h3>


          <div className="grid md:grid-cols-2 gap-5">


            {alternatives.map((model, index) => (

              <div
                key={index}
                className="bg-slate-800 rounded-xl p-5 border border-slate-700"
              >


                <div className="flex justify-between mb-4">


                  <h4 className="font-bold text-lg">
                    {model.name}
                  </h4>


                  <span className="text-blue-400 font-bold">
                    {model.score}
                  </span>


                </div>


                <p className="text-slate-400 leading-7">
                  {model.description}
                </p>


              </div>

            ))}


          </div>


        </div>

      )}


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

    <div className="bg-slate-900 rounded-xl p-4">


      <div className="text-sm text-slate-400">
        {title}
      </div>


      <div className="font-bold mt-2">
        {value}
      </div>


    </div>

  );

}