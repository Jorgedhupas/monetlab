import { MonetBrain } from "./MonetBrain";
import type { AnalysisResult } from "./models/AnalysisResult";

const brain = new MonetBrain();

export type BrainAnalysis = AnalysisResult;

export function monetBrain(prompt: string): BrainAnalysis {
  return brain.analyze(prompt);
}