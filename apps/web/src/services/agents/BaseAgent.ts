export abstract class BaseAgent {

    abstract execute(prompt: string): Promise<any>;

}