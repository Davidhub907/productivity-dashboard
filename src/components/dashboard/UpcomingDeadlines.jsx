import DashboardPanel from './DashboardPanel';

function UpcomingDeadlines({ assignments, courses }) {
  function parseLocalDate(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  function formatDate(dateString) {
    const date = parseLocalDate(dateString);

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  }

  function getCourseCode(courseId) {
    const course = courses.find((course) => course.id === courseId);

    return course?.code || 'UNKNOWN';
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sevenDaysFromNow = new Date(today);
  sevenDaysFromNow.setDate(today.getDate() + 7);

  const upcomingAssignments = assignments
    .filter((assignment) => {
      if (assignment.completed || !assignment.dueDate) {
        return false;
      }

      const dueDate = parseLocalDate(assignment.dueDate);

      return dueDate >= today && dueDate < sevenDaysFromNow;
    })
    .sort((a, b) => {
      return parseLocalDate(a.dueDate) - parseLocalDate(b.dueDate);
    });

  return (
    <DashboardPanel title="UPCOMING DEADLINES" subtitle="Next 7 days">
      {upcomingAssignments.length === 0 ? (
        <div className="flex min-h-32 items-center justify-center">
          <p className="font-mono text-sm text-[var(--muted-text)]">No upcoming deadlines.</p>
        </div>
      ) : (
        <div className="overflow-x-auto font-mono">
          {/* Table header */}
          <div className="grid grid-cols-[80px_100px_1fr_80px] border border-[var(--border-color)] bg-[var(--dashboard-bg)] px-3 py-2 text-xs font-semibold tracking-wide text-[var(--muted-text)] uppercase">
            <span>Date</span>
            <span>Course</span>
            <span>Assignment</span>
            <span className="text-right">Difficulty</span>
          </div>

          {/* Deadlines */}
          <div>
            {upcomingAssignments.map((assignment) => {
              const weight = assignment.weight;

              return (
                <div
                  key={assignment.id}
                  className="grid grid-cols-[80px_100px_1fr_80px] items-center border-b border-[var(--border-color)] px-3 py-3 text-sm transition hover:bg-[var(--hover-bg)]"
                >
                  <span className="text-[var(--muted-text)]">{formatDate(assignment.dueDate)}</span>

                  <span className="font-bold text-[var(--text-color)]">{getCourseCode(assignment.courseId)?.replace(/\s+/g, '')}</span>

                  <span className="truncate pr-4 text-[var(--muted-text)]">{assignment.title}</span>

                  <span
                    className={`text-right text-xs font-semibold ${
                      weight === 'Hard' ? 'text-red-500' : weight === 'Medium' ? 'text-orange-400' : 'text-emerald-500'
                    }`}
                  >
                    {weight}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </DashboardPanel>
  );
}

export default UpcomingDeadlines;
