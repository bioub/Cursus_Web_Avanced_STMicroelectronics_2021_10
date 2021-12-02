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

import { Component } from 'react';
import { ContactInterface } from './ContactInterface';

interface ContactUpdateFormProps {
  contact: ContactInterface;
}

class ContactUpdateForm extends Component<ContactUpdateFormProps> {
  render() {
    const { contact } = this.props;

    return (
      <form className="ContactUpdateForm">
        <div className="row">
          Prénom : <input type="text" value={contact.prenom} />
        </div>
        <div className="row">
          Age : <input type="number" value={contact.age} />
        </div>
        <div className="row">
          Est Formateur : <input type="checkbox" checked={contact.isTrainer} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default ContactUpdateForm;
