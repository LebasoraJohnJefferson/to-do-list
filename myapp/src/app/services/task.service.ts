import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {Task} from '../Task';

const httpOption ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks';
  constructor(private http:HttpClient) {
  }

  getTasks():Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task:Task): Observable<Task>{
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<Task>(url,task,httpOption)
  }

  

}