import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionUserList } from '../../redux/actions/socket';

function NotFoundUserName() {
  const { socket } = useSelector((state) => state.socketReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('userList', (list) => dispatch(actionUserList(list)));
  }, []);

  return (
    <div>
      <h1>Você não está logado, por favor clique no botão para logar corretamente</h1>
      <Link to="/">
        <button type="button">
          Logar
        </button>
      </Link>
    </div>
  );
}

export default NotFoundUserName;
