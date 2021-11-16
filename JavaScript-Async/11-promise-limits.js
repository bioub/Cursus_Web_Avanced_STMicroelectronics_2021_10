
// function interval(delayMs) {
//   return new Promise((resolve) => {
//     setInterval(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// interval(1000).then(() => console.log('1s'));

// Promise => uniquement si le callback est appelé une fois

// 2 solutions :
// class Observable (lib rxjs)
// Asynchronous Iteration (deno)

const { Observable } = require('rxjs');

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, delayMs);
  });
}

interval(1000).subscribe(() => console.log('1s'));
