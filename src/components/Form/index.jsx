import React from 'react';
import { string, func } from 'prop-types';

function Form({
  buttonName, valueInput, onChange, onClick,
}) {
  return (
    <form onSubmit={onClick}>
      <input type="text" value={valueInput} onChange={onChange} />
      <button type="button" onClick={onClick}>{buttonName}</button>
    </form>
  );
}

Form.propTypes = {
  buttonName: string.isRequired,
  valueInput: string.isRequired,
  onChange: func.isRequired,
  onClick: func.isRequired,
};

export default Form;
