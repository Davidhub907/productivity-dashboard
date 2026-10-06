import { useState } from 'react';
import DashboardPanel from './DashboardPanel';
import CourseAddForm from '../courses/CourseAddForm';
import CourseList from '../courses/CourseList';
import { loadCourses } from '../../utils/storage.js';
import CourseEditForm from '../courses/CourseEditForm';
import CourseDetails from '../courses/CourseDetails';

function CourseProgress({ courses, onAddCourse, onDeleteCourse, assignments, onAddAssignment, onDeleteAssignment }) {
  const [showAddCourseForm, setShowAddCourseForm] = useState(false);
  const [courses, setCourses] = useState(loadCourses());
  const [selectedCourse, setSelectedCourse] = useState(null);

  console.log(courses);

  function handleSelectCourse(course) {
    setSelectedCourse(course);
  }

  function handleCloseSelectedCourse() {
    setSelectedCourse(null);
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
          <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900 p-6 font-mono text-white shadow-2xl">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-lg font-semibold tracking-wide">ADD NEW COURSE</h1>

              <p className="mt-1 text-xs text-zinc-500">Add a course to your current semester.</p>
            </div>

            {/* Form */}
            <CourseAddForm onAddCourse={onAddCourse} />

            {/* Footer */}
            <div className="mt-4 border-t border-zinc-800 pt-4">
              <button
                onClick={() => setShowAddCourseForm(false)}
                className="w-full cursor-pointer rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-200"
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
          assignments={assignments}
          onAddAssignment={onAddAssignment}
          onDeleteAssignment={onDeleteAssignment}
        />
      )}
    </>
  );
}

export default CourseProgress;
