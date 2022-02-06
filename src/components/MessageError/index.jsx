import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionError } from '../../redux/actions/app';
import ConditionalComponent from '../ConditionalComponent';
import './style.css';

function Message() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.appReducer);

  const confirm = () => {
    dispatch(actionError(false));
  };

  return (
    <ConditionalComponent className="already-exist" condition={!!error}>
      <div className="error-box">
        <h1>
          {error}
        </h1>
        <button type="button" onClick={() => confirm()}>
          OK
        </button>
      </div>
    </ConditionalComponent>
  );
}

export default Message;
