import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    navigate('/chat');
  };

  const inputHandler = ({ target: { value } }) => {
    setUsername(value);
  };

  return (
    <div>
      <h1>Eu sou o Login</h1>
      <form>
        <input value={username} onChange={inputHandler} type="text" placeholder="UserName" />
        <button onClick={loginHandler} type="button">
          Log-in
        </button>
      </form>
    </div>
  );
}

export default Login;
