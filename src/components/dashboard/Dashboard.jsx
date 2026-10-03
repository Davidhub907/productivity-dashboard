import DashboardPanel from './DashboardPanel';
import CourseProgress from './CourseProgress';
import { useState } from 'react';

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);

  function handleAddCourse(newCourse) {
    setCourses((previousCourses) => [...previousCourses, newCourse]);
  }

  function handleDeleteCourse(courseId) {
    setCourses((previousCourses) => {
      return previousCourses.filter((course) => course.id != courseId);
    });
  }

  function handleAddAssignment(newAssignment) {
    setAssignments((previousAssignments) => [...previousAssignments, newAssignment]);
  }

  function handleDeleteAssignment(assignmentId) {
    setAssignments((previousAssignments) => {
      return previousAssignments.filter((assignment) => assignment.id != assignmentId);
    });
  }

  return (
    <section className="min-h-screen bg-zinc-950 p-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-6">
          <DashboardPanel title="TODAY'S STUDY STATUS" subtitle="Session target:" className="min-h-[300px]">
            <div className="flex h-full items-center justify-center rounded-md border border-dashed border-zinc-800 text-zinc-500">
              Study status placeholder
            </div>
          </DashboardPanel>

          <DashboardPanel title="WEEKLY STUDY ACTIVITY" subtitle="Mon - Sun distribution" className="min-h-[240px]">
            <div className="flex h-full items-center justify-center rounded-md border border-dashed border-zinc-800 text-zinc-500">
              heatmap placeholder
            </div>
          </DashboardPanel>

          <DashboardPanel title="UPCOMING DEADLINES" subtitle="Next 7 days" className="min-h-[280px]">
            <div className="flex h-full items-center justify-center rounded-md border border-dashed border-zinc-800 text-zinc-500">
              Deadlines placeholder
            </div>
          </DashboardPanel>
        </div>
        <div className="flex flex-col gap-6">
          <DashboardPanel title="FOCUS SESS CONSOLE" subtitle="Status: IDLE" className="min-h-[300px]">
            <div className="flex h-full items-center justify-center rounded-md border border-dashed border-zinc-800 text-zinc-500">
              Study time placeholder
            </div>
          </DashboardPanel>

          <CourseProgress
            courses={courses}
            onAddCourse={handleAddCourse}
            onDeleteCourse={handleDeleteCourse}
            assignments={assignments}
            onAddAssignment={handleAddAssignment}
            onDeleteAssignment={handleDeleteAssignment}
          />

          <DashboardPanel title="SYSTEM_LOGS:" className="min-h-[140px]">
            <div className="flex h-full items-center justify-center rounded-md border border-dashed border-zinc-800 text-zinc-500">
              System log placeholder
            </div>
          </DashboardPanel>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
