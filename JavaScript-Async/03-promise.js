// Promise / Future / Defer
// apparue via des libs : q, bluebird
// natif depuis ES2015
// Dans Node, fs propose une version promise depuis Node 12

const fs = require('fs');

// Async
// Callback Hell / Pyramid of Doom
// fs.readFile('.gitignore', (err, buffer) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile('.gitignore.copy', buffer, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('COPY ASYNC DONE');
//       }
//     });
//   }
// });

// fs.promises
//   .readFile('.gitignore')
//   .then((buffer) => {
//     fs.promises
//       .writeFile('.gitignore.copy', buffer)
//       .then((buffer) => console.log('COPY ASYNC DONE'))
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

fs.promises
  .readFile('.gitignore')
  .then((buffer) => fs.promises.writeFile('.gitignore.copy', buffer))
  .then(() => console.log('COPY ASYNC DONE'))
  .catch((err) => console.log(err));

// ES2017 async / await
async function copy() {
  try {
    const buffer = await fs.promises.readFile('.gitignore');
    await fs.promises.writeFile('.gitignore.copy', buffer);
    console.log('COPY ASYNC DONE');
  } catch (err) {
    console.log(err);
  }
}

copy();

// A partir de ES2022 Top Level Await
// try {
//   const buffer = await fs.promises.readFile('.gitignore');
//   await fs.promises.writeFile('.gitignore.copy', buffer);
//   console.log('COPY ASYNC DONE');
// } catch (err) {
//   console.log(err);
// }
