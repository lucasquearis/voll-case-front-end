import React from 'react';
import { useSelector } from 'react-redux';

function HeaderChat() {
  const { userName } = useSelector((state) => state.userReducer);

  return (
    <header className="chat-header">
      <h1 className="header-name">{`Bem vindo ao chat ${userName}!`}</h1>
    </header>
  );
}

export default HeaderChat;
