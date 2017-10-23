import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { Task } from './../task';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private todoList: Task[] = [];
  private pendingList: Task[] = [];
  private completedList: Task[] = [];
  private name: string;
  private task: Task;

  constructor(private storage: LocalStorageService) { }

  initialize() {
    this.storage.observe('listKey')
    .subscribe((value) => console.log('listKey', value)); 
    this.getPendingList();
    this.getCompletedList();
  }

  add(task: Task) {
    this.todoList.push(task);
    this.storage.store('listKey',this.todoList);
  }

  delete(task: Task) {
    let index = this.todoList.indexOf(task);
    this.todoList.splice(index,1);
    this.storage.store('listKey',this.todoList);
  }

  retrieve() {
    this.todoList = this.storage.retrieve('listKey');
    return this.todoList;
  }

  getPendingList(){
    for (let item of this.todoList) {
      if(item.completed === false)
        this.pendingList.push(item);
    }
    return this.pendingList;
  }

  getCompletedList(){
    for (let item of this.todoList) {
      if(item.completed === true)
        this.completedList.push(item);
    }
    return this.completedList;
  }
  
}
