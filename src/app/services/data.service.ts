import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private list: any[] = [];  
  private key: string = "listKey";

  constructor(private storage: LocalStorageService) { }

  setKeyStorage() {
    this.storage.observe(this.key)
    .subscribe((value) => console.log(this.key, value)); 
  }

  addElement(element: any, list: any[]) {
    if (!list)
      list = [];
    list.push(element);
    this.store(list);
    this.list = this.retrieve();
    return this.list;
  }

  deleteElement(element: any, list: any[]) {
    let index = list.indexOf(element);
    list.splice(index,1);
    this.store(list);
    this.list = this.retrieve();
    return this.list;
  }

  retrieve() {
    let x = this.storage.retrieve(this.key);
    if (x === null)
      return [];
    else
      return x;
  }

  store(list: any) {
    this.storage.store(this.key,list);
  } 

  clearAll() {
    this.storage.clear(this.key);
  }
  
}
