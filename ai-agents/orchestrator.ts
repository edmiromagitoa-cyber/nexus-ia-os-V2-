import { PlannerAgent } from "./planner";
import { DevAgent } from "./dev";
import { DesignAgent } from "./design";
import { Memory } from "../database/memory";

export class Orchestrator {
  planner = new PlannerAgent();
  dev = new DevAgent();
  design = new DesignAgent();
  memory = new Memory();

  async run(task: string) {
    this.memory.save("last_task", task);

    const plan = await this.planner.execute(task);
    const code = await this.dev.execute(plan);
    const ui = await this.design.execute(plan);

    const result = { plan, code, ui };

    this.memory.save("last_result", result);

    return result;
  }
}
