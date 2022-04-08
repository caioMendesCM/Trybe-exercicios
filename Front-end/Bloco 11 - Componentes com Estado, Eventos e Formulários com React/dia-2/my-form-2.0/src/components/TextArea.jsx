import React from 'react';

function Input(props) {
  const { name, limit, required } = props;

  return (
    <label>
      {name}
      <textarea maxLength={limit} required={required} />
    </label>
  );
}

export default Input;
