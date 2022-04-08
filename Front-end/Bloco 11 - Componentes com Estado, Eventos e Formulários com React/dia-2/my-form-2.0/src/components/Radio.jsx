import React from 'react';

function Radio(props) {
  const { identifier, options } = props;
  return (
    <>
      {options.map((option) => (
        <label>
          {option}
          <input type='radio' name={identifier} />
        </label>
      ))}
    </>
  );
}

export default Radio;
