import { Container } from 'inversify';
import { Application } from './application';
import { TodosRouter } from './todos/router';
import { TodosController } from './todos/controller';
import { TodosModel } from './todos/model';

const container = new Container();


container.bind(TodosModel).toSelf().inSingletonScope();
container.bind(TodosController).toSelf().inSingletonScope();
container.bind(TodosRouter).toSelf().inSingletonScope();
container.bind(Application).toSelf().inSingletonScope();

export { container };
