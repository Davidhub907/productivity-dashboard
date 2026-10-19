import { useEffect, useState } from 'react';
import DashboardPanel from '../dashboard/DashboardPanel';
import { loadDailyStudyGoal, saveDailyStudyGoal } from '../../utils/storage';

function TodayStudyStatus({ studySessions }) {
  const [goalMinutes, setGoalMinutes] = useState(loadDailyStudyGoal());

  const [today, setToday] = useState(new Date().toDateString());

  const todaysSessions = studySessions.filter((session) => {
    return new Date(session.completedAt).toDateString() === today;
  });

  const totalSeconds = todaysSessions.reduce((total, session) => total + session.durationSeconds, 0);

  const totalMinutes = Math.floor(totalSeconds / 60);

  const averageSeconds = todaysSessions.length > 0 ? totalSeconds / todaysSessions.length : 0;

  const goalSeconds = goalMinutes * 60;

  const progress = goalSeconds > 0 ? Math.min((totalSeconds / goalSeconds) * 100, 100) : 0;

  const remainingSeconds = Math.max(goalSeconds - totalSeconds, 0);

  useEffect(() => {
    saveDailyStudyGoal(goalMinutes);
  }, [goalMinutes]);

  function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }

    if (minutes === 0 && seconds > 0) {
      return '<1m';
    }

    return `${minutes}m`;
  }

  function handleGoalChange(event) {
    const value = Number(event.target.value);

    if (!value || value < 1) {
      setGoalMinutes(1);
      return;
    }

    if (value > 600) {
      setGoalMinutes(600);
      return;
    }

    setGoalMinutes(value);
  }

  useEffect(() => {
    function scheduleMidnightReset() {
      const now = new Date();

      const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

      const timeUntilMidnight = nextMidnight.getTime() - now.getTime();

      const timeout = setTimeout(() => {
        setToday(new Date().toDateString());
      }, timeUntilMidnight);

      return timeout;
    }

    const timeout = scheduleMidnightReset();

    return () => clearTimeout(timeout);
  }, [today]);

  return (
    <DashboardPanel title="TODAY'S STUDY STATUS" subtitle={`${todaysSessions.length} sessions completed`}>
      <div className="flex flex-col gap-4 font-mono">
        {/* Main progress */}
        <div className="rounded-md border border-[var(--border-color)] bg-[var(--dashboard-bg)] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs tracking-widest text-[var(--muted-text)]">TOTAL STUDY TIME</p>

              <p className="mt-2 text-3xl font-bold tracking-wide text-[var(--text-color)]">{formatDuration(totalSeconds)}</p>
            </div>

            <div className="text-right">
              <p className="text-xs tracking-widest text-[var(--muted-text)]">DAILY GOAL</p>

              <div className="mt-2 flex items-center justify-end gap-2">
                <input
                  type="number"
                  min="1"
                  max="600"
                  value={goalMinutes}
                  onChange={handleGoalChange}
                  className="w-20 rounded-md border border-[var(--border-color)] bg-[var(--panel-bg)] px-2 py-1 text-right text-sm text-[var(--text-color)] outline-none focus:ring-1 focus:ring-[var(--muted-text)]"
                />

                <span className="text-xs text-[var(--muted-text)]">MIN</span>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-[var(--muted-text)]">DAILY PROGRESS</span>

              <span className="text-[var(--text-color)]">{Math.round(progress)}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-[var(--hover-bg)]">
              <div className="h-full bg-emerald-500 transition-all" style={{ width: `${progress}%` }} />
            </div>

            <p className="mt-2 text-xs text-[var(--muted-text)]">
              {remainingSeconds > 0 ? `${formatDuration(remainingSeconds)} remaining` : 'DAILY TARGET COMPLETE'}
            </p>
          </div>
        </div>

        {/* Secondary stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-md border border-[var(--border-color)] bg-[var(--dashboard-bg)] p-4">
            <p className="text-xs tracking-widest text-[var(--muted-text)]">SESSIONS</p>

            <p className="mt-2 text-xl font-bold text-[var(--text-color)]">{todaysSessions.length}</p>
          </div>

          <div className="rounded-md border border-[var(--border-color)] bg-[var(--dashboard-bg)] p-4">
            <p className="text-xs tracking-widest text-[var(--muted-text)]">AVG SESSION</p>

            <p className="mt-2 text-xl font-bold text-[var(--text-color)]">{formatDuration(averageSeconds)}</p>
          </div>
        </div>
      </div>
    </DashboardPanel>
  );
}

export default TodayStudyStatus;
