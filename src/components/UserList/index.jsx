import React from 'react';
import { string } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import userList from '../../mocks/userList';
import './style.css';

function UserList({ name }) {
  return (
    <div className="users-container">
      <h1 className="users-title">Usuários Onlines</h1>
      <ul className="users-list">
        <li>{name}</li>
        {userList.map((user) => (<li key={uuidv4()}>{user}</li>))}
      </ul>
    </div>
  );
}

UserList.propTypes = {
  name: string.isRequired,
};

export default UserList;
