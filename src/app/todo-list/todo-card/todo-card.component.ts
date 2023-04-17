import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TodoCard } from './todo-card.model';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class TodoCardComponent implements OnInit {
  @Input() todoCard: TodoCard;

  constructor() {}

  ngOnInit(): void {
    console.log(this.todoCard);
    
  }
}
