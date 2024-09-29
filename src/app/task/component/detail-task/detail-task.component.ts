import {Component, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule} from "../../../ng-zorro-antd.module";
import {TaskService} from "../../../service/task.service";
import {TaskInterface} from "../../../interface/associatedTask.interface";
import {TaskStateEnum} from "../../../enum/task-state.enum";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducers";
import {cargarTask} from "../../../store/actions";

@Component({
  selector: 'app-detail-task',
  standalone: true,
  imports: [CommonModule, NgZorroAntdModule],
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.scss']
})
export class DetailTaskComponents{

  @Input() idTask: number | undefined;

  taskDetail: TaskInterface | undefined;

  isVisible = false;
  isConfirmLoading = false;

  constructor(private taskService: TaskService,
              private store: Store<AppState>) {}

  getStateComplete(){
    return TaskStateEnum.completed
  }

  showModal(): void {
    this.taskService.getOneTask(this.idTask)
      .subscribe(item => {
        this.taskDetail = item;
        this.isVisible = true;
      })

  }

  handleOk(_id: number | undefined): void {
    this.isConfirmLoading = true;
    this.taskService.getUpdateTask(_id)
      .subscribe(result => {
      this.isVisible = false;
      this.isConfirmLoading = false;
      this.store.dispatch(cargarTask())
    })

  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
