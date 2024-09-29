import { Component } from '@angular/core';

import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators
} from '@angular/forms';
import {select, Store} from "@ngrx/store";
import {AppState} from "../store/app.reducers";
import {Observable} from "rxjs";
import {AssociatedTaskInterface, TaskInterface} from "../interface/associatedTask.interface";
import {TaskService} from "../service/task.service";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  usersTask$: Observable<AssociatedTaskInterface[]> | undefined;

  validateForm: FormGroup<{
    nameTask: FormControl<string>;
    dateTask: FormControl<string>;
  }>;

  submitForm(): void {
    if (this.validateForm.valid) {
      this.usersTask$ = this.store.pipe(select(state => state.task.usersTask))
      this.usersTask$.subscribe((usersTask)=>{
        if(usersTask.length > 0){
          this.taskService.createTask({
            nameTask: this.validateForm.get("nameTask")?.value!,
            dateTask: this.validateForm.get("dateTask")?.value!,
            associatedTasks: usersTask
          }).subscribe(console.log)
        }
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  constructor(private fb: NonNullableFormBuilder,
              private store: Store<AppState>,
              private taskService: TaskService) {
    this.validateForm = this.fb.group({
      nameTask: ['', [Validators.required, Validators.maxLength(12)]],
      dateTask: ['', [Validators.required]]
    });
  }
}





