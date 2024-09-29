import {TaskInterface} from "../../interface/associatedTask.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {cargarTask, cargarTasksSuccess} from "../actions"

export interface TaskState {
  tasks: TaskInterface[],
  loading: boolean,
  error: any
}

export const taskInitialState: TaskState = {
  tasks: [],
  loading: false,
  error: null
}

const _taskReducer = createReducer(taskInitialState,
  on(cargarTask, state => ({...state, loading: true})),

  on( cargarTasksSuccess, (state, { tasks }) => ({
    ...state,
    loading: false,
    tasks: [ ...tasks ]
  })),

)

export function taskReducer(state: TaskState | undefined, action: Action<string>) {
  return _taskReducer(state, action);
}
