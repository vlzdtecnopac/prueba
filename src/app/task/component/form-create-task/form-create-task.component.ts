import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AssociatedPeopleComponent} from "../associated-people/associated-people.component";
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {Observable} from "rxjs";
import {AssociatedTaskInterface} from "../../../interface/associatedTask.interface";
import {select, Store} from "@ngrx/store";
import {TaskStateEnum} from "../../../enum/task-state.enum";
import {AppState} from "../../../store/app.reducers";
import {TaskService} from "../../../service/task.service";
import {NgZorroAntdModule} from "../../../ng-zorro-antd.module";

@Component({
  selector: 'app-form-create-task',
  standalone: true,
  imports: [CommonModule, AssociatedPeopleComponent, FormsModule, ReactiveFormsModule, NgZorroAntdModule],
  templateUrl: './form-create-task.component.html',
  styleUrls: ['./form-create-task.component.scss']
})
export class FormCreateTaskComponent {
  usersTask$: Observable<AssociatedTaskInterface[]> | undefined;

  validateForm: FormGroup<{
    nameTask: FormControl<string>;
    dateTask: FormControl<string>;
  }>;

  submitForm(): void {
    if (this.validateForm.valid) {
      this.usersTask$ = this.store.pipe(select(state => state.taskUsers.usersTask))
      this.usersTask$.subscribe((usersTask)=>{
        if(usersTask.length > 0){
          this.taskService.createTask({
            nameTask: this.validateForm.get("nameTask")?.value!,
            dateTask: this.validateForm.get("dateTask")?.value!,
            associatedTasks: usersTask,
            state: TaskStateEnum.pending
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
