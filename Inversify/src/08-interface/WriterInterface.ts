export const WriterInterface = Symbol('WriterInterface');
export interface WriterInterface {
  write(msg: string): void;
}
