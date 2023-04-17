import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { TodoCard } from './todo-card/todo-card.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoCardService {
  private todoCards$ = new BehaviorSubject<TodoCard[]>([]);

  constructor(private http: HttpClient) {
    this.init();
  }

  getTodoCards(): BehaviorSubject<TodoCard[]> {
    return this.todoCards$;
  }

  addTodoCard(title: string, date: Date, description: string): void {
    const currentCards = this.todoCards$.getValue();
    currentCards.push({
      id: this.generateCardId(),
      date,
      title,
      description,
    });
    this.todoCards$.next(currentCards);
  }

  init() {
    this.http
      .get<TodoCard[]>(
        'https://run.mocky.io/v3/291a12fb-9318-4234-8ecd-f9c550faa14c'
      )
      .subscribe(this.todoCards$);
  }

  private generateCardId(): number {
    const currentCards = this.todoCards$.getValue();
    return currentCards.reduce((acc, cur) => Math.max(acc, cur.id), 0);
  }
}
