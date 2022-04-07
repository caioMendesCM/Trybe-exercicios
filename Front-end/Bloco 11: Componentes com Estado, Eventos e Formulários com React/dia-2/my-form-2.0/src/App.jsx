import './App.css';
import Fieldset from './components/Fieldset';
import Input from './components/Input';

//keys: 10 = Fieldset, 20 = input;

function App() {
  function elementTextToUpperCase(element) {
    element.style.textTransform = 'uppercase';
    return element;
  }

  return (
    <div>
      <Fieldset key={10 - 1} legend={'Personal Data'}>
        <Input
          key={20 - 1}
          name={'name'}
          label={'Nome:'}
          limit={40}
          required={true}
          extraConfig={elementTextToUpperCase}
        />
      </Fieldset>
    </div>
  );
}

export default App;
