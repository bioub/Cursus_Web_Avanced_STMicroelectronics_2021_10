const names = ['Toto', 'Paul', 'Eric'];
names.push('Jacques');

function hello(name: string) {
  return `Hello ${name.toUpperCase()} !`;
}

for (const n of names) {
  console.log(hello(n));
}

