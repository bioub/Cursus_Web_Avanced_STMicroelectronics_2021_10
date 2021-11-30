import { todoListCtrl } from '../../src/todos/controllers';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { expect, use } from 'chai';
import model from '../../src/todos/model-mongoose';

use(sinonChai);

describe('todos controllers', () => {
  describe('todoListCtrl function', () => {
    it('should call res.json with data from model', async () => {
      // const req = {body: {}} as any;
      const req = {} as any;
      const res = {
        json: sinon.spy(),
      } as any;

      sinon
        .mock(model)
        .expects('find')
        .once()
        // .callsFake(() => Promise.resolve([{ id: 1, title: 'ABC', completed: true }]))
        .resolves([{ id: 1, title: 'ABC', completed: true }]);

      // (model as any).find = () => Promise.resolve([{ id: 1, title: 'ABC', completed: true }]);

      await todoListCtrl(req, res);

      expect(res.json).to.have.been.calledOnce;
      expect(res.json).to.have.been.calledWith([
        { id: 1, title: 'ABC', completed: true },
      ]);
    });
  });

  // Exercice 3
  // Sur le modèle ci-dessus
  // Tester la méthode todoDeleteCtrl
  describe('todoDeleteCtrl function', () => {
    it('should call res.json with data from model', async () => {
      const req = {} as any;
      const res = {
        json: sinon.spy(),
      } as any;
    });
    it('should call res.json with 404 if model respond null', async () => {
      const req = {} as any;
      const res = {} as any;
      res.status = sinon.stub().returns(res); // un stub === un spy avec un comportement (ici une valeur de retour)
      res.json = sinon.spy();
    });
  });
});
