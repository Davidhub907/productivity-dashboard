import DashboardPanel from './DashboardPanel';
import CourseProgress from './CourseProgress';
import FocusSessionConsole from './FocusSessionConsole.jsx';
import SystemLogs from './SystemLogs.jsx';
import { useState } from 'react';
import { deleteAssignment, deleteCourse, loadAssignments, loadCourses } from '../../utils/storage.js';

function Dashboard() {
  const [courses, setCourses] = useState(loadCourses());
  const [assignments, setAssignments] = useState(loadAssignments());
  const [studySessions, setStudySessions] = useState([]);
  const [logs, setLogs] = useState([]);

  function handleAddCourse(newCourse) {
    setCourses((previousCourses) => [...previousCourses, newCourse]);
    addLog(`Course "${newCourse.code}" created.`);
  }

  function handleDeleteCourse(courseId) {
    const courseToDelete = courses.find((course) => course.id === courseId);
    for (const assignment of assignments) {
      if (assignment.courseId === courseId) {
        deleteAssignment(assignment.id);
      }
    }
    deleteCourse(courseId);
    setAssignments(loadAssignments());
    setCourses((previousCourses) => previousCourses.filter((course) => course.id !== courseId));
    addLog(`Course "${courseToDelete.code}" deleted.`);

    setAssignments((previousAssignments) => previousAssignments.filter((assignment) => assignment.courseId !== courseId));
  }

  function handleUpdateCourse(updatedCourse) {
    setCourses((previousCourses) => previousCourses.map((course) => (course.id === updatedCourse.id ? updatedCourse : course)));
    addLog(`Course "${updatedCourse.code}" updated.`);
  }

  function handleAddAssignment(newAssignment) {
    setAssignments(loadAssignments());
    addLog(`Assignment "${newAssignment.title}" created.`);
  }

  function handleDeleteAssignment(assignmentId) {
    const assignmentToDelete = assignments.find((assignment) => assignment.id === assignmentId);
    deleteAssignment(assignmentId);
    setAssignments(loadAssignments());
    addLog(`Assignment "${assignmentToDelete.title}" deleted.`);
  }

  function handleUpdateAssignment(updatedAssignment) {
    setAssignments((previousAssignments) =>
      previousAssignments.map((assignment) => (assignment.id === updatedAssignment.id ? updatedAssignment : assignment))
    );
  }

  function handleCompleteStudySession(newSession) {
    setStudySessions((previousSessions) => [...previousSessions, newSession]);
  }

  function addLog(message) {
    const newLog = {
      id: crypto.randomUUID(),
      message,
    };

    setLogs((previousLogs) => [...previousLogs, newLog]);
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
          <FocusSessionConsole assignments={assignments} courses={courses} onCompleteSession={handleCompleteStudySession} />

          <CourseProgress
            courses={courses}
            onAddCourse={handleAddCourse}
            onDeleteCourse={handleDeleteCourse}
            onUpdateCourse={handleUpdateCourse}

            assignments={assignments}
            onAddAssignment={handleAddAssignment}
            onDeleteAssignment={handleDeleteAssignment}
            onUpdateAssignment={handleUpdateAssignment}
          />

          <SystemLogs logs={logs} />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
