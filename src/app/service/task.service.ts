import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {TaskInterface} from "../interface/associatedTask.interface";
import {TaskStateEnum} from "../enum/task-state.enum";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = environment.apiUrl;
  //private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  createTask(post: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.apiUrl, post);
  }

  getTask() {
    return this.http.get<TaskInterface[]>(this.apiUrl).pipe(
      map( resp => resp)
    )
  }

  getOneTask(_id: number | undefined): Observable<TaskInterface> {
    return this.http.get<TaskInterface>(`${this.apiUrl}/${_id}`)
  }

  getUpdateTask(_id: number | undefined): Observable<TaskInterface> {
    return this.http.patch<TaskInterface>(`${this.apiUrl}/${_id}`, {"state": TaskStateEnum.completed})
  }
}
