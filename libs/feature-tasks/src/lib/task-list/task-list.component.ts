import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TaskListGQL } from '@nx-angular-graphql/data-access';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nx-angular-graphql-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks$: Observable<Task[]>;

  constructor(private taskListGQL: TaskListGQL) {
    this.tasks$ = this.taskListGQL.watch().valueChanges.pipe(map((result) => result.data.allTasks));
  }
}
