import { injectable } from "inversify";
import { WriterInterface } from "./WriterInterface";

@injectable()
export class ConsoleWriter implements WriterInterface {
  write(msg: string): void {
    console.log(msg);
  }
}
