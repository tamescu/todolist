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

  private todolist: Task[];
  private filteredList: Task[];
  private currentOption: number;
  private done: boolean;

  private name: string;  
  

  constructor(private storage: LocalStorageService,
              private service: DataService) { 
    this.service.setKeyStorage;
  }

  ngOnInit() {
    this.todolist = this.service.retrieve();
    this.filteredList = this.todolist;
    this.currentOption = 0;
  }

  addTask(status: boolean,taskName: string){
    let task = {
      completed: status,
       name: taskName
    };
    this.todolist = this.service.addElement(task,this.todolist);
    this.name = "";
    this.filterList(this.currentOption.toString());
    
  }

  deleteTask(task: Task) {
    this.todolist = this.service.deleteElement(task, this.todolist);
    this.filterList(this.currentOption.toString());
  }

  changeStatus(task: Task) {
    task.completed = !task.completed;
    this.service.store(this.todolist); 
    this.filterList(this.currentOption.toString());
  }

  filterList(value: string) { 
    this.currentOption = +value;
    this.todolist = this.service.retrieve();

    if (this.currentOption===1 || this.currentOption===2) {
      if (this.currentOption===1) this.done = false;
      if (this.currentOption===2) this.done = true;
      this.filteredList = this.todolist
        .filter(item => item.completed === this.done);
    } else {
      this.ngOnInit();
    }
  }
}