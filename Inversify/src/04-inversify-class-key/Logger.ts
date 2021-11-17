import { injectable } from 'inversify';
import { FileWriter } from './FileWriter';

@injectable()
export class Logger {
  // constructor(private writer: WriterInterface) {}

  constructor(private writer: FileWriter) {}

  log(msg: string) {
    this.writer.write(new Date().toLocaleTimeString() + ' ' + msg + "\n");
  }
}
