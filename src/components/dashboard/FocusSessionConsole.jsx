import { useEffect, useRef, useState } from 'react';
import DashboardPanel from '../dashboard/DashboardPanel';
import useStudyTimer from '../../hooks/useStudyTimer';

function FocusSessionConsole({ onCompleteSession }) {
  const [mode, setMode] = useState('timer');
  const [targetMinutes, setTargetMinutes] = useState('25');

  const targetSeconds = Math.min(600, Math.max(0, Number(targetMinutes) || 0)) * 60;

  const { elapsedSeconds, displaySeconds, isRunning, isComplete, startedAt, start, pause, reset } = useStudyTimer(mode, targetSeconds);

  const automaticSessionSaved = useRef(false);

  useEffect(() => {
    if (!isComplete || automaticSessionSaved.current) return;

    const newSession = {
      id: crypto.randomUUID(),
      mode,
      targetSeconds,
      durationSeconds: elapsedSeconds,
      startedAt,
      completedAt: new Date().toISOString(),
    };

    onCompleteSession(newSession);

    automaticSessionSaved.current = true;
  }, [isComplete, elapsedSeconds, mode, targetSeconds, startedAt, onCompleteSession]);

  useEffect(() => {
    if (!isComplete) {
      automaticSessionSaved.current = false;
    }
  }, [isComplete]);

  function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    if (hours > 0) {
      return [hours, minutes, seconds].map((value) => String(value).padStart(2, '0')).join(':');
    }

    return [minutes, seconds].map((value) => String(value).padStart(2, '0')).join(':');
  }

  function handleModeChange(newMode) {
    reset();
    setMode(newMode);
  }

  function handleFinish() {
    const finalDuration = isRunning ? pause() : elapsedSeconds;

    if (finalDuration <= 0) return;

    const newSession = {
      id: crypto.randomUUID(),
      mode,
      targetSeconds: mode === 'timer' ? targetSeconds : null,
      durationSeconds: finalDuration,
      startedAt,
      completedAt: new Date().toISOString(),
    };

    onCompleteSession(newSession);

    reset();
  }

  const status = isRunning ? 'RUNNING' : isComplete ? 'COMPLETE' : elapsedSeconds > 0 ? 'PAUSED' : 'IDLE';

  return (
    <DashboardPanel title="FOCUS SESS CONSOLE" subtitle={`Status: ${status}`}>
      <div className="flex flex-col gap-4 font-mono">
        {/* Mode */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => handleModeChange('timer')}
            className={`rounded-md border px-3 py-2 text-xs font-semibold tracking-wider transition ${
              mode === 'timer'
                ? 'border-[var(--border-color)] bg-[var(--hover-bg)] text-[var(--text-color)]'
                : 'border-[var(--border-color)] bg-[var(--dashboard-bg)] text-[var(--muted-text)] hover:bg-[var(--hover-bg)] hover:text-[var(--text-color)]'
            }`}
          >
            TIMER
          </button>

          <button
            onClick={() => handleModeChange('stopwatch')}
            className={`rounded-md border px-3 py-2 text-xs font-semibold tracking-wider transition ${
              mode === 'stopwatch'
                ? 'border-[var(--border-color)] bg-[var(--hover-bg)] text-[var(--text-color)]'
                : 'border-[var(--border-color)] bg-[var(--dashboard-bg)] text-[var(--muted-text)] hover:bg-[var(--hover-bg)] hover:text-[var(--text-color)]'
            }`}
          >
            STOPWATCH
          </button>
        </div>

        {/* Timer duration */}
        {mode === 'timer' && (
          <div>
            <label className="mb-2 block text-xs tracking-wider text-[var(--muted-text)]">STUDY DURATION // MINUTES</label>

            <input
              type="number"
              min="1"
              max="600"
              value={targetMinutes}
              onChange={(event) => {
                const value = Number(event.target.value);

                if (value > 600) {
                  setTargetMinutes('600');
                } else {
                  setTargetMinutes(event.target.value);
                }
              }}
              disabled={elapsedSeconds > 0 || isRunning}
              className="w-full rounded-md border border-[var(--border-color)] bg-[var(--dashboard-bg)] px-3 py-2 text-sm text-[var(--text-color)] outline-none focus:ring-1 focus:ring-[var(--muted-text)] disabled:opacity-50"
            />
          </div>
        )}

        {/* Clock */}
        <div className="flex flex-col items-center justify-center rounded-md border border-[var(--border-color)] bg-[var(--dashboard-bg)] py-7">
          <p className="text-4xl font-bold tracking-wider whitespace-nowrap text-amber-400">[ {formatTime(displaySeconds)} ]</p>

          <p className="mt-3 text-xs tracking-[0.2em] text-[var(--muted-text)]">MODE: {mode.toUpperCase()}</p>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-2 gap-2">
          {!isRunning ? (
            <button
              onClick={start}
              disabled={isComplete || (mode === 'timer' && targetSeconds <= 0)}
              className="rounded-md bg-emerald-600 px-3 py-3 text-sm font-bold tracking-wide text-zinc-950 transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {elapsedSeconds > 0 ? 'RESUME' : 'SYS_START'}
            </button>
          ) : (
            <button
              onClick={pause}
              className="rounded-md bg-amber-500 px-3 py-3 text-sm font-bold tracking-wide text-zinc-950 transition hover:bg-amber-400"
            >
              PAUSE
            </button>
          )}

          <button
            onClick={handleFinish}
            disabled={elapsedSeconds <= 0}
            className="rounded-md bg-[var(--hover-bg)] px-3 py-3 text-sm font-bold tracking-wide text-[var(--text-color)] transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
          >
            FINISH
          </button>

          <button
            onClick={reset}
            disabled={elapsedSeconds <= 0 && !isComplete}
            className="col-span-2 rounded-md border border-[var(--border-color)] px-3 py-2 text-xs font-semibold tracking-wide text-[var(--muted-text)] transition hover:bg-[var(--hover-bg)] hover:text-[var(--text-color)] disabled:opacity-30"
          >
            SYS_RESET
          </button>
        </div>
      </div>
    </DashboardPanel>
  );
}

export default FocusSessionConsole;
