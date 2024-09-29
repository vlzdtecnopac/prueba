import { createReducer, on } from '@ngrx/store';
import {AssociatedTaskInterface} from "../../interface/associatedTask.interface";
import {create} from "../actions"

export interface TaskStateAssociated {
  usersTask: AssociatedTaskInterface[];
}

export const taskInitialAssociatedState: TaskStateAssociated = {
  usersTask: [],
};

const _taskReducer = createReducer(
  taskInitialAssociatedState,
  on(create, (state, { payload }) => ({
    ...state,
    usersTask: payload
  }))
);

export function taskAssociatedReducer(state: TaskStateAssociated | undefined, action: any) {
  return _taskReducer(state, action);
}
