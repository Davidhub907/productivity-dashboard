import { useEffect, useRef, useState } from 'react';

function useStudyTimer(mode, targetSeconds) {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [startedAt, setStartedAt] = useState(null);

  const startTimeRef = useRef(null);
  const elapsedAtStartRef = useRef(0);

  useEffect(() => {
    if (!isRunning) return;

    function updateTimer() {
      const secondsSinceStart = Math.floor((Date.now() - startTimeRef.current) / 1000);

      let newElapsed = elapsedAtStartRef.current + secondsSinceStart;

      if (mode === 'timer' && newElapsed >= targetSeconds) {
        newElapsed = targetSeconds;

        setElapsedSeconds(newElapsed);
        setIsRunning(false);
        setIsComplete(true);

        return;
      }

      setElapsedSeconds(newElapsed);
    }

    updateTimer();

    const interval = setInterval(updateTimer, 250);

    return () => clearInterval(interval);
  }, [isRunning, mode, targetSeconds]);

  function start() {
    if (isRunning || isComplete) return;
    if (mode === 'timer' && targetSeconds <= 0) return;

    if (!startedAt) {
      setStartedAt(new Date().toISOString());
    }

    elapsedAtStartRef.current = elapsedSeconds;
    startTimeRef.current = Date.now();

    setIsRunning(true);
  }

  function pause() {
    if (!isRunning) {
      return elapsedSeconds;
    }

    const secondsSinceStart = Math.floor((Date.now() - startTimeRef.current) / 1000);

    let newElapsed = elapsedAtStartRef.current + secondsSinceStart;

    if (mode === 'timer') {
      newElapsed = Math.min(newElapsed, targetSeconds);
    }

    setElapsedSeconds(newElapsed);
    setIsRunning(false);

    return newElapsed;
  }

  function reset() {
    setElapsedSeconds(0);
    setIsRunning(false);
    setIsComplete(false);
    setStartedAt(null);

    startTimeRef.current = null;
    elapsedAtStartRef.current = 0;
  }

  const displaySeconds = mode === 'timer' ? Math.max(targetSeconds - elapsedSeconds, 0) : elapsedSeconds;

  return {
    elapsedSeconds,
    displaySeconds,
    isRunning,
    isComplete,
    startedAt,
    start,
    pause,
    reset,
  };
}

export default useStudyTimer;
