import './App.css';
import { RegistrationFormControlled } from './RegistrationFormControlled';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';

function App() {
  return (
    <>
      <RegistrationFormUncontrolled />
      <RegistrationFormControlled />
    </>
  );
}

export default App;
