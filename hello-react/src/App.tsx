import React from 'react';
import './App.css';
import Clock from './Clock';
import Hello from './Hello';
import ContactUpdateForm from './ContactUpdateForm'
import { ContactInterface } from './ContactInterface';

function App() {

  const contact: ContactInterface = {
    prenom: 'Romain',
    age: 36,
    isTrainer: true,
  };

  return (
    <div className="App">
      <Hello />
      <Hello name="Toto" /> {/* React.createElement(Hello, { name: 'Toto' }) */}
      <Clock format="HH:mm" delay={1000} />
      <ContactUpdateForm contact={contact} />
    </div>
  );
}

export default App;
