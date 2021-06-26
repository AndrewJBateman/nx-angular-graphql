import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Mutation = {
  __typename?: 'Mutation';
  addTask?: Maybe<Task>;
};


export type MutationAddTaskArgs = {
  name?: Maybe<Scalars['String']>;
  deadline?: Maybe<Scalars['String']>;
  hours?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  allTasks?: Maybe<Array<Maybe<Task>>>;
};

export type Task = {
  __typename?: 'Task';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  deadline?: Maybe<Scalars['String']>;
  hours?: Maybe<Scalars['Int']>;
};

export type TaskListQueryVariables = Exact<{ [key: string]: never; }>;


export type TaskListQuery = (
  { __typename?: 'Query' }
  & { allTasks?: Maybe<Array<Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'name' | 'deadline' | 'hours'>
  )>>> }
);

export type AddTaskMutationVariables = Exact<{
  name: Scalars['String'];
  deadline: Scalars['String'];
  hours: Scalars['Int'];
}>;


export type AddTaskMutation = (
  { __typename?: 'Mutation' }
  & { addTask?: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'name' | 'deadline' | 'hours'>
  )> }
);

export const TaskListDocument = gql`
    query TaskList {
  allTasks {
    id
    name
    deadline
    hours
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TaskListGQL extends Apollo.Query<TaskListQuery, TaskListQueryVariables> {
    document = TaskListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddTaskDocument = gql`
    mutation addTask($name: String!, $deadline: String!, $hours: Int!) {
  addTask(name: $name, deadline: $deadline, hours: $hours) {
    id
    name
    deadline
    hours
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddTaskGQL extends Apollo.Mutation<AddTaskMutation, AddTaskMutationVariables> {
    document = AddTaskDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }