class Contact {
  hello() {
    // les pseudos variables this et arguments
    // sont créées automatiquement au moment de l'appel
    console.log(this);
    console.log(arguments);
    // console.log(super);
    // console.log(new.target);
  }
}

const contact = new Contact();
contact.hello('Toto', 'Titi');

// on peut choisir la valeur de this
contact.hello.call({ prenom: 'Romain' }, 'Toto', 'Titi');
const helloThisForcé = contact.hello.bind({ prenom: 'Romain' });
helloThisForcé('Toto', 'Titi')

class Contact2 {
  hello() {
    const interne = function() {
      // les pseudos variables this et arguments
      // sont créées automatiquement au moment de l'appel
      console.log(this);
      console.log(arguments);
      // console.log(super);
      // console.log(new.target);
    };

    interne('Tata', 'Tutu');
  }
}


const contact2 = new Contact2();
contact2.hello('Toto', 'Titi');


class Contact3 {
  hello() {
    // c'est ce this et ce arguments qui seront utilisés
    const interne = () => {
      // les pseudos variables this et arguments ne sont pas créées
      // dans une fonction fléchée
      console.log(this);
      console.log(arguments);
      // console.log(super);
      // console.log(new.target);
    };

    interne('Tata', 'Tutu');
  }
}


const contact3 = new Contact3();
contact3.hello('Toto', 'Titi');
