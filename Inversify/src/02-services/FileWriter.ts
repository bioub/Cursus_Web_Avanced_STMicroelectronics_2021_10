import { WriterInterface } from "./WriterInterface";
import fs from 'fs';

export class FileWriter implements WriterInterface {
  write(msg: string): void {
    fs.appendFileSync('tmp.txt', msg);
  }
}
