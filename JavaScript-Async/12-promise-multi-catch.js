const fs = require('fs');

fs.promises
  .access('./copy')
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.promises.mkdir('./copy');
    }
    throw err;
  })
  .then(() => fs.promises.readFile('.gitignore'))
  .then((buffer) => fs.promises.writeFile('./copy/.gitignore.copy', buffer))
  .then(() => console.log('COPY ASYNC DONE'))
  .catch((err) => console.log(err));

// ES2017 async / await
// async function copy() {
//   try {
//     try {
//       await fs.promises.access('./copy');
//     } catch (err) {
//       if (err.code === 'ENOENT') {
//         await fs.promises.mkdir('./copy');
//       } else {
//         throw err;
//       }
//     }

//     const buffer = await fs.promises.readFile('.gitignore');
//     await fs.promises.writeFile('.gitignore.copy', buffer);
//     console.log('COPY ASYNC DONE');
//   } catch (err) {
//     console.log(err);
//   }
// }

// copy();

async function ensureDir() {
  try {
    await fs.promises.access('./copy');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.promises.mkdir('./copy');
    } else {
      throw err;
    }
  }
}

async function copy() {
  try {
    await ensureDir();

    const buffer = await fs.promises.readFile('.gitignore');
    await fs.promises.writeFile('.gitignore.copy', buffer);
    console.log('COPY ASYNC DONE');
  } catch (err) {
    console.log(err);
  }
}

copy();
