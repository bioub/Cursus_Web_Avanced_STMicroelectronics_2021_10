import request from 'supertest'
import { mocked } from 'ts-jest/utils';

import { app } from './app';
import model from './todos/model-mongoose';

jest.mock('./todos/model-mongoose');

const mockedModel = mocked(model, true);

describe('functional tests', () => {
  describe('GET /todos', () => {
    it('should return todos with status 200', async () => {
      mockedModel.find.mockResolvedValueOnce([{ id: 1, title: 'ABC', completed: true }] as any);

      const res = await request(app)
        .get('/todos');

      expect(res.status).toBe(200);
      expect(res.body).toEqual([{ id: 1, title: 'ABC', completed: true }]);

      // mock.verify();
    });
  });
})
