import {Component, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule} from "../../../ng-zorro-antd.module";
import {NzModalService} from "ng-zorro-antd/modal";
import {TaskService} from "../../../service/task.service";
import {TaskInterface} from "../../../interface/associatedTask.interface";

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

  constructor(private modalService: NzModalService,
              private taskService: TaskService) {}

  showModal1(): void {
    this.taskService.getOneTask(this.idTask)
      .subscribe(item => {
        this.taskDetail = item;
        this.isVisible = true;
      })

  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
