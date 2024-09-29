import {TaskStateEnum} from "../enum/task-state.enum";

export interface TaskInterface {
  id?: number;
  nameTask: string;
  dateTask: string;
  associatedTasks: AssociatedTaskInterface[];
  state: TaskStateEnum
}

export interface AssociatedTaskInterface {
  nameAge:  number;
  nameUser: string;
  skills:   string[];
}
