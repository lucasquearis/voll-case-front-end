import React from 'react';
import { Navigate } from 'react-router-dom';

function Chat() {
  const username = 'lucas';
  if (!username) {
    return <Navigate to="/login" />;
  }
  return (<h1>{`Bem vindo ao chat ${username}`}</h1>);
}

export default Chat;
