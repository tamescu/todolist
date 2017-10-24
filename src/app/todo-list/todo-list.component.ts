import { Task } from './../task';
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

  private todolist: Task[];
  private currentList: Task[];

  name: string;  

  constructor(
    private storage: LocalStorageService,
    private service: DataService  
  ) { 
    this.service.setKeyStorage;
  }


  ngOnInit() {
    this.todolist = this.service.retrieve();
    this.currentList = this.todolist;
  }

  addTask(status: boolean,taskName: string){
    let task = {
      completed: status,
       name: taskName
    };
    this.todolist = this.service.addElement(task,this.todolist);
    this.name = "";
  }

  deleteTask(task: Task) {
    this.todolist = this.service.deleteElement(task, this.todolist);
  }

  changeTask(task: Task) {
    task.completed = !task.completed;
    this.service.store(this.todolist);
    this.todolist = this.service.retrieve();
    // this.checkStatus(task.completed);
  }

  checkStatus(status: boolean) {
    this.todolist = this.service.retrieve();
    this.currentList = this.todolist
       .filter(x => x.completed === status);
    console.log("llamada a checkStatus");
  }

}
