import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './style.css';

function Messages() {
  const { userName } = useSelector((state) => state.userReducer);
  const { messages } = useSelector((state) => state.messagesReducer);

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
                <p className={`date-time-${checkUserName}`}>{message.time}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Messages;
