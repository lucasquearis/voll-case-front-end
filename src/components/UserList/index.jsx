import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import userList from '../../mocks/userList';
import './style.css';

function UserList() {
  const { userList } = useSelector((state) => state.socketReducer);
  return (
    <div className="users-container">
      <h1 className="users-title">Usuários Onlines</h1>
      <ul className="users-list">
        {userList.map(({ name }) => (<li key={uuidv4()}>{name}</li>))}
      </ul>
    </div>
  );
}

export default UserList;
