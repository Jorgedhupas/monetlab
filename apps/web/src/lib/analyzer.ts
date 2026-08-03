export type Resultado = {
  tendencia: number;
  ingresos: string;
  competencia: string;
  crecimiento: string;
  ideas: string[];
};

export function analizarIdeaIA(texto: string): Resultado {

  const idea = texto.toLowerCase().trim();

  if (idea.includes("café") || idea.includes("cafe")) {

    return {

      tendencia: 96,

      ingresos: "Muy Alto",

      competencia: "Media",

      crecimiento: "+220%",

      ideas: [

        "Canal de YouTube",

        "Marca de café",

        "Curso de Barismo",

        "TikTok",

        "Podcast",

        "Blog SEO"

      ]

    };

  }

  if (idea.includes("jabón") || idea.includes("jabon")) {

    return {

      tendencia: 91,

      ingresos: "Alto",

      competencia: "Media",

      crecimiento: "+165%",

      ideas: [

        "Marca artesanal",

        "Marketplace",

        "TikTok",

        "Instagram",

        "Curso Online",

        "YouTube"

      ]

    };

  }

  if (
    idea.includes("ia") ||
    idea.includes("inteligencia")
  ) {

    return {

      tendencia: 99,

      ingresos: "Excelente",

      competencia: "Alta",

      crecimiento: "+420%",

      ideas: [

        "SaaS",

        "Consultoría",

        "Cursos",

        "Newsletter",

        "YouTube",

        "Plantillas"

      ]

    };

  }

  return {

    tendencia: 80,

    ingresos: "Medio",

    competencia: "Media",

    crecimiento: "+90%",

    ideas: [

      "Crear contenido",

      "Blog",

      "YouTube",

      "Instagram"

    ]

  };

}