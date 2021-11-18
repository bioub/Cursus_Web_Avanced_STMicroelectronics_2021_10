import { WriterInterface } from "./WriterInterface";
import fs from 'fs';
import { inject, injectable } from "inversify";

@injectable()
export class FileWriter implements WriterInterface {
  constructor(private filePath: string){}

  write(msg: string): void {
    fs.appendFileSync(this.filePath, msg);
  }
}
