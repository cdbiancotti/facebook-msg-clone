import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['']);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // effect
    // return () => {
    setUserName(prompt('Select a name to use inside this chat:') || '');
    // console.log(input);
    // console.log(messages);
    // cleanup
    // };
    // When [] is empty the code at useEffect runs ONCE when the app loads
  }, []);

  const sendMsg = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMessages([...messages, userName + ': ' + input]);
    setInput('');
  };

  return (
    <div className='App'>
      <h1>Hi Bra!</h1>
      <form>
        {/* input field */}
        <FormControl>
          <InputLabel>Write a message...</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        {/* <input value={input} onChange={(e) => setInput(e.target.value)} /> */}
        {/* button */}
        <Button type='submit' disabled={!input} variant='contained' color='primary' onClick={sendMsg}>
          Send
        </Button>
      </form>
      {/* messages themself */}
      {messages.map((message) => (
        <>
          <Message text={message} />
          {/* <p key={message}>{message}</p> */}
        </>
      ))}
    </div>
  );
}

export default App;
