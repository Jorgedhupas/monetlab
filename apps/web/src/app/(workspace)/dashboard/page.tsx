export default function Dashboard() {
  return (
    <>
      <h1 className="text-5xl font-bold mb-2">
        Bienvenido Jorge 👋
      </h1>

      <p className="text-slate-400 mb-10">
        Tu centro de inteligencia para crear contenido rentable.
      </p>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-900 rounded-2xl p-6">
          <p className="text-slate-400">
            Ingresos estimados
          </p>

          <h2 className="text-4xl font-bold text-green-400 mt-4">
            $1.240
          </h2>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          <p className="text-slate-400">
            Tendencias
          </p>

          <h2 className="text-4xl font-bold text-blue-400 mt-4">
            247
          </h2>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          <p className="text-slate-400">
            AI Slop
          </p>

          <h2 className="text-4xl font-bold text-green-400 mt-4">
            3%
          </h2>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          <p className="text-slate-400">
            Publicaciones
          </p>

          <h2 className="text-4xl font-bold text-purple-400 mt-4">
            12
          </h2>
        </div>

      </div>
    </>
  );
}