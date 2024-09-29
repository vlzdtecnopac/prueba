import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducers";
import {TaskInterface} from "../../../interface/associatedTask.interface";
import {cargarTask} from "../../../store/actions";
import {Router} from "@angular/router";
import {TaskStateEnum} from "../../../enum/task-state.enum";

export interface TreeNodeInterface {
  key: string;
  name: string;
  age?: number;
  level?: number;
  expand?: boolean;
  address?: string;
  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
}

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {

  listTasks: TaskInterface[] = [];
  selectedValue = null;
  isSpinning: boolean = true;
  error: any;

  constructor(private router: Router,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {

    this.store.dispatch(cargarTask())

    this.store.select('tasks').subscribe(({tasks, loading, error}) => {
      if(!loading){
        this.listTasks = tasks;
        this.isSpinning = loading
      }
    });

  }

  getStateComplete() {
    return TaskStateEnum.completed
  }

  filterTasks(selectedValue: string) {
    this.isSpinning = true;
    this.store.dispatch(cargarTask())
    if (selectedValue) {
      this.store.select('tasks').subscribe(({tasks, loading, error}) => {
        this.listTasks = tasks.filter(task => task.state === selectedValue);
        this.isSpinning = loading;
        this.error = error;
      });
    } else {
      this.store.select('tasks').subscribe(({tasks, loading, error}) => {
        this.listTasks = tasks;
        this.isSpinning = loading;
        this.error = error;
      });
    }
  }


  navigateToCreateTask() {
    this.router.navigate(['/create-task']);
  }

}
