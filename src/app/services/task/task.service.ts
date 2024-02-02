import { Injectable } from '@angular/core';
import {Task, TaskList} from "../../interfaces/task";
import * as constants from "../../helpers/contants";
import { HttpClient } from '@angular/common/http';
import { Observable, catchError,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  private baseUrl : string = `${constants.baseApiUrl}/task`

  getAllTasks(): Observable<TaskList> {
    return this.http.get<TaskList>(this.baseUrl)
  }
}
