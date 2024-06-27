import React, { useState } from 'react';
import Bonjour from 'bonjour-lib';

const BonjourComponent = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleGreet = () => {
    const greeter = new Bonjour(name);
    setMessage(greeter.direBonjour());
  };

  return (
    <div>
      <h1>Bonjour Component</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Entrez votre nom"
      />
      <button onClick={handleGreet}>Dire Bonjour</button>
      <p>{message}</p>
    </div>
  );
};

export default BonjourComponent;