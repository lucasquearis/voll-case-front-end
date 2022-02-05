import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../../components/Form';
import Messages from '../../components/Messages';
import NotFoundUserName from '../../components/notFoundUserName';
import UserList from '../../components/UserList';
import useInput from '../hooks/useInput';

function Chat() {
  const [message, setMessage, setStateMessage] = useInput('');
  const { userName } = useSelector((state) => state.userReducer);

  const sendMessage = (e) => {
    e.preventDefault();
    setStateMessage('');
  };

  return userName ? (
    <div>
      <h1>{`Bem vindo ao chat ${userName}`}</h1>
      <UserList name={userName} />
      <Messages />
      <Form buttonName="Enviar" valueInput={message} onChange={setMessage} onClick={sendMessage} />
    </div>
  ) : <NotFoundUserName />;
}

export default Chat;
