import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {

  completedList;
  
    constructor(private service: DataService) { }
  
    ngOnInit() {
      this.service.initialize;
      this.completedList = this.service.getCompletedList();
     }

}
