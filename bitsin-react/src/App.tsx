import React from 'react'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function Incrementation() {
    setCount(count + 1);
  }

  function Decrementation() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>You’ve never backed down from anything in your life. Even maybe when you should’ve.</h1>
      <h2>Count: {count}</h2>
      <button onClick={Incrementation}>Increment</button>
      <button onClick={Decrementation}>Decrement</button>
    </div>
  );
}

export default App;