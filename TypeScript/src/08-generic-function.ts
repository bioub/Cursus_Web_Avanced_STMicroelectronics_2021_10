function randomTimeout<T>(val: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val);
    }, Math.random() * 1000);
  });
}

randomTimeout<string>('test').then((val) => console.log(val));
randomTimeout<number>(123).then((val) => console.log(val));

randomTimeout(123).then((val) => console.log(val));
randomTimeout('test').then((val) => console.log(val));


const todoFormEl = document.querySelector<HTMLFormElement>('.todo-form');

if (todoFormEl) {
  todoFormEl.action = '/url';
}

const checkboxEls = document.querySelectorAll<HTMLInputElement>('.checkbox');

for (const checkboxEl of checkboxEls) {

}
