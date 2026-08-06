export class JsonResponseParser {

  clean(text: string): string {

    return text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

  }

  parse(text: string): unknown {

    const clean = this.clean(text);

    return JSON.parse(clean);

  }

}

export const jsonResponseParser = new JsonResponseParser();