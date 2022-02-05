import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import messages from '../../mocks/messages';
import ConditionalComponent from '../ConditionalComponent';
import './style.css';

function Messages() {
  const { userName } = useSelector((state) => state.userReducer);
  const typing = true;
  return (
    <div className="messages-list">
      <ul className="ul-messages">
        {messages.map((message) => {
          const checkUserName = message.username === userName ? 'you' : 'others';
          return (
            <li className={`li-messages-${checkUserName}`} key={uuidv4()}>
              <div className={`message-box-${checkUserName}`}>
                <p className={`message-username-${checkUserName}`}>{message.username}</p>
                <p className={`message-${checkUserName}`}>{message.message}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <ConditionalComponent condition={typing} className="typing">
        <p>Está digitando...</p>
      </ConditionalComponent>
    </div>
  );
}

export default Messages;
