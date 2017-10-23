import { Task } from './../task';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pending-tasks',
  templateUrl: './pending-tasks.component.html',
  styleUrls: ['./pending-tasks.component.css']
})
export class PendingTasksComponent implements OnInit {

  pendinglist;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.pendinglist = this.service.getPendingList();
   }

}
