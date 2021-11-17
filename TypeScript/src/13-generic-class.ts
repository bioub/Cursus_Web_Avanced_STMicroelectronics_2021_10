class Stack<T = string> {
  private intervalArray: T[] = [];
  push(val: T) {
    this.intervalArray.push(val);
  }
  pop() {
    this.intervalArray.unshift();
  }
}

const pile = new Stack<string>();
pile.push('ABC');
