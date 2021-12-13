import './App.css';

import React, { useState } from 'react';

import Clock from './Clock';
import ContactCreateForm from './ContactCreateForm';
import { ContactInterface } from './ContactInterface';
import ContactUpdateForm from './ContactUpdateForm'
import Counter from './Counter';
import ExHelloWorld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';
import Select from './Select';

function App() {

  // state = {
  //   showClock: true,
  //   name: 'Toto',
  // }

  // [true, 'Toto'];

  //    [true, () => {}]
  const [showClock, setShowClock] = useState(true); // 0

  //    ['Toto', () => {}]
  const [name, setName] = useState('Eric'); // 1


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
      <button onClick={() => setShowClock(!showClock)}>{showClock ? 'Off' : 'On'}</button>
      {showClock && <Clock format="HH:mm:ss" delay={1000} />} {/* React.createElement(Clock, { format: "HH:mm:ss", delay: 1000 }) */}
      <ContactUpdateForm contact={contact} /> {/* React.createElement(Hello, { contact: contact }) */}
      <Counter />
      <ContactCreateForm />
      <ExHelloWorld />
      <ExMultiStateButton items={['Jean', 'Eric', 'Martin']} selected={name} onSelected={(val) => setName(val)} />
      <Select items={['Jean', 'Eric', 'Martin']} selected={name} onSelected={(val) => setName(val)} />
    </div>
  );
}

export default App;
