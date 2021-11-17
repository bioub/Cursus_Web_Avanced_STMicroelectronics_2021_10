import { Container } from 'inversify';
import { FileWriter } from './FileWriter';
import { Logger } from './Logger';

let container = new Container({
  autoBindInjectable: true,
});

if (process.env.NODE_ENV === 'production') {
  // container.bind(FileWriter).toSelf();
  // container.bind(Logger).toSelf();
} else {
  // const writer = new ConsoleWriter();
  // const logger = new Logger(writer);
  // container.bind(Logger).toConstantValue(logger);
}

export { container };
