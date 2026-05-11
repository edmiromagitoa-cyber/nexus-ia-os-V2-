import { Orchestrator } from "../ai-agents/orchestrator";

test("runs task", async () => {
  const o = new Orchestrator();
  const res = await o.run("create todo app");

  expect(res).toBeDefined();
});
