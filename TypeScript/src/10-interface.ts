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
}

const coordsList2: Coords[] = [];

function useCoords(coords: Coords) {

}
