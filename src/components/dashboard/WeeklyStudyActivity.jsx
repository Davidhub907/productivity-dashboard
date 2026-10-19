import DashboardPanel from '../dashboard/DashboardPanel';

function WeeklyStudyActivity({ studySessions }) {
  const now = new Date();

  // Find Monday of the current week
  const monday = new Date(now);
  const currentDay = now.getDay();
  const daysSinceMonday = currentDay === 0 ? 6 : currentDay - 1;

  monday.setDate(now.getDate() - daysSinceMonday);
  monday.setHours(0, 0, 0, 0);

  const weekDays = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);

    return {
      date,
      label: ['M', 'T', 'W', 'T', 'F', 'S', 'S'][index],
      totalSeconds: 0,
    };
  });

  // Add study sessions to the correct day
  studySessions.forEach((session) => {
    const sessionDate = new Date(session.completedAt);

    weekDays.forEach((day) => {
      if (
        sessionDate.getFullYear() === day.date.getFullYear() &&
        sessionDate.getMonth() === day.date.getMonth() &&
        sessionDate.getDate() === day.date.getDate()
      ) {
        day.totalSeconds += session.durationSeconds;
      }
    });
  });

  const weeklyTotalSeconds = weekDays.reduce((total, day) => total + day.totalSeconds, 0);

  const dailyAverageSeconds = weeklyTotalSeconds / 7;

  function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }

    return `${minutes}m`;
  }

  function getHeatClass(seconds) {
    const minutes = seconds / 60;

    if (minutes === 0) {
      return 'bg-zinc-800';
    }

    if (minutes < 30) {
      return 'bg-zinc-700';
    }

    if (minutes < 60) {
      return 'bg-zinc-600';
    }

    if (minutes < 120) {
      return 'bg-zinc-400';
    }

    return 'bg-zinc-200';
  }

  return (
    <DashboardPanel title="WEEKLY STUDY ACTIVITY" subtitle="Mon - Sun distribution">
      <div className="font-mono">
        {/* Heatmap */}
        <div className="rounded-md border border-zinc-800 bg-zinc-950 p-4">
          <div className="flex items-start gap-3">
            {weekDays.map((day) => {
              const isToday = day.date.toDateString() === now.toDateString();

              return (
                <div
                  key={day.date.toISOString()}
                  className="flex flex-col items-center gap-2"
                  title={`${day.date.toLocaleDateString()}: ${formatDuration(day.totalSeconds)}`}
                >
                  <div
                    className={`h-7 w-7 rounded-sm ${getHeatClass(day.totalSeconds)} ${
                      isToday ? 'ring-1 ring-emerald-500 ring-offset-2 ring-offset-zinc-950' : ''
                    }`}
                  />

                  <span className={`text-[10px] ${isToday ? 'text-emerald-400' : 'text-zinc-500'}`}>{day.label}</span>
                </div>
              );
            })}
          </div>

          {/* Heatmap legend */}
          <div className="mt-4 flex items-center gap-2 text-[10px] tracking-wider text-zinc-600">
            <span>LESS</span>

            <div className="h-3 w-3 rounded-sm bg-zinc-800" />
            <div className="h-3 w-3 rounded-sm bg-zinc-700" />
            <div className="h-3 w-3 rounded-sm bg-zinc-600" />
            <div className="h-3 w-3 rounded-sm bg-zinc-400" />
            <div className="h-3 w-3 rounded-sm bg-zinc-200" />

            <span>MORE</span>
          </div>
        </div>

        {/* Weekly stats */}
        <div className="mt-4 flex items-center justify-between text-sm">
          <p className="text-zinc-500">
            Total Time: <span className="font-semibold text-zinc-200">{formatDuration(weeklyTotalSeconds)}</span> this week
          </p>

          <p className="text-zinc-500">
            Daily Average: <span className="font-semibold text-zinc-200">{formatDuration(dailyAverageSeconds)}/day</span>
          </p>
        </div>
      </div>
    </DashboardPanel>
  );
}

export default WeeklyStudyActivity;
