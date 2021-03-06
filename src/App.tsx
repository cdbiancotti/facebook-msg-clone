import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input, IconButtonClassKey } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

export type MsgObject = {
  id: string;
  username: string;
  text: string;
  timestamp: Date;
};

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<MsgObject[]>([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => {
            const msgObject: MsgObject = {
              id: doc.id,
              username: doc.data().username,
              text: doc.data().text,
              timestamp: doc.data().timestamp,
            };
            return msgObject;
          })
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt('Select a name to use inside this chat:') || '');
    // TODO: Need some changes to add this msg
    // setMessages([{ username: 'FMClone', text: 'Hi! Welcome!' }]);
    // When [] is empty the code at useEffect runs ONCE when the app loads
  }, []);

  console.log(messages);
  const sendMsg = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    db.collection('messages').add({
      text: input,
      username: username,
      // this code give you the timestamp at the server time ( prevent problems with the difference at latitud or longitud of each user )
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([...messages, { username, text: input }]);
    setInput('');
  };

  return (
    <div className='App'>
      {username !== null && (
        <>
          <img className='app__logo' src='../public/chat-logo.svg' alt='ChatGroup Logo' title='Freepik' />
          <h1>Welcome to ChatGroup</h1>
          <h2>
            We're happy to see you<span className='app__title-username'>{username && ` ${username}`}</span>!!
          </h2>
          {/* messages themself */}
          <FlipMove className='app__flipMove'>
            {messages.map((message) => (
              <Message key={message.id} username={username} message={message} />
            ))}
          </FlipMove>
          <form className='app__form'>
            {/* input field */}
            <FormControl className='app_formControl'>
              <Input
                placeholder='Enter a message...'
                className='app__input'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              {/* button */}
              <IconButton className='app__iconButton' type='submit' disabled={!input} color='primary' onClick={sendMsg}>
                <SendIcon />
              </IconButton>
            </FormControl>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
