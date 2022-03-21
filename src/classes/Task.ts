import { TasksCollection } from "./TasksCollection";

export class Task {
  protected collection: TasksCollection;
  public id: number;
  public content: string;
  public done = false;

  public constructor(collection: TasksCollection, id: number, content = "") {
    this.collection = collection;
    this.id = id;
    this.content = content;
  }

  public toggle() {
    this.done = !this.done;
  }

  public remove() {
    this.collection.remove(this.id);
  }
}
