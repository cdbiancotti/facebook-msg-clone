import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['']);

  console.log(input);

  const sendMsg = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMessages([...messages, input]);
  };

  return (
    <div className='App'>
      <h1>Hi Bra!</h1>
      {/* input field */}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {/* button */}
      <button onClick={sendMsg}>Send</button>
      {/* messages themself */}
    </div>
  );
}

export default App;
