import { Horloge } from './horloge'; // Module ESM / ECMAScript / ES6 / ES2015
// const { Horloge } = require('./horloge'); // Module CommonJS (Node.js)

const divElt = document.querySelector('.horloge') as HTMLDivElement;
const clock = new Horloge(divElt);
clock.start();

// document.addEventListener('click', async () => {
//   const { Horloge } = await import('./horloge'); // Dynamic Import (ES2020)

//   const divElt = document.querySelector('.horloge') as HTMLDivElement;
//   const clock = new Horloge(divElt);
//   clock.start();
// });
