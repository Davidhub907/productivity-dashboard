import AssignmentAddForm from '../assignments/AssignmentAddForm';
import AssignmentList from '../assignments/AssignmentList';
import { useState } from 'react';

function CourseDetails({ course, closeCourse, onDeleteCourse, assignments, onAddAssignment, onDeleteAssignment }) {
  const [showAddAssignmentForm, setShowAddAssignmentForm] = useState(false);

  const courseAssignments = assignments.filter((assignment) => {
    return assignment.courseId === course.id;
  });

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 font-mono text-zinc-200">
      {/* Outer Shell Window*/}
      <div className="w-full max-w-2xl space-y-5 rounded-xl border-2 border-zinc-800 bg-zinc-900 p-5 shadow-2xl">
        {/* Top Console Bar*/}
        <div className="flex items-center justify-between border-b border-zinc-800 p-2 text-xs tracking-wider">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: course.color }}></span>
            <span>COURSE_CONSOLE_V4.2 // {course.code}</span>
          </div>

          <button
            type="button"
            onClick={() => {
              onDeleteCourse(course.id);
              closeCourse();
            }}
            className="cursor-pointer rounded border-2 border-zinc-800 bg-zinc-950 p-0.5 text-rose-500 transition-colors hover:bg-zinc-800 hover:text-rose-400"
          >
            [ DELETE ]
          </button>

          <button
            onClick={closeCourse}
            type="button"
            className="cursor-pointer rounded border-2 border-zinc-800 bg-zinc-950 p-0.5 text-rose-500 transition-colors hover:bg-zinc-800 hover:text-rose-400"
          >
            [ ESC_EXIT ]
          </button>
        </div>

        <div className="flex items-center justify-between rounded border-2 border-zinc-800 bg-zinc-950/60 p-5">
          <span className="text-xl">{course.name}</span>

          <span className="rounded border border-emerald-500/40 bg-emerald-950/60 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-emerald-400">
            ENROLLED{' '}
          </span>
        </div>
        <div className="flex items-center justify-between rounded border-2 border-zinc-800 bg-zinc-950/60 p-5">
          <p>course progress placeholder </p>
        </div>
        <div className="flex items-center justify-between rounded border-2 border-zinc-800 bg-zinc-950/60 p-5">
          <span> Study time placeholder </span>
        </div>
        <div className="rounded border-2 border-zinc-800 bg-zinc-950/60 p-5">
          <div className="flex items-center justify-between">
            <h1 className="text-lg">ASSIGNMENTS</h1>

            <button onClick={() => setShowAddAssignmentForm(true)} className="rounded bg-zinc-600 px-2 py-1 hover:bg-zinc-700">
              + Assignment
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between rounded border-2 border-zinc-800 bg-zinc-950/60 p-5">
            <AssignmentList assignments={courseAssignments} onDeleteAssignment={onDeleteAssignment} />
          </div>

          {showAddAssignmentForm && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4">
              <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900 p-6 font-mono text-white shadow-2xl">
                {/* Header */}
                <div className="mb-6">
                  <h1 className="text-lg font-semibold tracking-wide">ADD NEW ASSIGNMENT</h1>

                  <p className="mt-1 text-xs text-zinc-500">Add an assignment to this course.</p>
                </div>

                {/* Form */}
                <AssignmentAddForm courseId={course.id} onAddAssignment={onAddAssignment} />

                {/* Footer */}
                <div className="mt-4 border-t border-zinc-800 pt-4">
                  <button
                    onClick={() => setShowAddAssignmentForm(false)}
                    className="w-full rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between border-t border-zinc-800 p-2 text-xs tracking-wider">
          <p>footer placeholder</p>
        </div>
      </div>
    </section>
  );
}

export default CourseDetails;
