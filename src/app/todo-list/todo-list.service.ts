import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { TodoCard } from './todo-card/todo-card.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoCardService {
  todoCards$ = new BehaviorSubject(null)

  constructor(private http: HttpClient) {}

  getTodoCards(): Observable<TodoCard[]> {
    return this.http.get<TodoCard[]>(
      'https://run.mocky.io/v3/291a12fb-9318-4234-8ecd-f9c550faa14c'
    );
  }
}
