import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Form from '../../components/Form';
import Messages from '../../components/Messages';
import NotFoundUserName from '../../components/notFoundUserName';
import UserList from '../../components/UserList';
import useInput from '../hooks/useInput';
import messages from '../../redux/thunk/messages';
import ConditionalComponent from '../../components/ConditionalComponent';
import './style.css';
import { actionTyping } from '../../redux/actions/socket';

function Chat() {
  const dispatch = useDispatch();
  const [typing, setTyping] = useState(false);
  const [message, setMessage, setStateMessage] = useInput('');
  const { userName } = useSelector((state) => state.userReducer);
  const { socket } = useSelector((state) => state.socketReducer);
  const typingReducer = useSelector((state) => state.messagesReducer.typing);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('newMessage', { userName, message });
    setStateMessage('');
  };

  useEffect(() => {
    socket.emit('typing', { typing, userName });
  }, [typing]);

  useEffect(() => {
    socket.on('message', () => {
      dispatch(messages());
    });
    socket.on('typingList', (list) => dispatch(actionTyping(list)));
  }, [dispatch]);

  const typingSender = (e) => {
    e.preventDefault();
    setTyping(true);
    setMessage(e);
    setTimeout(() => setTyping(false), 700);
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
        <Form buttonName="Enviar" valueInput={message} onChange={typingSender} onClick={sendMessage} />
      </div>
      <ConditionalComponent className="typing-message" condition={typingReducer.length > 0}>
        {typingReducer.map((name) => {
          if (name.length > 0) {
            return (<p key={uuidv4()}>{`${name} está digitando...`}</p>);
          }
          return null;
        })}
      </ConditionalComponent>
    </div>
  ) : <NotFoundUserName />;
}

export default Chat;
