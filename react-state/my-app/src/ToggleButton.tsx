import { useState } from 'react';

type Props = {
  text: string;
  color: string;
};

export function ToggleButton({ text, color }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('isClicked on mount', isClicked);

  function handleClick() {
    console.log('isClicked before setter', isClicked);
    setIsClicked(!isClicked);
    console.log('isClicked after setter', isClicked);
  }

  return (
    <button
      style={{ backgroundColor: isClicked ? color : 'white', color: 'black' }}
      onClick={handleClick}>
      {text}
    </button>
  );
}
