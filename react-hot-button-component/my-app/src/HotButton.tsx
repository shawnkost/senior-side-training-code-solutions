import { useState } from "react";
import './HotButton.css'

export function HotButton() {
  const [clicks, setClicks] = useState(0);

  let temp;

  switch (true) {
    case clicks >= 3 && clicks < 6:
      temp = 'cold';
      break;
    case clicks >= 6 && clicks < 9:
      temp = 'cool';
      break;
    case clicks >= 9 && clicks < 12:
      temp = 'tepid';
      break;
    case clicks >= 12 && clicks < 15:
      temp = 'warm';
      break;
    case clicks >= 15 && clicks < 18:
      temp = 'hot';
      break;
    case clicks >= 18:
      temp = 'nuclear';
      break;
    default:
      temp = '';
  }

  return (
    <>
      <button className={`hot-button ${temp}`} onClick={() => setClicks((prev) => prev + 1)}>Hot Button</button>
      <p>Clicks: {clicks}</p>
    </>
  )
}
