import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [usernameProvider, setUsernameProvider] = useState('');

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
