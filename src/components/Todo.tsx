import { Task } from "../classes";

type Props = {
  task: Task;
};

export function Todo({ task }: Props) {
  return (
    <div>
      <input
        type="checkbox"
        readOnly
        checked={task.done}
        onClick={() => task.toggle()}
      />{" "}
      {task.content} <button onClick={() => task.remove()}>X</button>
    </div>
  );
}
