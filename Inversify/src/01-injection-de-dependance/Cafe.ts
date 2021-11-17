export class Cafe implements Contenu {
  constructor(public variete: string) {}
}

export class The implements Contenu {
  constructor(public variete: string) {}
}


export interface Contenu {
  variete: string;
}
