import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { Task } from './../task';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private todoList: Task[] = [];
  private pendingList: Task[] = [];
  private completedList: Task[] = [];
  
  constructor(private storage: LocalStorageService) { }

  initialize() {
    this.storage.observe('listKey')
    .subscribe((value) => console.log('listKey', value)); 
  }

  add(task: Task, list: Task[]) {
    list.push(task);
    this.storage.store('listKey',list);
  }

  delete(task: Task, list: Task[]) {
    let index = list.indexOf(task);
    list.splice(index,1);
    this.storage.store('listKey',list);
  }

  retrieve() {
    this.todoList = this.storage.retrieve('listKey');
    return this.todoList;
  }

  clasify() {
    for (let item of this.todoList) {
      if(item.completed === false)
        this.add(item,this.pendingList);
        // this.pendingList.push(item);
      else
        this.add(item,this.completedList);
        // this.completedList.push(item);
    }
  }

  getPendingList(){
    return this.pendingList;
  }

  getCompletedList(){
    return this.completedList;
  }

  // getTodoList() {
  //   return this.todoList;
  // }
  
}
