export interface BrainRequest {
  idea: string;
  category?: string;
  objective?: string;
}


export interface BrainResponse {

  score: number;

  marketPotential: string;

  recommendation: string;

}


export class BrainService {


  static analyze(
    request: BrainRequest
  ): BrainResponse {


    const score =
      Math.floor(Math.random() * 40) + 60;


    return {

      score,

      marketPotential:
        score > 80
          ? "Alto potencial"
          : "Potencial medio",


      recommendation:
        "La idea debe validarse con tendencias, audiencia y estrategia de monetización."

    };

  }

}