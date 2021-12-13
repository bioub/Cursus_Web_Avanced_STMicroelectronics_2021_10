import React, { Component } from 'react';

interface Props {
  items: string[],
  selected: string;
  onSelected: (selected: string) => void;
}

class ExMultiStateButton extends Component<Props> {
  state = {
    // items: ['Rouge', 'Vert', 'Bleu'],
    // selected: 'Vert',
  };
  handleClick = () => {
    const { items, selected } = this.props;
    const index = items.indexOf(selected);

    // this.setState({
    //   selected: items[(index + 1) % items.length],
    // });
    this.props.onSelected(items[(index + 1) % items.length]);
  };
  render() {
    const { selected } = this.props;
    // Au click du bouton afficher la prochaine valeur du tableau
    // si plus de valeur revenir à la première
    // si besoin utiliser .indexOf sur Array (voir doc MDN)
    return <button className="ExMultiStateButton selected" onClick={this.handleClick}>{selected}</button>;
  }
}

export default ExMultiStateButton;
