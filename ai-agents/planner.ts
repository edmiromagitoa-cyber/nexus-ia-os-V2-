import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export class PlannerAgent {
  async execute(task: string) {
    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a system architect." },
        { role: "user", content: task }
      ]
    });

    return res.choices[0].message.content;
  }
}
