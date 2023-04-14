import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodoCard } from './todo-card/todo-card.model';
import { TodoCardService } from './todo-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TodoCardComponent],
})
export class TodoListComponent implements OnInit {
  todoCards$: Observable<TodoCard[]> ;

  constructor(private todoCardService: TodoCardService) {}

  ngOnInit(): void {
    this.getTodoCards();
  }

  getTodoCards(): void {
    this.todoCards$ = this.todoCardService.getTodoCards();
  }
}
