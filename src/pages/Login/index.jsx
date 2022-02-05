import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { actionUser } from '../../redux/actions/user';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useInput('');

  const loginHandler = () => {
    navigate('/chat');
    dispatch(actionUser(name));
  };

  return (
    <div>
      <h1>Seja muito Bem Vindo(a) ao My Personal Chat!</h1>
      <p>Como podemos lhe chamar?</p>
      <form>
        <input
          value={name}
          type="text"
          placeholder="Usuário(a)"
          onChange={setName}
        />
        <button onClick={loginHandler} type="button">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
