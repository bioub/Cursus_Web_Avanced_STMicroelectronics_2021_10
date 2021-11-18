import { Container } from 'inversify';

const container = new Container();

const fakeUserService = {
  getAll() {
    return Promise.resolve([{id: 1, name: 'A'}]);
  }
};

export { container };
