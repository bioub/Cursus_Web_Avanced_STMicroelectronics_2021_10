import { WriterInterface } from './WriterInterface';

export class Logger {
  constructor(private writer: WriterInterface) {}

  log(msg: string) {
    this.writer.write(new Date().toLocaleTimeString() + ' ' + msg);
  }
}
