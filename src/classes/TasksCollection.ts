import { Task } from "./Task";

export class TasksCollection {
  protected lastId = 0;
  protected tasks: Task[] = [];

  public all() {
    return this.tasks;
  }

  public add(content: string) {
    const id = ++this.lastId;
    // eslint-disable-next-line
    this.tasks.push(new Task(this, id, content));
  }

  public remove(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
