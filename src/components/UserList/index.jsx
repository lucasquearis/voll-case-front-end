import React from 'react';
import { string } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import userList from '../../mocks/userList';

function UserList({ name }) {
  return (
    <ul className="users-list">
      <li>{name}</li>
      {userList.map((user) => (<li key={uuidv4()}>{user}</li>))}
    </ul>
  );
}

UserList.propTypes = {
  name: string.isRequired,
};

export default UserList;
