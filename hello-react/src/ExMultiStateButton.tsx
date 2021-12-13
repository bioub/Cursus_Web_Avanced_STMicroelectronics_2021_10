import React, { Component } from 'react';

class ExMultiStateButton extends Component {
  state = {
    items: ['Rouge', 'Vert', 'Bleu'],
    selected: 'Vert',
  };
  handleClick = () => {
    const { items, selected } = this.state;
    const index = items.indexOf(selected);

    this.setState({
      selected: items[(index + 1) % items.length],
    });
  };
  render() {
    const { selected } = this.state;
    // Au click du bouton afficher la prochaine valeur du tableau
    // si plus de valeur revenir à la première
    // si besoin utiliser .indexOf sur Array (voir doc MDN)
    return <button className="ExMultiStateButton selected" onClick={this.handleClick}>{selected}</button>;
  }
}

export default ExMultiStateButton;
