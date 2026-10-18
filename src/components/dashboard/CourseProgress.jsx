import { useState } from 'react';
import DashboardPanel from './DashboardPanel';
import CourseAddForm from '../courses/CourseAddForm';
import CourseList from '../courses/CourseList';
import CourseDetails from '../courses/CourseDetails';

function CourseProgress({
  courses,
  onAddCourse,
  onDeleteCourse,
  onUpdateCourse,
  assignments,
  onAddAssignment,
  onDeleteAssignment,
  onUpdateAssignment,
}) {
  const [showAddCourseForm, setShowAddCourseForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  function handleSelectCourse(course) {
    setSelectedCourse(course);
  }

  function handleCloseSelectedCourse() {
    setSelectedCourse(null);
  }

  function handleUpdateSelectedCourse(updatedCourse) {
    onUpdateCourse(updatedCourse);

    // Keep the currently-open course in sync
    setSelectedCourse(updatedCourse);
  }

  return (
    <>
      <DashboardPanel
        title="COURSE PROGRESS"
        subtitle="Fall Sem"
        className="min-h-[400px]"
        onHeaderAction={() => setShowAddCourseForm(!showAddCourseForm)}
      >
        <CourseList courses={courses} onSelectCourse={handleSelectCourse} />
      </DashboardPanel>

      {showAddCourseForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-xl border border-[var(--border-color)] bg-[var(--panel-bg)] p-6 font-mono text-[var(--text-color)] shadow-2xl">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-lg font-semibold tracking-wide">ADD NEW COURSE</h1>

              <p className="mt-1 text-xs text-[var(--muted-text)]">Add a course to your current semester.</p>
            </div>

            {/* Form */}
            <CourseAddForm onAddCourse={onAddCourse} />

            {/* Footer */}
            <div className="mt-4 border-t border-[var(--border-color)] pt-4">
              <button
                onClick={() => setShowAddCourseForm(false)}
                className="w-full cursor-pointer rounded-md border border-[var(--border-color)] px-4 py-2 text-sm text-[var(--muted-text)] transition hover:bg-[var(--border-color)] hover:text-[var(--text-color)]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedCourse && (
        <CourseDetails
          course={selectedCourse}
          onDeleteCourse={onDeleteCourse}
          closeCourse={handleCloseSelectedCourse}
          onUpdateCourse={handleUpdateSelectedCourse}
          assignments={assignments}
          onAddAssignment={onAddAssignment}
          onDeleteAssignment={onDeleteAssignment}
          onUpdateAssignment={onUpdateAssignment}
        />
      )}
    </>
  );
}

export default CourseProgress;
