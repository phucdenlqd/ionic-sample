import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TodoCardService } from '../todo-list/todo-list.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class TodoAddComponent implements OnInit {
  todoTaskForm: FormGroup;

  constructor(private todoCardService: TodoCardService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    const initDate = new Date().toISOString();
    this.todoTaskForm = new FormGroup({
      title: new FormControl(''),
      date: new FormControl(initDate),
      description: new FormControl(''),
    });
  }

  onSubmit(): void {
    const value = this.todoTaskForm.value;
    this.todoCardService.addTodoCard(
      value.title,
      value.date,
      value.description
    );
  }
}
