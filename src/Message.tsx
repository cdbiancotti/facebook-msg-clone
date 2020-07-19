import React, { useState } from 'react';

type Props = {
  text: string;
};

const Message: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
};

export default Message;
