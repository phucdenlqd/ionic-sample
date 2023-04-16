import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class TodoAddComponent implements OnInit {
  todoTaskForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const initData = new Date().toISOString();
    this.todoTaskForm = new FormGroup({
      title: new FormControl('assa'),
      date: new FormControl(initData),
    });
  }

  onSubmit() {
    console.log(this.todoTaskForm.value);
  }
}
