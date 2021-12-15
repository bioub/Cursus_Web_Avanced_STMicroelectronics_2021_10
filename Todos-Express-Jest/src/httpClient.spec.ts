function httpClient(url: string) {
  const data: any = {
    '/users': [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
    ],
    '/todos': [
      { id: 1, title: 'Pain', userId: 2 },
      { id: 2, title: 'Lait', userId: 1 },
    ],
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data[url]) {
        resolve(data[url]);
      } else {
        reject(new Error('no data for this url'));
      }
    }, Math.random() * 1000);
  });
}

describe('httpClient function', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // globalThis.setTimeout = () => {}
  });
  afterEach(() => {
    jest.useRealTimers(); //  globalThis.setTimeout = originalSetTimeout;
  });
  it('should resolve a value when the url exists', async () => {
    const promise = httpClient('/users');
    jest.advanceTimersByTime(1000);
    const users = await promise;
    expect(users).toEqual([
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
    ]);
  });
});
