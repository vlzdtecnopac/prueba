import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
  task: reducers.TaskState,
}


export const appReducers: ActionReducerMap<AppState> = {
  task: reducers.taskReducer,
}
