"use client";

import { useState } from "react";

import ScoreCard from "@/app/components/trendlab/ScoreCard";
import MetricsGrid from "@/app/components/trendlab/MetricsGrid";
import PlatformsCard from "@/app/components/trendlab/PlatformsCard";
import IdeasCard from "@/app/components/trendlab/IdeasCard";
import TimelineCard from "@/app/components/trendlab/TimelineCard";

type TimelineStep = {
  period: string;
  action: string;
};

type Resultado = {
  score: number;
  trend: string;
  confidence: number;
  market: string;
  competition: string;
  income: string;
  aiRisk: string;
  originality: number;
  recommendation: string;
  investmentLevel: string;
  estimatedTime: string;
  platforms: string[];
  ideas: string[];
  timeline: TimelineStep[];
};

export default function TrendLab() {

  const [idea, setIdea] = useState("");
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [loading, setLoading] = useState(false);

  async function analizarIdea() {

    if (!idea.trim()) return;

    setLoading(true);

    try {

      const response = await fetch("/api/analyze", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          idea,
        }),

      });

      const data: Resultado = await response.json();

      console.log("Resultado recibido:", data);

      setResultado(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  return (

    <main className="min-h-screen bg-slate-950 text-white p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black">
          📈 TrendLab
        </h1>

        <p className="text-slate-400 mt-3 mb-10">
          Descubre oportunidades de negocio impulsadas por MonetBrain.
        </p>

        <div className="bg-slate-900 rounded-2xl p-8">

          <input
            type="text"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Ej: Café Premium, Jabón artesanal, IA..."
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4"
          />

          <button
            onClick={analizarIdea}
            disabled={loading}
            className="mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold disabled:bg-slate-700"
          >
            {loading ? "Analizando..." : "Analizar"}
          </button>

        </div>

        {resultado && (

          <div className="mt-10 space-y-8">

            <ScoreCard
              score={resultado.score}
            />

            <MetricsGrid
              market={resultado.market}
              competition={resultado.competition}
              income={resultado.income}
              aiRisk={resultado.aiRisk}
              originality={resultado.originality}
              recommendation={resultado.recommendation}
              investmentLevel={resultado.investmentLevel}
              estimatedTime={resultado.estimatedTime}
            />

            <PlatformsCard
              platforms={resultado.platforms}
            />

            <IdeasCard
              ideas={resultado.ideas}
            />

            <TimelineCard
              timeline={resultado.timeline}
            />

          </div>

        )}

      </div>

    </main>

  );

}