import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [result, setResult] = useState<any>(null);

  async function run() {
    const res = await fetch("http://localhost:3000/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task })
    });

    setResult(await res.json());
  }

  return (
    <div>
      <h1>NEXUS AI OS</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={run}>Run AI</button>

      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
