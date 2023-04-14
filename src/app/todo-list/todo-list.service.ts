import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoCard } from './todo-card/todo-card.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoCardService {
  constructor(private http: HttpClient) {}

  getTodoCards(): Observable<TodoCard[]> {
    return this.http.get<TodoCard[]>(
      'https://run.mocky.io/v3/d099cc02-a41e-4a69-a35e-606be98f7782'
    );
  }
}
