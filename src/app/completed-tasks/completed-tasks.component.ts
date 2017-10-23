import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {

  completedlist;
  
    constructor(private service: DataService) { }
  
    ngOnInit() {
      this.service.initialize;
      this.completedlist = this.service.getCompletedList();
     }

}
