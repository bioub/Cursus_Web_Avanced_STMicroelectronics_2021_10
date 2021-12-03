const coords = {
  x: 1,
  y: 2,
};

// const x = coords.x ?? 0;
// const y = coords.y ?? 0;
// const z = coords.z ?? 0;

const { x = 0, y = 0, z = 0 } = coords;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

function Hello(props) {
  const { name = 'Romain' } = props;

  console.log(name);
}

Hello({ name: 'Toto' });
Hello({ });
