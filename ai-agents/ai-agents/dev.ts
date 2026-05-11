import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export class DevAgent {
  async execute(plan: string) {
    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Generate production TypeScript code." },
        { role: "user", content: plan }
      ]
    });

    return res.choices[0].message.content;
  }
}
