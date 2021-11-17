const coords = {
  x: 1,
  y: 2,
};

// interface anonyme
const coordsList1: {x: number, y: number}[] = [];

// interface nommée
interface Coords {
  x: number;
  y: number;
  [key: string]: any; // rend l'objet extensible
}

const coordsList2: Coords[] = [];

function useCoords(coords: Coords) {

}

interface Todo {
  readonly id?: number; // id readonly et optionnel
  title: string;
  completed: boolean;
}


const coordsA: Coords = {
  x: 1,
  y: 2,
};

coordsA.z = 3;

// on ne peut pas étendre ou modidier les objets autres
// Math.sum = (a, b) => a + b;
// delete Math.random;
