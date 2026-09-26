import DashboardPanel from './DashboardPanel';
import CourseProgress from './CourseProgress';

function Dashboard() {
  return (
    <section className="min-h-screen bg-zinc-950 p-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-6">
          <DashboardPanel title="TODAY'S STUDY STATUS" subtitle="Session target:" className="min-h-[300px]">
            <p>Study status placeholder</p>
          </DashboardPanel>

          <DashboardPanel title="WEEKLY STUDY ACTIVITY" subtitle="Mon - Sun distribution" className="min-h-[240px]">
            <p>Heatmap placeholder</p>
          </DashboardPanel>

          <DashboardPanel title="UPCOMING DEADLINES" subtitle="Next 7 days" className="min-h-[280px]">
            <p>assignments placeholder</p>
          </DashboardPanel>
        </div>
        <div className="flex flex-col gap-6">
          <DashboardPanel title="FOCUS SESS CONSOLE" subtitle="Status: IDLE" className="min-h-[300px]">
            <p>Focus timer placeholder</p>
          </DashboardPanel>

          <CourseProgress />

          <DashboardPanel title="SYSTEM_LOGS:" className="min-h-[140px]">
            <p>system logs placeholder</p>
          </DashboardPanel>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
