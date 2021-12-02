import React from 'react';
import './App.css';
import Clock from './Clock';
import Hello from './Hello';
import ContactUpdateForm from './ContactUpdateForm'
import { ContactInterface } from './ContactInterface';
import Counter from './Counter';

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

  return (
    <div className="App">
      <Hello />
      <Hello name="Toto" /> {/* React.createElement(Hello, { name: 'Toto' }) */}
      <Clock format="HH:mm:ss" delay={1000} />
      <ContactUpdateForm contact={contact} /> {/* React.createElement(Hello, { contact: contact }) */}
      <Counter />
    </div>
  );
}

export default App;
