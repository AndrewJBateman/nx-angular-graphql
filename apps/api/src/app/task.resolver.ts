import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

export interface TaskEntity {
  id: number;
  name: string;
  deadline: string;
  hours: number;
}

@Resolver('Task')
export class TaskResolver {
  private tasks: TaskEntity[] = [
    {
      id: 1,
      name: 'Complete Angular tutorial',
      deadline: '2022',
      hours: 20
    },
    {
      id: 2,
      name: 'Edit Vue course',
      deadline: '2021',
      hours: 10
    }
  ];

  @Query('allTasks')
  getAllTasks(): TaskEntity[] {
    return this.tasks;
  }

  @Mutation()
  addTask(
    @Args('name') name: string,
    @Args('deadline') deadline: string,
    @Args('hours') hours: number
  ) {
    const newTask = {
      id: this.tasks.length + 1,
      name,
      deadline,
      hours: +hours
    };

    this.tasks.push(newTask);

    return newTask;
  }
}