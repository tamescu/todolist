import { DataService } from './services/data.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PendingTasksComponent } from './pending-tasks/pending-tasks.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';

//---------------------
import {Ng2Webstorage} from 'ng2-webstorage';
//---------------------

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavbarComponent,
    NotFoundComponent,
    PendingTasksComponent,
    CompletedTasksComponent
  ],
  imports: [
    Ng2Webstorage,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TodoListComponent },
      { path: 'all', component: TodoListComponent },
      { path: 'pending', component: PendingTasksComponent },
      { path: 'completed', component: CompletedTasksComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: '**', redirectTo: 'not-found' }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
