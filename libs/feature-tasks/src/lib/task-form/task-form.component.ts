import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddTaskGQL, TaskListDocument, TaskListQuery } from '@nx-angular-graphql/data-access';

@Component({
  selector: 'nx-angular-graphql-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  newTaskForm: FormGroup;
  constructor(private addTaskGQL: AddTaskGQL, private fb: FormBuilder) {
    this.newTaskForm = this.fb.group(
      {
        name: ['', Validators.required],
        deadline: ['', Validators.required],
        hours: [10, Validators.required]
      }
    )
  }

  createTask() {
    if (this.newTaskForm.valid) {
      const newTask = { name: this.newTaskForm.get('name').value, deadline: this.newTaskForm.get('deadline').value, hours: +this.newTaskForm.get('hours').value };

      this.addTaskGQL.mutate(newTask)

      this.addTaskGQL.mutate(newTask, {
        update: (store, result) => {
          const data: TaskListQuery = store.readQuery({ query: TaskListDocument });
          data.allTasks = [...data.allTasks, result.data.addTask];
          // Write our data back to the cache.
          store.writeQuery({ query: TaskListDocument, data });
        }
      }).subscribe(() => {
        this.newTaskForm.reset();
      });
    }

  }
}
