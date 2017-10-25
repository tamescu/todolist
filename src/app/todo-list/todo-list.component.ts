import { Task } from './../task';
import { Component, OnInit } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';
import { DataService } from "../services/data.service";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private toDoList: Task[];
  private filteredList: Task[];
  private currentOption: number;
  private done: boolean;
  private name: string;  

  constructor(private storage: LocalStorageService,
              private service: DataService) { 
    this.service.setKeyStorage;
  }

  ngOnInit() {
    this.toDoList = this.service.retrieve();
    this.filteredList = this.toDoList;
    this.currentOption = 0;
  }

  addTask(status: boolean,taskName: string){
    let task = {
      completed: status,
       name: taskName
    };
    this.toDoList = this.service.addElement(task,this.toDoList);
    this.name = "";
    this.filterList(this.currentOption.toString());
  }

  deleteTask(task: Task) {
    this.toDoList = this.service.deleteElement(task, this.toDoList);
    this.filterList(this.currentOption.toString());
  }

  clearTasks() {
    this.service.clearAll();
    this.filterList(this.currentOption.toString());
  }

  changeStatus(task: Task) {
    task.completed = !task.completed;
    this.service.store(this.toDoList); 
    this.filterList(this.currentOption.toString());
  }

  filterList(value: string) { 
    this.currentOption = +value;
    this.toDoList = this.service.retrieve();

    if (this.currentOption===1 || this.currentOption===2) {
      if (this.currentOption===1) this.done = false;
      if (this.currentOption===2) this.done = true;
      this.filteredList = this.toDoList
        .filter(item => item.completed === this.done);
    } else {
      this.ngOnInit();
    }
  }
}