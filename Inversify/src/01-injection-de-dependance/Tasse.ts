import {  Contenu } from "./Contenu";

export class Tasse {


  constructor(private contenu: Contenu) {}

  showContenu() {
    console.log('Tasse de café, variété : ' + this.contenu.variete);
  }
}
