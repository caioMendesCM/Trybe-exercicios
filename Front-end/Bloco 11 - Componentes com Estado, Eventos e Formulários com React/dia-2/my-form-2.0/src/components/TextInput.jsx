import React, { useState } from 'react';

function Input(props) {
  const { name, limit, required, special, onBlur } = props;
  const [value, setValue] = useState();

  const caller = (e) => {special(e, setValue)} ;

  return (
    <label>
      {name}
      <input type='text' maxLength={limit} required={required} value={value} onInput={caller} onBlur={onBlur}/>
    </label>
  );
}

export default Input;
