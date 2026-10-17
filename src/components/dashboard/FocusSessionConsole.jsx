import { useEffect, useState } from 'react';

const POMODORO_SECONDS = 25 * 60;

function FocusSessionConsole({ assignments, courses, onCompleteSession }) {
  const [selectedAssignmentId, setSelectedAssignmentId] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(POMODORO_SECONDS);
  const [isRunning, setIsRunning] = useState(false);

  const selectedAssignment = assignments.find((assignment) => String(assignment.id) === selectedAssignmentId);

  const selectedCourse = courses.find((course) => String(course.id) === String(selectedAssignment?.courseId));

  useEffect(() => {
    if (!isRunning) return;
    if (secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((previousSeconds) => previousSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  useEffect(() => {
    if (secondsLeft !== 0) return;
    if (!isRunning) return;

    setIsRunning(false);

    if (selectedAssignment && onCompleteSession) {
      const newSession = {
        id: crypto.randomUUID(),
        assignmentId: selectedAssignment.id,
        courseId: selectedAssignment.courseId,
        durationSeconds: POMODORO_SECONDS,
        completedAt: new Date().toISOString(),
      };

      onCompleteSession(newSession);
    }
  }, [secondsLeft, isRunning, selectedAssignment, onCompleteSession]);

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
    <section className="rounded-xl border-2 border-zinc-800 bg-zinc-900 p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b border-zinc-800 pb-3">
        <h2 className="text-lg font-bold tracking-wide whitespace-nowrap text-zinc-200">// FOCUS SESS CONSOLE</h2>

        <p className="text-xs tracking-widest whitespace-nowrap text-zinc-400">Status: {status}</p>
      </div>

      <div className="mt-4 space-y-3">
        {/* Assignment selector */}
        <div className="space-y-2">
          <label className="block text-[10px] tracking-[0.22em] text-zinc-500 uppercase">Target Assignment</label>

          <select
            value={selectedAssignmentId}
            onChange={handleAssignmentChange}
            disabled={isRunning}
            className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-zinc-200 transition outline-none focus:border-zinc-600 disabled:cursor-not-allowed disabled:opacity-50"
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

        {/* Current assignment */}
        {selectedAssignment && (
          <div className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2">
            <p className="truncate text-xs font-semibold tracking-wide text-zinc-200">{selectedAssignment.title}</p>

            <p className="mt-1 text-[10px] tracking-wider text-zinc-500 uppercase">
              {selectedCourse?.code || selectedCourse?.name || 'Course'}
            </p>
          </div>
        )}

        {/* Timer */}
        <div className="rounded-xl border border-zinc-800 bg-[#05070d] px-4 py-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-bold tracking-[0.08em] whitespace-nowrap text-amber-400">[ {formatClock(secondsLeft)} ]</p>

            <p className="mt-3 text-[10px] tracking-[0.25em] text-zinc-500 uppercase">Mode: Pomodoro</p>
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handlePrimaryAction}
            disabled={!selectedAssignment}
            className="rounded-md bg-emerald-600 px-3 py-3 text-sm font-bold tracking-wide text-zinc-950 uppercase transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isRunning ? 'SYS_PAUSE' : 'SYS_START'}
          </button>

          <button
            onClick={handleReset}
            className="rounded-md bg-zinc-800 px-3 py-3 text-sm font-bold tracking-wide text-zinc-200 uppercase transition hover:bg-zinc-700"
          >
            SYS_RESET
          </button>
        </div>
      </div>
    </section>
  );
}

export default FocusSessionConsole;
