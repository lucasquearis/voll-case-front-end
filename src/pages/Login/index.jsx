import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { actionUser } from '../../redux/actions/user';
import Form from '../../components/Form';
import './style.css';
import { actionUserList } from '../../redux/actions/socket';
import messages from '../../redux/thunk/messages';
import { actionError } from '../../redux/actions/app';
import { ALREADY_USED_NAME, CHAT_PATH, EMPTY } from '../../constants/list';

function Login() {
  const [name, setName] = useInput(EMPTY);
  const { socket, userList } = useSelector((state) => state.socketReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('userList', (list) => dispatch(actionUserList(list)));
  }, [dispatch]);

  const loginHandler = (e) => {
    e.preventDefault();
    if (userList.some((user) => user.name === name)) {
      return dispatch(actionError(ALREADY_USED_NAME));
    }
    socket.emit('newUser', name);
    dispatch(actionUser(name));
    dispatch(messages());
    return navigate(CHAT_PATH);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Seja muito Bem Vindo(a) ao My Personal Chat!</h1>
        <p>Como podemos lhe chamar?</p>
        <Form buttonName="Entrar" valueInput={name} onChange={setName} onClick={loginHandler} />
      </div>
    </div>
  );
}

export default Login;
