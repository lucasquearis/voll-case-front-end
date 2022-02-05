import React from 'react';
import { useSelector } from 'react-redux';
import NotFoundUserName from '../../components/notFoundUserName';

function Chat() {
  const { userName } = useSelector((state) => state.userReducer);

  return userName ? (
    <div>
      <h1>{`Bem vindo ao chat ${userName}`}</h1>
      <ul className="users-list">
        <li>Fulano</li>
        <li>{userName}</li>
      </ul>
      <ul className="messages-list">
        <li>Fulano: Oláa</li>
      </ul>
      <form>
        <input type="text" />
        <button type="button">Enviar</button>
      </form>
    </div>
  ) : <NotFoundUserName />;
}

export default Chat;
