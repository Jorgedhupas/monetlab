export default function TopBar() {
  return (
    <header className="h-20 border-b border-slate-800 flex items-center justify-between px-10">

      <div>

        <h2 className="text-2xl font-bold">
          MonetLab AI
        </h2>

        <p className="text-slate-400 text-sm">
          Centro de Inteligencia Empresarial
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="bg-slate-800 px-4 py-2 rounded-xl">
          🔔
        </div>

        <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">
          J
        </div>

      </div>

    </header>
  );
}