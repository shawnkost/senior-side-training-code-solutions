import { useState } from 'react';
import { FaCheck, FaX } from 'react-icons/fa6';

export function ValidatedInput() {
  const [value, setValue] = useState<string>();

  function validate(password: string | undefined): string | undefined {
    if (password === undefined) return 'Password is required';

    const passTrim = password.trim();

    if (!passTrim) return 'Password is required';
    if (passTrim.length < 8) return 'Password must be at least 8 characters';
    if (!/\d/g.test(passTrim)) return 'Password must contain a number.';
    if (!/[A-Z]/g.test(passTrim))
      return 'Password must contain an uppercase letter';
    if (!/[!@#$%^&*()]/g.test(passTrim))
      return 'Password must contain a special character';
  }

  const error = validate(value);

  return (
    <>
      <label htmlFor="password" style={{ display: 'block' }}>
        Password
      </label>
      <input
        name="password"
        type="password"
        id="password"
        onChange={(e) => setValue(e.target.value)}
        value={value ?? ''}
        style={{ marginRight: '.5rem' }}
      />
      {error ? <FaX color="red" /> : <FaCheck color="green" />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}
