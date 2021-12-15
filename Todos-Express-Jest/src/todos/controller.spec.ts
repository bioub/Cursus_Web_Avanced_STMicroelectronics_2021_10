import { mocked } from 'ts-jest/utils';

import { todoDeleteCtrl, todoListCtrl } from './controllers';
import model from './model-mongoose';

jest.mock('./model-mongoose');

const mockedModel = mocked(model, true);

describe('todos controllers', () => {
  describe('todoListCtrl function', () => {
    it('should call res.json with data from model', async () => {
      // const req = {body: {}} as any;
      const req = {} as any;
      const res = {
        json: jest.fn(),
      } as any;

      // const mock = sinon.mock(model);

      // mock
      //   .expects('find')
      //   .once()
      //   // .callsFake(() => Promise.resolve([{ id: 1, title: 'ABC', completed: true }]))
      //   .resolves([{ id: 1, title: 'ABC', completed: true }]);

      // // (model as any).find = () => Promise.resolve([{ id: 1, title: 'ABC', completed: true }]);
      mockedModel.find.mockResolvedValueOnce([{ id: 1, title: 'ABC', completed: true }] as any);

      await todoListCtrl(req, res);

      expect(res.json).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith([
        { id: 1, title: 'ABC', completed: true },
      ]);
    });
  });

  // Exercice 3
  // Sur le modèle ci-dessus
  // Tester la méthode todoDeleteCtrl
  describe('todoDeleteCtrl function', () => {
    it('should call res.json with data from model', async () => {
      const req = {
        params: {
          todoId: '123',
        },
      } as any;
      const res = {
        json: jest.fn(),
      } as any;

      mockedModel.findByIdAndDelete.mockResolvedValueOnce({ id: 123, title: 'ABC', completed: true } as any);

      await todoDeleteCtrl(req, res);

      expect(res.json).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith({
        id: 123,
        title: 'ABC',
        completed: true,
      });

      // mock.verify();
    });
    it('should call res.json with 404 if model respond null', async () => {
      const req = {
        params: {
          todoId: '123',
        },
      } as any;
      const res = {} as any;
      res.status = jest.fn().mockReturnValueOnce(res); // un stub === un spy avec un comportement (ici une valeur de retour)
      res.json = jest.fn();

      mockedModel.findByIdAndDelete.mockResolvedValueOnce(null as any);

      await todoDeleteCtrl(req, res);

      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith({
        reason: 'Todo not found',
      });

      // mock.verify();
    });
  });
});
