import React, { useState } from 'react';
import CurrencyConverter from './Components/CurrencyConverter';

function App() {
  const [count, setCount] = useState(0);

  // Increment handlers
  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    console.log('Hello! This is a static message.');
  };

  // Event with argument
  const sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic event
  const handlePress = (event) => {
    alert('I was clicked');
    console.log('Synthetic Event Object:', event);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Event Handling</h1>

      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <hr />

      <button onClick={() => sayWelcome("Welcome to React Events!")}>Say Welcome</button>

      <hr />

      <button onClick={handlePress}>OnPress</button>

      <hr />

      <CurrencyConverter />
    </div>
  );
}

export default App;
