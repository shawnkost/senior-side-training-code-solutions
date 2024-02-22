import { FaPlay, FaPause } from 'react-icons/fa';
import './Stopwatch.css';
import { useState } from 'react';

export function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timer>();

  function handlePlay() {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(undefined);
    } else {
      const id = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
      setTimerId(id);
    }
  }

  function handlePause() {
    clearInterval(timerId);
    setTimerId(undefined);
  }

  function handleReset() {
    if (timerId) return;
    setElapsedTime(0);
  }

  return (
    <>
      <div className="circle" onClick={handleReset}>
        <p>{elapsedTime}</p>
      </div>
      {timerId ? (
        <FaPause onClick={handlePause} />
      ) : (
        <FaPlay onClick={handlePlay} />
      )}
    </>
  );
}
