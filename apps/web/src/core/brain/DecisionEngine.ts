export interface AgentTask {

  agent: string;

  priority: number;

  parallel: boolean;

}

export class DecisionEngine {

  decide(prompt: string): AgentTask[] {

    const text = prompt.toLowerCase();

    const tasks: AgentTask[] = [];

    if (

      text.includes("restaurante") ||

      text.includes("pizza") ||

      text.includes("hamburguesa") ||

      text.includes("café") ||

      text.includes("comida")

    ) {

      tasks.push(

        {

          agent: "market",

          priority: 1,

          parallel: true

        },

        {

          agent: "finance",

          priority: 2,

          parallel: true

        },

        {

          agent: "branding",

          priority: 3,

          parallel: true

        }

      );

    }

    if (

      text.includes("software") ||

      text.includes("app") ||

      text.includes("ia") ||

      text.includes("saas")

    ) {

      tasks.push(

        {

          agent: "technology",

          priority: 1,

          parallel: true

        },

        {

          agent: "market",

          priority: 2,

          parallel: true

        },

        {

          agent: "finance",

          priority: 3,

          parallel: true

        }

      );

    }

    if (

      text.includes("perfume") ||

      text.includes("jabón") ||

      text.includes("cosmético")

    ) {

      tasks.push(

        {

          agent: "branding",

          priority: 1,

          parallel: true

        },

        {

          agent: "market",

          priority: 2,

          parallel: true

        },

        {

          agent: "finance",

          priority: 3,

          parallel: true

        }

      );

    }

    if (tasks.length === 0) {

      tasks.push({

        agent: "market",

        priority: 1,

        parallel: true

      });

    }

    return tasks.sort((a, b) => a.priority - b.priority);

  }

}

export const decisionEngine = new DecisionEngine();