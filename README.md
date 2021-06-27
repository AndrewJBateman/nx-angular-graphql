# :zap: Nx Angular GraphQL

* Nx monorepo with Angular app to display/add tasks from a NestJS backend API using Apollo GraphQL
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/nx-angular-graphql?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/nx-angular-graphql?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/nx-angular-graphql?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/nx-angular-graphql?style=plastic)

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* Nx workspace for both front and backends
* GraphQL typed schema used with code-generator to autogenerate frontend code
* Apollo Client stores the results of its GraphQL queries in a normalized, in-memory cache using the 'InMemoryCache' class
* Data-access library used to handle communication with the backend.
* Feature Tasks library with container components for displaying task data.

## :camera: Screenshots

![Frontend screenshot](./img/home.png)

## :signal_strength: Technologies

* [Nx v12](https://nx.dev) build framework used to create project workspace
* [Angular framework v12](https://angular.io/) for frontend tasks view
* [NestJS v7](https://nestjs.com/) for backend API
* [GraphQL v15](https://graphql.org/) API query language with [graphql-tools](https://github.com/ardatan/graphql-tools#readme)
* [npm Apollo Angular v2](https://www.npmjs.com/package/apollo-angular) to fetch task data from the GraphQL server and display it in the Angular UI
* [npm apollo-server-express v2](https://www.npmjs.com/package/apollo-server-express) Express and Connect integration of GraphQL Server
* [GraphQL Code Generator v1](https://www.graphql-code-generator.com/) CLI tool & modules used to generate Typescript typings. `libs/data-access/codegen.yml` file configures the code generator
* [Random image source](https://picsum.photos/) - free placeholder images

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Run `nx dep-graph` to see a diagram of the dependencies of the project.
* Run `npm start api` for a backend dev server. View GraphQL playground at
  `http://localhost:3333/graphql`
* Run `npm start nx-angular-graphql` for a frontend
* Run `npm run lint` to lint test entire client-side codebase using ESLint. All files pass.
* Run `nx build angular-ngrx-energy` to generate a build file

## :wrench: Testing

* tba

## :computer: Code Examples

* `schema.graphql` allTasks query and addTask mutation

```typescript
type Task {
  id: Int!
  name: String
  deadline: String
  hours: Int
}

type Query {
  allTasks: [Task]
}

type Mutation {
  addTask(name: String, deadline: String, hours: Int): Task
}
```

## :cool: Features

* monorepo organised libraries etc. makes for tidier code
* GraphQL interface

## :clipboard: Status, Testing & To-Do List

* Status: Working
* Testing: unit and end-end tests not completed
* To-Do: change deadline from simple string to a Date,

## :clap: Inspiration/General Tools

* [Nx documentation](https://nx.dev/angular)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
