import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../../components/Form';
import Messages from '../../components/Messages';
import NotFoundUserName from '../../components/notFoundUserName';
import UserList from '../../components/UserList';
import useInput from '../hooks/useInput';
import './style.css';

function Chat() {
  const [message, setMessage, setStateMessage] = useInput('');
  const { userName } = useSelector((state) => state.userReducer);
  const { socket } = useSelector((state) => state.socketReducer);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('newMessage', { userName, message });
    setStateMessage('');
  };

  return userName ? (
    <div className="chat-container">
      <h1 className="header-name">{`Bem vindo ao chat ${userName}!`}</h1>
      <div className="users-box">
        <div className="userlist">
          <UserList />
        </div>
        <Messages />
      </div>
      <div className="message-form">
        <Form buttonName="Enviar" valueInput={message} onChange={setMessage} onClick={sendMessage} />
      </div>
    </div>
  ) : <NotFoundUserName />;
}

export default Chat;
