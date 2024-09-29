export interface TaskInterface {
  nameTask: string;
  dateTask: string;
  associatedTasks: AssociatedTaskInterface[];
}

export interface AssociatedTaskInterface {
  nameAge:  number;
  nameUser: string;
  skills:   string[];
}
