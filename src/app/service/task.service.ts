import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TaskInterface} from "../interface/associatedTask.interface";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'https://run.mocky.io/v3/8945ab4a-627a-4507-8727-7baa1bb2fc6d';

  constructor(private http: HttpClient) {}

  createTask(post: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.apiUrl, post);
  }
}
