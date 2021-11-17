function timeout(delayMs: number) {
  return new Promise((resolve: (val: void) => void) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

timeout(1000).then(() => console.log('1s'));

function timeout2(delayMs: number) {
  return new Promise((resolve: (val: number) => void) => {
    setTimeout(() => {
      resolve(delayMs);
    }, delayMs);
  });
}

timeout2(1000).then((delay) => console.log(delay + 'ms'));

function timeout3(delayMs: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

timeout3(1000).then(() => console.log('1s'));

function timeout4(delayMs: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delayMs);
    }, delayMs);
  });
}

timeout4(1000).then((delay) => console.log(delay + 'ms'));

