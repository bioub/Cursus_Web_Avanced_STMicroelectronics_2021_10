import express, { Router } from 'express';
import { inject, injectable } from 'inversify';
import { TodosController } from './controller';

@injectable()
export class TodosRouter {

  @inject(TodosController)
  todosCtrl!: TodosController;

  routes = Router();

  constructor() {

  }

  init() {
    this.routes.get('/', this.todosCtrl.list.bind(this.todosCtrl));
    this.routes.post('/', express.json(), this.todosCtrl.add.bind(this.todosCtrl));
    this.routes.delete('/:todoId', this.todosCtrl.delete.bind(this.todosCtrl));
  }
}
