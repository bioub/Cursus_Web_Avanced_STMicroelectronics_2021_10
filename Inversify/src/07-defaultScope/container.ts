import { Container } from 'inversify';
import { FileWriter } from './FileWriter';
import { Logger } from './Logger';

let container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

if (process.env.NODE_ENV === 'production') {
  // container.bind(FileWriter).toSelf().inSingletonScope();
  // container.bind(Logger).toSelf().inSingletonScope();
} else {
  // const writer = new ConsoleWriter();
  // const logger = new Logger(writer);
  // container.bind(Logger).toConstantValue(logger);
}

export { container };
