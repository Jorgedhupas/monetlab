export type TimelineStep = {

  period: string;

  action: string;

};

export class TimelineEngine {

  analyze(text: string): TimelineStep[] {

    const idea = text.toLowerCase();

    if (
      idea.includes("café") ||
      idea.includes("cafe")
    ) {

      return [

        {
          period: "Día 1",
          action: "Validar mercado del café premium",
        },

        {
          period: "Semana 1",
          action: "Crear nombre y marca",
        },

        {
          period: "Semana 2",
          action: "Abrir TikTok e Instagram",
        },

        {
          period: "Semana 3",
          action: "Publicar 15 videos",
        },

        {
          period: "Mes 2",
          action: "Lanzar tienda online",
        },

        {
          period: "Mes 3",
          action: "Escalar con publicidad",
        },

      ];

    }

    return [

      {
        period: "Día 1",
        action: "Validar el problema",
      },

      {
        period: "Semana 1",
        action: "Construir MVP",
      },

      {
        period: "Semana 2",
        action: "Conseguir primeros usuarios",
      },

      {
        period: "Mes 1",
        action: "Monetizar",
      },

    ];

  }

}