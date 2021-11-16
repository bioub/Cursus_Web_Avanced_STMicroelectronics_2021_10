function httpClient(url) {
  const data = {
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

function timeout(delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

Promise.any([
  httpClient('/users'),
  httpClient('/fkdnjgdnf'),
]).then((result) => {
  console.log(result);
})
