import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
