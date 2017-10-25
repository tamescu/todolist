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

  name: string;  

  constructor(private storage: LocalStorageService,
              private service: DataService) { 
    this.service.setKeyStorage;
  }

  ngOnInit() {
    this.todolist = this.service.retrieve();
    this.filteredList = this.todolist;
    this.currentOption = 0;
    
    console.log("llamada a ngOnInit");
    console.log(this.todolist);
    console.log(this.filteredList); 
    console.log(this.currentOption);
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

  changeStatus(task: Task) {
    task.completed = !task.completed;
    this.service.store(this.todolist);
  
    if (this.currentOption === 1 || this.currentOption === 2)
      this.filterList(!task.completed);

    console.log("llamada a changeStatus");
    console.log(this.todolist);
    console.log(this.filteredList);    

  }

  filterList(status: boolean) {
    if (status === false) 
      this.currentOption = 1;
    else this.currentOption = 2;
    this.todolist = this.service.retrieve();
    this.filteredList = this.todolist
       .filter(item => item.completed === status);

    console.log("llamada a filterList");
    console.log(this.todolist);
    console.log(this.filteredList); 
    console.log(this.currentOption);

  }

}
