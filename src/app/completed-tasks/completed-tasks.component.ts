import { Task } from './../task';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {

  completedList: Task[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.completedList = this.service.retrieve()
        .filter(x => x.completed);
    console.log(this.completedList);
  }

  changeTask(task: Task) {
    task.completed = !task.completed;
    this.service.store(this.completedList);
  }

}
