import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TaskInterface} from "../interface/associatedTask.interface";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'https://my-json-server.typicode.com/vlzdtecnopac/prueba/tasks';

  constructor(private http: HttpClient) {}

  createTask(post: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.apiUrl, post);
  }
}
