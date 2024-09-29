import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as taskActions from '../actions/task.action';
import {TaskService} from "../../service/task.service";
import {map, mergeMap} from "rxjs";
import {Injectable} from "@angular/core";
import {TaskStateEnum} from "../../enum/task-state.enum";

@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ){}

  cargarTask$ = createEffect(
    () => this.actions$.pipe(
      ofType( taskActions.cargarTask ),
      mergeMap(
        () => this.taskService.getTask()
          .pipe(
            map(tasks =>  taskActions.cargarTasksSuccess({tasks})),
          )
      ),
    )
  );
}
