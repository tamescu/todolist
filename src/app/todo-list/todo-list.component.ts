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

  private todolist: Task[];
  name: string;

  ngOnInit() {
    this.service.setKeyStorage;
    this.todolist = this.service.retrieve();
  }

  addTask(status: boolean,taskName: string){
    let task = {
      completed: status,
       name: taskName
    };
    if (!this.todolist)
      this.todolist = [];

    this.service.addElement(task,this.todolist);
    this.service.store(this.todolist);
    this.todolist = this.service.retrieve();
    this.name = "";
  }

  deleteTask(task: Task) {
    this.service.deleteElement(task, this.todolist);
    this.todolist = this.service.retrieve();
  }

  changeTask(task: Task) {
    task.completed = !task.completed;
    this.service.changeElement(task, this.todolist);
  }



}
