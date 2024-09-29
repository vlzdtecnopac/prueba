import { createReducer, on } from '@ngrx/store';
import {AssociatedTaskInterface} from "../../interface/associatedTask.interface";
import {create} from "../actions"

export interface TaskState {
  usersTask: AssociatedTaskInterface[];
}


export const taskInitialState: TaskState = {
  usersTask: [],
};

const _taskReducer = createReducer(
  taskInitialState,
  on(create, (state, { payload }) => ({
    ...state,
    usersTask: payload
  }))
);

export function taskReducer(state: TaskState | undefined, action: any) {
  return _taskReducer(state, action);
}
