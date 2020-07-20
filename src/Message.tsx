import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';
import { MsgObject } from './App';

type Props = {
  message: MsgObject;
  username: string;
};

const Message: React.FC<Props> = ({ message, username }) => {
  const isUser = username === message.username;
  return (
    // TODO: Learn BEM
    <Card className={`message-card ${isUser && 'user-message'}`}>
      <CardContent>
        <Typography variant='h5' component='h2' color='textSecondary'>
          {message.username}: {message.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Message;
