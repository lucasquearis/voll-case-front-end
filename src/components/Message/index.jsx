import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionError } from '../../redux/actions/app';
import ConditionalComponent from '../ConditionalComponent';

function Message() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.appReducer);

  const confirm = () => {
    dispatch(actionError(false));
  };

  return (
    <ConditionalComponent className="already-exist" condition={error}>
      <h1>
        {error}
        <button type="button" onClick={() => confirm()}>
          OK
        </button>
      </h1>
    </ConditionalComponent>
  );
}

export default Message;
