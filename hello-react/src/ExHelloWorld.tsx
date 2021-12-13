import React, { ChangeEvent, Component } from 'react';

class ExHelloWorld extends Component {
  state = {
    name: 'Romain',
  }; /* ajouter une clé name dans le state */

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { name } = this.state;
    return (
      <div className="ExHelloWorld">
        <div>
          Prénom : <input value={name} onChange={this.handleChange} />{' '}
          {/* écouter l'événement input et mettre à jour le state */}
        </div>
        <p>Bonjour {name}</p>
      </div>
    );
  }
}

export default ExHelloWorld;
