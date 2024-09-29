import {createAction, props} from "@ngrx/store";
import {TaskInterface} from "../../interface/associatedTask.interface";


export const cargarTask = createAction('[Taks] Cargar Task');

export const cargarTasksSuccess = createAction(
  '[Task] Cargar Task Success',
  props<{ tasks: TaskInterface[] }>()
);

export const cargarTasksError = createAction(
  '[Usuarios] Cargar Tasks Error',
  props<{ tasks: any }>()
);

