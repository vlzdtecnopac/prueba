import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {TaskInterface} from "../interface/associatedTask.interface";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //private apiUrl = 'https://my-json-server.typicode.com/vlzdtecnopac/prueba/tasks';
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  createTask(post: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.apiUrl, post);
  }

  getTask() {
    return this.http.get<TaskInterface[]>(this.apiUrl).pipe(
      map( resp => resp)
    )
  }
}
