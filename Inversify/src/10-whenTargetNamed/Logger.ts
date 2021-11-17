import { inject, injectable, tagged } from 'inversify';
import { WriterInterface } from './WriterInterface';

@injectable()
export class Logger {
  @inject(WriterInterface) @tagged("env", process.env.NODE_ENV)
  private writer!: WriterInterface

  log(msg: string) {
    this.writer.write(new Date().toLocaleTimeString() + ' ' + msg + "\n");
  }
}
