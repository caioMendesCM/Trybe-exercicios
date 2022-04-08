import React from 'react';

class ProfessionalFormForm extends React.Component {
  render() {
    const { changeHandler, setWarned, currentState } = this.props;
    return (
      <fieldset>
        <legend>Dados profissionais:</legend>
        <div className='container'>
          Resumo do currículo:
          <textarea
            name='resume'
            maxLength='1000'
            required
            onChange={changeHandler}
          />
        </div>
        <div className='container'>
          Cargo:
          <input
            type='text'
            name='job'
            maxLength='40'
            required
            onChange={changeHandler}
            onMouseEnter={() => {
              !currentState.warned && alert('Preencha com cuidado esta informação.');
              setWarned();
            }}
          />
        </div>
        <div className='container'>
          Descrição do cargo:
          <textarea
            name='jobDescription'
            maxLength='500'
            onChange={changeHandler}
          />
        </div>
      </fieldset>
    );
  }
}

export default ProfessionalFormForm;
