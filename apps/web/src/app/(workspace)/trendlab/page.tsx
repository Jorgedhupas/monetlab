"use client";

import { useState } from "react";

import type { AnalysisResult } from "@/types";

import Section from "@/app/components/trendlab/Section";

import ScoreCard from "@/app/components/trendlab/ScoreCard";
import ExecutiveSummaryCard from "@/app/components/trendlab/ExecutiveSummaryCard";

import MarketCard from "@/app/components/trendlab/MarketCard";
import CompetitionCard from "@/app/components/trendlab/CompetitionCard";

import BusinessModelCard from "@/app/components/trendlab/BusinessModelCard";
import PricingCard from "@/app/components/trendlab/PricingCard";

import FinanceCard from "@/app/components/trendlab/FinanceCard";

import GrowthCard from "@/app/components/trendlab/GrowthCard";
import PlatformsCard from "@/app/components/trendlab/PlatformsCard";

import TimelineCard from "@/app/components/trendlab/TimelineCard";
import IdeasCard from "@/app/components/trendlab/IdeasCard";

export default function TrendLab() {

  const [idea, setIdea] = useState("");

  const [resultado, setResultado] =
    useState<AnalysisResult | null>(null);

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

      const data: AnalysisResult =
        await response.json();

      console.log(data);

      setResultado(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  return (

    <main className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-8 py-10">

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
            placeholder="Describe tu idea de negocio..."
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4"
          />

          <button
            onClick={analizarIdea}
            disabled={loading}
            className="mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold disabled:bg-slate-700"
          >
            {loading
              ? "Analizando..."
              : "Analizar Idea"}
          </button>

        </div>

        {resultado && (

          <div className="mt-14 space-y-16">

            <Section
              title="Resumen Ejecutivo"
              subtitle="Visión general del análisis."
            >

              <ScoreCard
                score={resultado.score}
              />

              <ExecutiveSummaryCard
                score={resultado.score}
                confidence={resultado.confidence}
                executiveSummary={resultado.executiveSummary ?? ""}
                recommendation={resultado.recommendation ?? ""}
                finalDecision={resultado.finalDecision ?? ""}
              />

            </Section>

            <Section
              title="Mercado"
              subtitle="Análisis del tamaño del mercado y del entorno competitivo."
            >

              <MarketCard
                market={resultado.market}
              />

              <CompetitionCard
                competition={resultado.competition}
              />

            </Section>

            <Section
              title="Modelo de Negocio"
              subtitle="Cómo monetizar la oportunidad."
            >

              <BusinessModelCard
                recommended={resultado.businessModel.recommended}
                alternatives={resultado.businessModel.alternatives}
              />

              <PricingCard
                pricing={resultado.pricing}
              />

            </Section>

            <Section
              title="Finanzas"
              subtitle="Indicadores financieros."
            >

              <FinanceCard
                finance={resultado.finance}
              />

            </Section>

            <Section
              title="Crecimiento"
              subtitle="Escalabilidad y canales."
            >

              <GrowthCard
                growth={resultado.growth}
              />

              <PlatformsCard
                platforms={resultado.platforms}
              />

            </Section>

            <Section
              title="Plan de Ejecución"
              subtitle="Primeros pasos recomendados."
            >

              <TimelineCard
                timeline={resultado.timeline}
              />

              <IdeasCard
                ideas={resultado.ideas}
              />

            </Section>

          </div>

        )}

      </div>

    </main>

  );

}