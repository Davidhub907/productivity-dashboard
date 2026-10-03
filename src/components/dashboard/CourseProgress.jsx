import { useState } from 'react';
import DashboardPanel from './DashboardPanel';
import CourseAddForm from '../courses/CourseAddForm';
import CourseList from '../courses/CourseList';
import CourseEditForm from '../courses/CourseEditForm';
import CourseDetails from '../courses/CourseDetails';

function CourseProgress({ courses, onAddCourse, onDeleteCourse, assignments, onAddAssignment, onDeleteAssignment }) {
  const [showAddCourseForm, setShowAddCourseForm] = useState(false);
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="rounded-lg border-2 border-zinc-800 bg-zinc-900 p-6 font-mono text-white">
            <h1 className="mb-4 text-lg"> ADD NEW COURSE </h1>
            <div className="flex items-end justify-between">
              <CourseAddForm onAddCourse={onAddCourse} />
              <button onClick={() => setShowAddCourseForm(false)} className="rounded bg-zinc-600 px-2 py-1 hover:bg-zinc-700">
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
