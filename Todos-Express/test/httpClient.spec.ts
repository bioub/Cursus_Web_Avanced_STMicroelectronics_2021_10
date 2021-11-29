import { expect } from 'chai';

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
  it('should resolve a value when the url exists', async () => {
    const users = await httpClient('/users');
    expect(users).to.deep.equals([
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
    ]);
  });
  // it('should rejectwhen the url does not exist', () => {
  //   expect(async () => {
  //     const users = await httpClient('/toto');
  //   }).to.throw(new Error('no data for this url'));
  // });
});
