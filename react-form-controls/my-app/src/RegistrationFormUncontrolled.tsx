import { FormEvent } from 'react';
import './RegistrationFormUnctrolled.css';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const { username, password } = Object.fromEntries(formData);
    console.log('formData', { username, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Form</h2>
      <label>
        Username:
        <input type="text" name="username" placeholder="Username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" placeholder="Password" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
