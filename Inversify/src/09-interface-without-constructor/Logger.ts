import { inject, injectable, tagged } from 'inversify';
import { WriterInterface } from './WriterInterface';

@injectable()
export class Logger {
  @inject(WriterInterface)
  private writer!: WriterInterface

  log(msg: string) {
    this.writer.write(new Date().toLocaleTimeString() + ' ' + msg + "\n");
  }
}
