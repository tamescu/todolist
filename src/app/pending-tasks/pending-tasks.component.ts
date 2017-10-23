import { Task } from './../task';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pending-tasks',
  templateUrl: './pending-tasks.component.html',
  styleUrls: ['./pending-tasks.component.css']
})
export class PendingTasksComponent implements OnInit {

  pendinglist: Task[] = [];
  list: Task[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.list = this.service.retrieve();
    console.log(this.list);
    console.log(this.pendinglist);
    // for (let item of this.list) {
    //   if(item.completed === false)
    //     this.service.addElement(item,this.pendinglist);
    // }
  }

    // clasify(list: any[]) {
  //   for (let item of list) {
  //     if(item.completed === true)
  //       this.service.addElement(item,this.completedlist);
  //   }
  // }

}
