import { Task } from './../task';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {

  completedlist: Task[] = [];
  list: Task[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.list = this.service.retrieve();
    console.log(this.list);
    console.log(this.completedlist);
    // this.completedlist = this.list;
    // this.clasify(this.completedlist);
  }

  // clasify(list: any[]) {
  //   for (let item of list) {
  //     if(item.completed === true)
  //       this.service.addElement(item,this.completedlist);
  //   }
  // }


}
