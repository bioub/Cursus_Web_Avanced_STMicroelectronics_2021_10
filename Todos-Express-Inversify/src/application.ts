import express from 'express';
import cors from 'cors';
import { TodosRouter } from './todos/router';
import { inject, injectable } from 'inversify';

@injectable()
export class Application {
  @inject(TodosRouter)
  todosRouter!: TodosRouter;

  express = express();

  registerGlobalMiddlewares() {
    this.express.use(
      cors({
        origin: ['http://localhost:8080', 'http://127.0.0.1:8080'],
        credentials: true,
      }),
    );
  }

  registerRoutes() {
    this.todosRouter.init();
    this.express.use('/todos', this.todosRouter.routes);
  }
}
