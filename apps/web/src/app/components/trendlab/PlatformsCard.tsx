type Props = {
  platforms: string[];
};

export default function PlatformsCard({
  platforms,
}: Props) {

  return (

    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">

      <h2 className="text-2xl font-bold mb-2">
        📲 Plataformas recomendadas
      </h2>

      <p className="text-slate-400 mb-8">
        Canales donde este negocio tiene mayor probabilidad de crecer.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

        {platforms.map((platform) => (

          <div
            key={platform}
            className="bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
          >

            <div className="text-3xl mb-3">
              🚀
            </div>

            <div className="font-semibold text-lg">
              {platform}
            </div>

          </div>

        ))}

      </div>

    </div>

  );

}