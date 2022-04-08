import React from 'react';

function ComboBox({ options }) {
  return (
    <select>
      {options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
}

export default ComboBox;
