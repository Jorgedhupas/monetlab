import type {

  BusinessModel,

  BusinessModelResult

} from "../models/BusinessModelResult";

export class BusinessModelEngine {

  analyze(category: string): BusinessModelResult {

    let models: BusinessModel[] = [];

    switch (category) {

      case "cafe":

        models = [

          {

            name: "E-commerce Premium",

            score: 97,

            recurringRevenue: true,

            scalability: "Alta",

            complexity: "Media",

            description:
              "Venta directa mediante una tienda online."

          },

          {

            name: "Suscripción Mensual",

            score: 95,

            recurringRevenue: true,

            scalability: "Muy Alta",

            complexity: "Media",

            description:
              "Envío periódico de café a clientes."

          },

          {

            name: "Exportación",

            score: 91,

            recurringRevenue: false,

            scalability: "Alta",

            complexity: "Alta",

            description:
              "Venta internacional de café premium."

          },

          {

            name: "Franquicias",

            score: 87,

            recurringRevenue: false,

            scalability: "Muy Alta",

            complexity: "Alta",

            description:
              "Expandir cafeterías mediante franquicias."

          },

          {

            name: "Marketplace",

            score: 84,

            recurringRevenue: true,

            scalability: "Muy Alta",

            complexity: "Alta",

            description:
              "Agrupar productores y vender en una sola plataforma."

          }

        ];

        break;

      case "ia":

        models = [

          {

            name: "SaaS",

            score: 99,

            recurringRevenue: true,

            scalability: "Muy Alta",

            complexity: "Alta",

            description:
              "Software vendido mediante suscripción."

          },

          {

            name: "API",

            score: 94,

            recurringRevenue: true,

            scalability: "Muy Alta",

            complexity: "Alta",

            description:
              "Cobro por consumo de API."

          },

          {

            name: "Licencias",

            score: 90,

            recurringRevenue: false,

            scalability: "Alta",

            complexity: "Media",

            description:
              "Licenciar la tecnología."

          }

        ];

        break;

      default:

        models = [

          {

            name: "Venta Directa",

            score: 80,

            recurringRevenue: false,

            scalability: "Media",

            complexity: "Media",

            description:
              "Modelo tradicional."

          }

        ];

    }

    return {

      recommended: models[0],

      alternatives: models.slice(1)

    };

  }

}