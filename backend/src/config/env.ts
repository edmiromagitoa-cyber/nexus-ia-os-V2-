import dotenv from "dotenv";
dotenv.config();

export const env = {
  OPENAI_API_KEY: process.env.OPENAI_API_KEY!,
  DATABASE_URL: process.env.DATABASE_URL!
};
