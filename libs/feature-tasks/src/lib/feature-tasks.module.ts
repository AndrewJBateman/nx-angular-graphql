import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    TaskListComponent,
    TaskFormComponent
  ],
  exports: [
    TaskListComponent,
    TaskFormComponent
  ],
})
export class FeatureTasksModule {}
