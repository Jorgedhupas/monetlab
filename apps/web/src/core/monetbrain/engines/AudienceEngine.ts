import type { AudienceResult } from "../models/AudienceResult";

export class AudienceEngine {

  analyze(category: string): AudienceResult {

    switch (category) {

      case "cafe":

        return {

          primaryAudience: "Amantes del café premium",

          ageRange: "25 - 45 años",

          interests: [
            "Café de especialidad",
            "Emprendimiento",
            "Gastronomía",
            "Viajes"
          ],

          painPoints: [
            "No encuentran café de alta calidad.",
            "Buscan experiencias auténticas."
          ],

          preferredPlatforms: [
            "Instagram",
            "TikTok",
            "YouTube"
          ],

          buyingPower: "Media - Alta"

        };

      case "soap":

        return {

          primaryAudience: "Consumidores de productos naturales",

          ageRange: "20 - 50 años",

          interests: [
            "Belleza",
            "Skincare",
            "Productos artesanales"
          ],

          painPoints: [
            "Piel sensible",
            "Productos con químicos agresivos"
          ],

          preferredPlatforms: [
            "Instagram",
            "Pinterest",
            "TikTok"
          ],

          buyingPower: "Media"

        };

      case "ai":

        return {

          primaryAudience: "Profesionales y emprendedores",

          ageRange: "22 - 45 años",

          interests: [
            "Tecnología",
            "Automatización",
            "Productividad"
          ],

          painPoints: [
            "Poco tiempo",
            "Necesidad de escalar procesos"
          ],

          preferredPlatforms: [
            "LinkedIn",
            "YouTube",
            "X"
          ],

          buyingPower: "Alta"

        };

      default:

        return {

          primaryAudience: "Mercado general",

          ageRange: "18 - 60 años",

          interests: [
            "Consumo general"
          ],

          painPoints: [
            "Resolver una necesidad cotidiana"
          ],

          preferredPlatforms: [
            "YouTube"
          ],

          buyingPower: "Media"

        };

    }

  }

}