import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

function Chat() {
  const { usernameProvider } = useContext(UserContext);
  if (!usernameProvider) {
    return <Navigate to="/login" />;
  }
  return (<h1>{`Bem vindo ao chat ${usernameProvider}`}</h1>);
}

export default Chat;
