// setTimeout(() => console.log('1s'), 1000);

function timeout(delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

timeout(1000).then(() => console.log('1s'));

(async () => {
  await timeout(1000);
  console.log('1s');
})();

const fs = require('fs');

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer);
      }
    });
  });
}

readFile('.editorconfig')
  .then((buffer) => console.log(buffer.toString('utf-8')))
  .catch((err) => console.log(err));
