import { createAction, props } from '@ngrx/store';
import {AssociatedTaskInterface} from "../../interface/associatedTask.interface";

export const create = createAction(
  '[TODO] Add Associated Task',
  props<{ payload: AssociatedTaskInterface[] }>()
);
