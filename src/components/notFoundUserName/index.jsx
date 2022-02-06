import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionUserList } from '../../redux/actions/socket';
import { HOME_PATH } from '../../constants/list';
import './style.css';

function NotFoundUserName() {
  const { socket } = useSelector((state) => state.socketReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('userList', (list) => dispatch(actionUserList(list)));
  }, []);

  return (
    <div className="no-user-container">
      <div className="no-user-box">
        <h1>Você não está logado, por favor clique no botão para logar corretamente</h1>
        <Link to={HOME_PATH}>
          <button type="button">
            Logar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundUserName;
