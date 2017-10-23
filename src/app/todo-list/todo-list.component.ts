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
  todolist;
  name: string;

  ngOnInit() {
    this.retrieveList();
    this.service.initialize;
  }

  addTask(status: boolean,taskName: string){
    let task = {
      completed: status,
       name: taskName
    };
    this.service.add(task);
    this.retrieveList();
  }

  retrieveList() {
    this.todolist = this.service.retrieve();
    this.name = "";
  }

  deleteTask(task: Task) {
    this.service.delete(task);
    this.retrieveList();
  }

  changeStatus(task: Task) {
    task.completed = !task.completed;
    // this.edit(task);
  }

  // edit(task: Task) {
  //   let index = this.todolist.indexOf(task);

  // }

}
