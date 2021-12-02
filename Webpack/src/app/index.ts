import { Horloge } from './horloge';
// const { Horloge } = require('./horloge');

const divElt = document.querySelector('.horloge') as HTMLDivElement;
const clock = new Horloge(divElt);
clock.start();

// document.addEventListener('click', async () => {
//   const { Horloge } = await import('./horloge');

//   const divElt = document.querySelector('.horloge') as HTMLDivElement;
//   const clock = new Horloge(divElt);
//   clock.start();
// });
