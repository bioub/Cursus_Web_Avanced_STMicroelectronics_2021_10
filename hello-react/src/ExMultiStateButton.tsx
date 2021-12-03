import React, { Component } from 'react';

class ExMultiStateButton extends Component {
  state = {
    items: ['Rouge', 'Vert', 'Bleu'],
    selected: 'Vert',
  };
  render() {
    const { selected } = this.state;
    // Au click du bouton afficher la prochaine valeur du tableau
    // si plus de valeur revenir à la première
    // si besoin utiliser .indexOf sur Array (voir doc MDN)
    return <button className="ExMultiStateButton">{selected}</button>;
  }
}

export default ExMultiStateButton;
