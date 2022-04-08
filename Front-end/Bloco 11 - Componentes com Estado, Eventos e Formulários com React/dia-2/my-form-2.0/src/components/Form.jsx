import React from 'react';
import PersonalForm from './PersonalForm'
import ProfessionalForm from './ProfessionalForm'


class Form extends React.Component {
  render() {
    const { sendForm, resetForm, changeHandler, currentState, onBlurHandler, setWarned} = this.props;

    return (
      <form>
        <PersonalForm
          changeHandler={ changeHandler }
          onBlurHandler= { onBlurHandler }
          currentState= { currentState }
        />
        <ProfessionalForm changeHandler={ changeHandler } setWarned={setWarned} currentState= { currentState } />
        <input
            type="button"
            onClick={ sendForm }
            value="Enviar"
        />
        <input
          type="reset"
          onClick={ resetForm }
          value="Limpar"
        />
      </form>
    );
  }
}

export default Form;
