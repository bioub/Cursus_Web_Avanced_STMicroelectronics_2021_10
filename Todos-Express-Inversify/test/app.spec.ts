import 'reflect-metadata';

import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import { Application } from '../src/application';
import { TodosModel } from '../src/todos/model';
import { Container } from 'inversify';
import { TodosController } from '../src/todos/controller';
import { TodosRouter } from '../src/todos/router';

chai.use(chaiHttp);

describe('functional tests', () => {
  let application!: Application

  beforeEach(() => {
    const container = new Container();
    container.bind(TodosModel).toConstantValue({
      find() {
        return Promise.resolve([{id: 1, title: 'ABC', completed: true}])
      }
    } as any);
    container.bind(TodosController).toSelf();
    container.bind(TodosRouter).toSelf();
    container.bind(Application).toSelf();

    application = container.get(Application);
    application.registerGlobalMiddlewares();
    application.registerRoutes();
  })

  describe('GET /todos', () => {
    it('should return todos with status 200', async () => {
      const res = await chai.request(application.express)
        .get('/todos');

      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal([{ id: 1, title: 'ABC', completed: true }]);
    });
  });
})
