const fs = require('fs');

// Sync
try {
  const buffer = fs.readFileSync('.gitignore');
  fs.writeFileSync('.gitignore.copy', buffer);
  console.log('COPY SYNC DONE');
} catch (err) {
  console.log(err);
}

// Async
// Callback Hell / Pyramid of Doom
fs.readFile('.gitignore', (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('.gitignore.copy', buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('COPY ASYNC DONE');
      }
    });
  }
});
