import { useEffect, useState } from 'react';
import DashboardPanel from '../dashboard/DashboardPanel';

const POMODORO_SECONDS = 25 * 60;

function FocusSessionConsole({ assignments, courses, onCompleteSession }) {
  const [selectedAssignmentId, setSelectedAssignmentId] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(POMODORO_SECONDS);
  const [isRunning, setIsRunning] = useState(false);

  const selectedAssignment = assignments.find((assignment) => String(assignment.id) === selectedAssignmentId);

  const selectedCourse = courses.find((course) => String(course.id) === String(selectedAssignment?.courseId));

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((previousSeconds) => previousSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  function formatClock(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  function handleAssignmentChange(event) {
    setSelectedAssignmentId(event.target.value);
    setIsRunning(false);
    setSecondsLeft(POMODORO_SECONDS);
  }

  function handlePrimaryAction() {
    if (!selectedAssignment) return;

    setIsRunning((previousState) => !previousState);
  }

  function handleReset() {
    setIsRunning(false);
    setSecondsLeft(POMODORO_SECONDS);
  }

  const status = isRunning ? 'RUNNING' : secondsLeft < POMODORO_SECONDS ? 'PAUSED' : 'IDLE';

  return (
    <DashboardPanel title="FOCUS SESS CONSOLE" subtitle={`Status: ${status}`}>
      <div className="flex flex-col gap-4 font-mono">
        {/* Assignment selection */}
        <div>
          <label className="mb-2 block text-xs tracking-widest text-zinc-500">TARGET ASSIGNMENT</label>

          <select
            value={selectedAssignmentId}
            onChange={handleAssignmentChange}
            disabled={isRunning}
            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-300 transition outline-none focus:border-zinc-600"
          >
            <option value="">Select assignment...</option>

            {assignments.map((assignment) => {
              const course = courses.find((course) => String(course.id) === String(assignment.courseId));

              return (
                <option key={assignment.id} value={assignment.id}>
                  {course?.code ? `${course.code} — ` : ''}
                  {assignment.title}
                </option>
              );
            })}
          </select>
        </div>

        {/* Selected assignment info */}
        {selectedAssignment && (
          <div className="border-l-2 border-zinc-700 pl-3">
            <p className="truncate text-sm font-semibold text-zinc-300">{selectedAssignment.title}</p>

            <p className="mt-1 text-xs tracking-wide text-zinc-500">{selectedCourse?.code || selectedCourse?.name || 'UNKNOWN COURSE'}</p>
          </div>
        )}

        {/* Timer display */}
        <div className="flex flex-col items-center justify-center rounded-md border border-zinc-800 bg-zinc-950 py-7">
          <p className="text-4xl font-bold tracking-wider whitespace-nowrap text-amber-400">[ {formatClock(secondsLeft)} ]</p>

          <p className="mt-3 text-xs tracking-[0.25em] text-zinc-500">MODE: POMODORO</p>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handlePrimaryAction}
            disabled={!selectedAssignment}
            className="rounded-md bg-emerald-600 px-3 py-3 text-sm font-bold tracking-wide text-zinc-950 transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isRunning ? 'SYS_PAUSE' : 'SYS_START'}
          </button>

          <button
            onClick={handleReset}
            className="rounded-md bg-zinc-800 px-3 py-3 text-sm font-bold tracking-wide text-zinc-200 transition hover:bg-zinc-700"
          >
            SYS_RESET
          </button>
        </div>
      </div>
    </DashboardPanel>
  );
}

export default FocusSessionConsole;
