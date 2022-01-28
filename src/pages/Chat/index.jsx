import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

function Chat() {
  const { usernameProvider } = useContext(UserContext);
  if (!usernameProvider) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>{`Bem vindo ao chat ${usernameProvider}`}</h1>
      <ul className="users-list">
        <li>Fulano</li>
        <li>{usernameProvider}</li>
      </ul>
      <ul className="messages-list">
        <li>Fulano: Oláa</li>
      </ul>
      <form>
        <input type="text" />
        <button type="button">Enviar</button>
      </form>
    </div>
  );
}

export default Chat;
