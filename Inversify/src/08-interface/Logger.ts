import { inject, injectable } from 'inversify';
import { WriterInterface } from './WriterInterface';

@injectable()
export class Logger {
  constructor(@inject(WriterInterface) private writer: WriterInterface) {}

  log(msg: string) {
    this.writer.write(new Date().toLocaleTimeString() + ' ' + msg + "\n");
  }
}
