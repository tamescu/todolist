import { Task } from '../task';
// import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';
import { DataService } from "../services/data.service";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(
    private storage: LocalStorageService,
    private service: DataService  
  ) { }

  title = "'To do list app'";
  todolist: Task[];
  name: string;

  ngOnInit() {
    this.service.initialize;
    this.retrieveList();
  }

  addTask(status: boolean,taskName: string){
    let task = {
      completed: status,
       name: taskName
    };
    if (!this.todolist)
      this.todolist = [];

    this.service.add(task,this.todolist);
    this.retrieveList();
  }

  retrieveList() {
    this.todolist = this.service.retrieve();
    this.name = "";
  }

  deleteTask(task: Task) {
    this.service.delete(task, this.todolist);
    this.retrieveList();
  }

  changeStatus(task: Task) {
    task.completed = !task.completed;
  }


}
