// Exercice JSX et Props
// Créer un composant sous forme de class (class component)
// Déclarer l'interface ContactUpdateFormProps
// telle que l'appel dans App fonctionne
// La méthode render doit retourner le JSX
// correspondant au HTML suivant
/*
<form class="ContactUpdateForm">
  <div class="row">
    Prénom : <input type="text" value="Romain" />
  </div>
  <div class="row">
    Age : <input type="number" value="36" />
  </div>
  <div class="row">
    Est Formateur : <input type="checkbox" checked />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
*/

import { ChangeEvent, Component } from 'react';
import { ContactInterface } from './ContactInterface';



class ContactCreateForm extends Component {
  state: ContactInterface = {
    prenom: 'Romain',
    age: 36,
    isTrainer: true,
  }

  // handlePrenomChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   this.setState({
  //     prenom: event.target.value,
  //   })
  // }

  handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [event.target.name]: event.target.checked,
    })
  }

  render() {
    const { prenom, age, isTrainer } = this.state;

    return (
      <form className="ContactUpdateForm">
        <div className="row">
          Prénom : <input type="text" name="prenom" value={prenom} onChange={this.handleChangeText} />
        </div>
        <div className="row">
          Age : <input type="number" name="age" value={age} onChange={this.handleChangeText}  />
        </div>
        <div className="row">
          Est Formateur : <input type="checkbox" name="isTrainer" checked={isTrainer} onChange={this.handleChangeCheckbox}   />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default ContactCreateForm;
