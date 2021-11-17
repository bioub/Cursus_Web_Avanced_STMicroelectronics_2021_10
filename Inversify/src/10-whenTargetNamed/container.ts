import { Container } from 'inversify';
import { ConsoleWriter } from './ConsoleWriter';
import { FileWriter } from './FileWriter';
import { WriterInterface } from './WriterInterface';

let container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

container.bind(WriterInterface).to(FileWriter).whenTargetTagged('env', 'production');
container.bind(WriterInterface).to(ConsoleWriter).whenTargetTagged('env', 'test');

export { container };
