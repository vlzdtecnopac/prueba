import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as taskActions from '../actions/task.action';
import {TaskService} from "../../service/task.service";
import {catchError, map, mergeMap, of} from "rxjs";
import {Injectable} from "@angular/core";

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
              map(tasks => taskActions.cargarTasksSuccess({tasks: tasks.reverse()})),
              catchError( err => of(taskActions.cargarTasksError({ tasks: err })) )
            ),

          )
      ),
    );



}
