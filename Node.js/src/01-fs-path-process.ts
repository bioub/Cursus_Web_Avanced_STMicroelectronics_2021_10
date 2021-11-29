// Module CommonJS
// function(require, export, module, __dirname, __filename) {
  import path from 'path'; // const path = require('path');
  import fs from 'fs'; // const fs = require('fs');

  // process.chdir(__dirname);
  // console.log(process.cwd());


  const [srcPath, destPath] = process.argv.slice(2);

  // const srcAbsPath = path.resolve(__dirname, srcPath);
  // const destAbsPath = path.resolve(__dirname, destPath);
  // console.log(path.join(__dirname, '..', 'dest', destPath));
  // console.log(path.resolve(__dirname, '..', 'dest', destPath));

  fs.copyFileSync(srcPath, destPath);

// }
