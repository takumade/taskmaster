import Task from "./task";

export default interface Column {
  id: string;
  title: string;
  tasks: Task[];
}
