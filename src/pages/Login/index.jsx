import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { actionUser } from '../../redux/actions/user';
import Form from '../../components/Form';
import './style.css';
import ConditionalComponent from '../../components/ConditionalComponent';
import { actionUserList } from '../../redux/actions/socket';

function Login() {
  const { socket, userList } = useSelector((state) => state.socketReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  socket.on('userList', (list) => dispatch(actionUserList(list)));

  const [name, setName] = useInput('');
  const [alreadyRegisteredUser, setAlreadyRegisteredUser] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    if (userList.some((user) => user.name === name)) {
      return setAlreadyRegisteredUser(true);
    }
    socket.emit('newUser', name);
    dispatch(actionUser(name));
    return navigate('/chat');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Seja muito Bem Vindo(a) ao My Personal Chat!</h1>
        <p>Como podemos lhe chamar?</p>
        <Form buttonName="Entrar" valueInput={name} onChange={setName} onClick={loginHandler} />
      </div>
      <ConditionalComponent className="already-exist" condition={alreadyRegisteredUser}>
        <h1>
          Usuário com esse nome já encontra-se na sala.
          <button type="button" onClick={() => setAlreadyRegisteredUser(false)}>
            OK
          </button>
        </h1>
      </ConditionalComponent>
    </div>
  );
}

export default Login;
