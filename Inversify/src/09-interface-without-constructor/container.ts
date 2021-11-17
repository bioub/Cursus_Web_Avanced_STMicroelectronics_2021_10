import { Container } from 'inversify';
import { ConsoleWriter } from './ConsoleWriter';
import { FileWriter } from './FileWriter';
import { WriterInterface } from './WriterInterface';

let container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

if (process.env.NODE_ENV === 'production') {
  container.bind(WriterInterface).toService(FileWriter);
} else {
  container.bind(WriterInterface).toService(ConsoleWriter);
}

export { container };
