import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { key, name, label, type, limit, required, extraConfig } = this.props;

    let element = (
      <>
        <label htmlFor={name}>
          {label}
          <input
            key={key}
            id={name}
            type={type}
            maxLength={limit}
            required={required}
          />
        </label>
      </>
    );

    document.createElement('p').style.textTransform = 'uppercase';
    if (extraConfig) element = extraConfig(element);

    return element;
  }
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number,
  required: PropTypes.bool,
  extraConfig: PropTypes.func,
};
export default Input;
