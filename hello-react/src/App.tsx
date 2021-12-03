import React from 'react';
import './App.css';
import Clock from './Clock';
import Hello from './Hello';
import ContactUpdateForm from './ContactUpdateForm'
import { ContactInterface } from './ContactInterface';
import Counter from './Counter';
import ContactCreateForm from './ContactCreateForm';
import ExHelloWorld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';

function App() {
  console.log('App');
  //         App
  //      /   |   \      \
  //   Hello Hello Clock ContactUpdateFrom

  const contact: ContactInterface = {
    prenom: 'Romain',
    age: 36,
    isTrainer: true,
  };

  const helloProps = {
    name: 'Toto',
  };

  return (
    <div className="App">
      <Hello />
      <Hello name="Toto" /> {/* React.createElement(Hello, { name: 'Toto' }) */}
      <Hello {...helloProps} /> {/* equivalent la ligne du dessus */}
      <Clock format="HH:mm:ss" delay={1000} /> {/* React.createElement(Clock, { format: "HH:mm:ss", delay: 1000 }) */}
      <ContactUpdateForm contact={contact} /> {/* React.createElement(Hello, { contact: contact }) */}
      <Counter />
      <ContactCreateForm />
      <ExHelloWorld />
      <ExMultiStateButton />
    </div>
  );
}

export default App;
