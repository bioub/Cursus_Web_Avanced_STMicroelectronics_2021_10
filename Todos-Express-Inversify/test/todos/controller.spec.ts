import sinon, { SinonStubbedInstance } from 'sinon';
import sinonChai from 'sinon-chai';
import { expect, use } from 'chai';
import { Container } from 'inversify';
import { TodosModel } from '../../src/todos/model';
import { TodosController } from '../../src/todos/controller';

use(sinonChai);

describe('todos controllers', () => {
  let container: Container;
  let mockTodosModel: SinonStubbedInstance<TodosModel>;

  beforeEach(() => {
    container = new Container();

    mockTodosModel = sinon.createStubInstance(TodosModel);
    container.bind(TodosModel).toConstantValue(mockTodosModel);
    container.bind(TodosController).toSelf();
  });

  describe('todoListCtrl function', () => {
    it('should call res.json with data from model', async () => {
      const todosCtrl = container.get(TodosController);

      const req = {} as any;
      const res = {
        json: sinon.spy(),
      } as any;

      mockTodosModel.find.resolves([{ id: 1, title: 'ABC', completed: true }]);

      await todosCtrl.list(req, res);

      expect(res.json).to.have.been.calledOnce;
      expect(res.json).to.have.been.calledWith([
        { id: 1, title: 'ABC', completed: true },
      ]);
    });
  });
});
