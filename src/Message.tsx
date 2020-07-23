import React, { useState, forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';
import { MsgObject } from './App';

type Props = {
  message: MsgObject;
  username: string;
};

// TODO: Find the correct types of prop 'ref'
const Message: React.FC<Props> = forwardRef(({ message, username }, ref: any) => {
  const isUser = username === message.username;
  return (
    // TODO: Learn BEM
    <div ref={ref}>
      <Card className={`message-card ${isUser && 'user-message'}`}>
        <CardContent>
          <Typography variant='h5' component='h2' color='textSecondary'>
            {message.username}: {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
