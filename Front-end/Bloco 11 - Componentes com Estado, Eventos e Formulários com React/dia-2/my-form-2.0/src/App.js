import React from 'react';
import './App.css';
import Form from './components/Form';
import FormDataDisplay from './components/FormDataDisplay';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  job: '',
  jobDescription: '',
  submitted: false,
  warned: false,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  changeHandler = (e) => {
    let { name, value } = e.target;

    name === 'name' && (value = value.toUpperCase());
    name === 'address' && (value = this.validateAddress(value));

    this.setState(() => ({
      [name]: value,
    }));
  };

  onBlurHandler = (e) => {
    let { name, value } = e.target;

    name === 'city' && (value = value.match(/^\d/) ? '' : value);

    this.setState(() => ({
      [name]: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  validateAddress = (address) => address.replace(/[^a-zA-Z ]/g, '');

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };

  sendForm = () => {
    this.setState({ submitted: true });
  };

  setWarned = () => {
    this.setState({ warned: true });
  }
  render() {
    const { submitted } = this.state;

    return (
      <main>
        <Form
          sendForm={this.sendForm}
          resetForm={this.resetForm}
          changeHandler={this.changeHandler}
          onBlurHandler={this.onBlurHandler}
          setWarned={this.setWarned}
          currentState={this.state}
        />
        {submitted && <FormDataDisplay currentState={this.state} />}
      </main>
    );
  }
}

export default App;
