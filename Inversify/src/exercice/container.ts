import { Container } from 'inversify';
import { ModuleUserTheia } from './ModuleUserTheia';
import { UserService } from './UserService';

const container = new Container();

const fakeUserService = {
  getAll() {
    return Promise.resolve([{id: 1, name: 'A'}]);
  }
};

container.bind(ModuleUserTheia).toSelf().inSingletonScope();

// vraie implémentation
// container.bind(UserService).toSelf().inSingletonScope();

// fausse implémentation dans un test
container.bind(UserService).toConstantValue(fakeUserService);

export { container };
