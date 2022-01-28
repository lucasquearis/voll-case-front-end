import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

function Login() {
  const navigate = useNavigate();

  const { setUsernameProvider, usernameProvider } = useContext(UserContext);

  const loginHandler = () => {
    navigate('/chat');
  };

  return (
    <div>
      <h1>Seja muito Bem Vindo(a) ao My Personal Chat!</h1>
      <p>Como podemos lhe chamar?</p>
      <form>
        <input
          value={usernameProvider}
          onChange={({ target: { value } }) => setUsernameProvider(value)}
          type="text"
          placeholder="Usuário(a)"
        />
        <button onClick={loginHandler} type="button">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
