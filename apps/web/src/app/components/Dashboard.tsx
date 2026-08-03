import { dashboardData } from "../../data/dashboard";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 p-10 bg-slate-950 min-h-screen text-white">

        <h1 className="text-4xl font-bold mb-2">
  Bienvenido {dashboardData.user.name} 👋
</h1>

        <p className="text-slate-400 mb-10">
          Tu centro de inteligencia para crear contenido rentable.
        </p>

       <div className="grid md:grid-cols-4 gap-6">

  {dashboardData.stats.map((stat) => (

    <div
      key={stat.title}
      className="bg-slate-900 rounded-2xl p-6"
    >

      <h3 className="text-slate-400">

        {stat.title}

      </h3>

      <p className={`text-3xl font-bold mt-4 ${stat.color}`}>

        {stat.value}

      </p>

    </div>

  ))}

</div>

      </main>

    </div>
  );
}