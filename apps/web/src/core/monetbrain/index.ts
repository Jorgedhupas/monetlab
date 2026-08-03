export interface BrainAnalysis {

    score:number;

    market:string;

    competition:string;

    income:string;

    aiRisk:string;

    platforms:string[];

    ideas:string[];

}

export function monetBrain(prompt:string):BrainAnalysis{

    const text=prompt.toLowerCase();

    if(text.includes("café") || text.includes("cafe")){

        return{

            score:96,

            market:"Global",

            competition:"Media",

            income:"$$$$",

            aiRisk:"Muy Bajo",

            platforms:[
                "YouTube",
                "TikTok",
                "Instagram"
            ],

            ideas:[
                "Marca Premium",
                "Canal de recetas",
                "Curso",
                "Afiliados",
                "Marketplace"
            ]

        }

    }

    if(text.includes("jabón") || text.includes("jabon")){

        return{

            score:92,

            market:"Latinoamérica",

            competition:"Media",

            income:"$$$",

            aiRisk:"Bajo",

            platforms:[
                "TikTok",
                "Instagram",
                "Pinterest"
            ],

            ideas:[
                "Marca Kunu",
                "Hotel Supply",
                "Marketplace",
                "YouTube"
            ]

        }

    }

    return{

        score:80,

        market:"General",

        competition:"Media",

        income:"$$",

        aiRisk:"Medio",

        platforms:[
            "YouTube"
        ],

        ideas:[
            "Contenido",
            "SEO",
            "Curso"
        ]

    }

}