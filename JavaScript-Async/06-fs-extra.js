const fs = require('fs-extra');

const buffer = fs.readFileSync('.gitignore');
console.log(buffer.toString('utf-8'));

// fs-extra ajoute des fonctions à fs
// doc : https://github.com/jprichardson/node-fs-extra#methods
// fs.ensureFileSync('tmp/log/app.log')

// dans fs-extra ne pas utiliser fs.promises
// pour accéder aux versions basées sur les promesses (directement fs.NOM_DE_FONCTION)
fs.readFile('.gitignore').then((buffer) => {
  console.log(buffer.toString('utf-8'));
})
