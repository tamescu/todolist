import { Task } from './../task';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pending-tasks',
  templateUrl: './pending-tasks.component.html',
  styleUrls: ['./pending-tasks.component.css']
})
export class PendingTasksComponent implements OnInit {

  pendingList: Task[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.pendingList = this.service.retrieve()
        .filter(x => !x.completed);
  }

  changeTask(task: Task) {
    task.completed = !task.completed;
    this.service.store(this.pendingList);
    this.pendingList = this.service.retrieve();
  }

}
