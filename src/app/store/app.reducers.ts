import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
  tasks: reducers.TaskState,
  taskUsers: reducers.TaskStateAssociated,
}


export const appReducers: ActionReducerMap<AppState> = {
  tasks: reducers.taskReducer,
  taskUsers: reducers.taskAssociatedReducer,
}
