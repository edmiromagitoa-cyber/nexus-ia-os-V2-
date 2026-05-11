import express from "express";
import cors from "cors";
import { Orchestrator } from "../ai-agents/orchestrator";

const app = express();
app.use(cors());
app.use(express.json());

const orchestrator = new Orchestrator();

app.post("/task", async (req, res) => {
  const result = await orchestrator.run(req.body.task);
  res.json(result);
});

app.listen(3000, () => {
  console.log("🚀 Backend running");
});
