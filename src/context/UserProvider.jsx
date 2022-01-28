import React, { /* useEffect, */useMemo, useState } from 'react';
import PropTypes from 'prop-types';
// import socketIoClient from 'socket.io-client';
import UserContext from './UserContext';

// const ENDPOINT = 'http://localhost:3001';

function UserProvider({ children }) {
  const [usernameProvider, setUsernameProvider] = useState('');
  // const [serverResponse, setServerResponse] = useState('');

  // useEffect(() => {
  //   const socket = socketIoClient(ENDPOINT);
  //   socket.on('ping', (data) => {
  //     setServerResponse(data);
  //   });
  //   console.log(serverResponse);
  // }, []);

  const context = useMemo(() => ({
    usernameProvider,
    setUsernameProvider,
  }), [usernameProvider]);

  return (
    <UserContext.Provider value={context}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default UserProvider;
