"use client";

import { useState } from "react";
import { analizarIdeaIA } from "@/lib/analyzer";
import type { Resultado } from "@/lib/analyzer";

export default function TrendLab() {
  const [idea, setIdea] = useState("");
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [loading, setLoading] = useState(false);

  const analizarIdea = async () => {
    if (!idea.trim()) return;

    setLoading(true);

    try {
      const respuesta = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idea,
        }),
      });

      const data = await respuesta.json();

      console.log("Respuesta del servidor:", data);

      setResultado(analizarIdeaIA(idea));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        📈 TrendLab
      </h1>

      <p className="text-slate-400 mb-8">
        Descubre oportunidades de negocio impulsadas por Inteligencia Artificial.
      </p>

      <div className="bg-slate-900 rounded-2xl p-8">

        <label className="block text-lg mb-4">
          ¿Qué quieres analizar?
        </label>

        <input
          type="text"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Ej: Café, Jabón, IA, Turismo..."
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
        />

        <button
          onClick={analizarIdea}
          disabled={loading}
          className="mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 px-8 py-4 rounded-xl font-semibold"
        >
          {loading ? "Analizando..." : "Analizar"}
        </button>

        {resultado && (

          <div className="mt-10 bg-slate-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-6">
              Resultado del análisis
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-slate-900 p-5 rounded-xl">
                <p className="text-slate-400">Tendencia</p>
                <p className="text-3xl font-bold text-blue-400">
                  {resultado.tendencia}%
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl">
                <p className="text-slate-400">Ingresos</p>
                <p className="text-3xl font-bold text-green-400">
                  {resultado.ingresos}
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl">
                <p className="text-slate-400">Competencia</p>
                <p className="text-3xl font-bold text-yellow-400">
                  {resultado.competencia}
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl">
                <p className="text-slate-400">Crecimiento</p>
                <p className="text-3xl font-bold text-purple-400">
                  {resultado.crecimiento}
                </p>
              </div>

            </div>

            <div className="mt-8">

              <h3 className="text-xl font-bold mb-4">
                Ideas para monetizar
              </h3>

              <ul className="grid md:grid-cols-2 gap-3">

                {resultado.ideas.map((item, index) => (

                  <li
                    key={index}
                    className="bg-slate-900 p-4 rounded-xl"
                  >
                    ✅ {item}
                  </li>

                ))}

              </ul>

            </div>

          </div>

        )}

      </div>

    </main>
  );
}