export default function Sidebar() {
  const items = [
    "🏠 Dashboard",
    "📈 TrendLab",
    "🤖 MonetCore",
    "🛡 MonetGuard",
    "📅 Planner",
    "🧬 MonetDNA",
    "📊 MonetMind",
    "⚙ Configuración",
  ];

  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen p-6">

      <h2 className="text-2xl font-bold text-blue-500 mb-10">
        MonetLab
      </h2>

      <nav className="space-y-3">

        {items.map((item) => (

          <button
            key={item}
            className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            {item}
          </button>

        ))}

      </nav>

    </aside>
  );
}