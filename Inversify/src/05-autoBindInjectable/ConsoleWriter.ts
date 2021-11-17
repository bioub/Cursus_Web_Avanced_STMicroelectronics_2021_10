import { WriterInterface } from "./WriterInterface";

export class ConsoleWriter implements WriterInterface {
  write(msg: string): void {
    console.log(msg);
  }
}
