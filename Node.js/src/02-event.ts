import EventEmitter from "events";

async function fetch(url:string) {

}

// const events = new EventEmitter();
// export class UserService {
//   async getAll() {
//     events.emit('prefetch', '/users');
//     const res = await fetch('/users');
//     events.emit('postfetch', '/users');
//   }
// }

// // Application 1
// const userService = new UserService();

// events.on('prefetch', (url) => {
//   // setTimeout(() => {
//     console.log('prefetch', url);
//   // }, 0);
// });

// userService.getAll();

// const userService2 = new UserService();
// userService2.getAll();

// console.log('FIN');

// // ^
// // |cb
// // |emit
// // |getAll
// // +------------------------------------------>



export class UserService extends EventEmitter {
  async getAll() {
    // setTimeout(() => {
    this.emit('prefetch', '/users');
    // }, 0);
    const res = await fetch('/users');
    this.emit('postfetch', '/users');
  }
}

// Application 1
const userService = new UserService();

userService.on('prefetch', (url) => {
  console.log('prefetch', url);
});

userService.getAll();
