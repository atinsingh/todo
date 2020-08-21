import { Component, OnInit } from '@angular/core';
import {TaskModel} from '../model/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


  tasks: TaskModel[] = [
    {
      id: 1,
      text: 'Bring some juice',
      active: true
    },
    {
      id: 2,
      text: 'Buy eggs from super market',
      active: true
    },
    {
      id: 3,
      text: 'Write some kick-ass code',
      active: true
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
