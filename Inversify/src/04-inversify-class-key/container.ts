import { Container } from 'inversify';
import { ConsoleWriter } from './ConsoleWriter';
import { FileWriter } from './FileWriter';
import { Logger } from './Logger';

let container = new Container();

if (process.env.NODE_ENV === 'production') {
  // container.bind(FileWriter).toService(FileWriter);
  container.bind(FileWriter).toDynamicValue(() => {
    return new FileWriter('tmp.txt');
  })
  container.bind(Logger).toSelf();
} else {
  // const writer = new ConsoleWriter();
  // const logger = new Logger(writer);
  // container.bind(Logger).toConstantValue(logger);
}

export { container };
