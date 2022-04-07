import React, { Component } from 'react';

class Fieldset extends Component {
  render() {
    const { key, legend } = this.props;

    return(
      <fieldset key={key}>
        <legend>{legend}</legend>
      </fieldset>
    );
  }

}
export default Fieldset;