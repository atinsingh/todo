import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../model/task.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  task: TaskModel;
  constructor() {
  }

  ngOnInit(): void {
  }

  completeTask(e) {
    this.task.active = !this.task.active;
  }
}
