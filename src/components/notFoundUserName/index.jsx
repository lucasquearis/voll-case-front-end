import { Link } from 'react-router-dom';
import React from 'react';

function NotFoundUserName() {
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
