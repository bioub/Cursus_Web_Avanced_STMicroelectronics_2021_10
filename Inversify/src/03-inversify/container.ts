import { Container } from 'inversify';
import { ConsoleWriter } from '../02-services/ConsoleWriter';
import { FileWriter } from '../02-services/FileWriter';
import { Logger } from '../02-services/Logger';

let container = new Container();

if (process.env.NODE_ENV === 'production') {
  container.bind<Logger>('logger').toDynamicValue(function factory() {
    console.log('Factory called');
    const writer = new FileWriter();
    const logger = new Logger(writer);
    return logger;
  });
} else {
  const writer = new ConsoleWriter();
  const logger = new Logger(writer);
  container.bind<Logger>('logger').toConstantValue(logger);
}

export { container };
