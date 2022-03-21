import { useRef } from "react";
import { useInstance } from "react-tidy";
import { TasksCollection } from "./classes";
import { Todo } from "./components";

export default function App() {
  const tasks = useInstance(TasksCollection);
  const input = useRef<HTMLInputElement>(null);
  const addTask = () => {
    const value = input.current!.value || "";
    tasks.add(value);
    input.current!.value = "";
  };

  return (
    <div>
      <div>
        <input ref={input} type="text" />
        <button onClick={addTask}>Add</button>
      </div>
      {tasks.all().map((task) => (
        <Todo key={task.id} task={task} />
      ))}
    </div>
  );
}
