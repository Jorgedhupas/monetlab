import { AIProvider } from "./AIProvider";
import { OpenAIProvider } from "./OpenAIProvider";

export class AIProviderFactory {

  static create(): AIProvider {

    return new OpenAIProvider();

  }

}