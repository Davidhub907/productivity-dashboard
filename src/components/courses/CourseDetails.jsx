import AssignmentAddForm from '../assignments/AssignmentAddForm';
import AssignmentList from '../assignments/AssignmentList';
import { useState } from 'react';

function CourseDetails({
  course,
  closeCourse,
  onDeleteCourse,
  onUpdateCourse,
  assignments,
  onAddAssignment,
  onDeleteAssignment,
  onUpdateAssignment,
}) {
  const [isEditingCourse, setIsEditingCourse] = useState(false);

  const [editCode, setEditCode] = useState(course.code);
  const [editName, setEditName] = useState(course.name);
  const [editColor, setEditColor] = useState(course.color);

  const [showAddAssignmentForm, setShowAddAssignmentForm] = useState(false);

  const courseAssignments = assignments.filter((assignment) => {
    return assignment.courseId === course.id;
  });

  function handleSaveCourse() {
    if (!editCode.trim() || !editName.trim()) {
      return;
    }

    const updatedCourse = {
      ...course,
      code: editCode.trim(),
      name: editName.trim(),
      color: editColor,
    };

    onUpdateCourse(updatedCourse);
    setIsEditingCourse(false);
  }

  function handleCancelCourseEdit() {
    setEditCode(course.code);
    setEditName(course.name);
    setEditColor(course.color);
    setIsEditingCourse(false);
  }

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 font-mono text-[var(--text-color)]">
      {/* Outer Shell Window */}
      <div className="w-full max-w-xl space-y-5 rounded-xl border-2 border-[var(--border-color)] bg-[var(--panel-bg)] p-5 shadow-2xl">
        {/* Top Console Bar */}
        <div className="flex items-center justify-between border-b border-[var(--border-color)] p-2 text-xs tracking-wider">
          <div className="flex items-center gap-2 text-[var(--muted-text)]">
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: course.color }}></span>

            <span>COURSE_CONSOLE_V4.2 // {course.code}</span>
          </div>

          <button
            type="button"
            onClick={() => setIsEditingCourse(true)}
            className="cursor-pointer rounded border-2 border-[var(--border-color)] bg-[var(--dashboard-bg)] p-0.5 text-sky-400 transition-colors hover:bg-[var(--panel-bg)] hover:text-sky-300"
          >
            [ EDIT ]
          </button>

          <button
            type="button"
            onClick={() => {
              onDeleteCourse(course.id);
              closeCourse();
            }}
            className="cursor-pointer rounded border-2 border-[var(--border-color)] bg-[var(--dashboard-bg)] p-0.5 text-rose-500 transition-colors hover:bg-[var(--panel-bg)] hover:text-rose-400"
          >
            [ DELETE ]
          </button>

          <button
            onClick={closeCourse}
            type="button"
            className="cursor-pointer rounded border-2 border-[var(--border-color)] bg-[var(--dashboard-bg)] p-0.5 text-rose-500 transition-colors hover:bg-[var(--panel-bg)] hover:text-rose-400"
          >
            [ EXIT ]
          </button>
        </div>

        {/* Course Information */}
        <div className="rounded border-2 border-[var(--border-color)] bg-[var(--dashboard-bg)] p-5">
          {isEditingCourse ? (
            <div className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs tracking-wider text-[var(--muted-text)]">COURSE CODE</label>

                  <input
                    type="text"
                    value={editCode}
                    onChange={(event) => setEditCode(event.target.value)}
                    className="w-full rounded-md border border-[var(--border-color)] bg-[var(--panel-bg)] px-3 py-2 text-sm text-[var(--text-color)] outline-none focus:ring-1 focus:ring-[var(--muted-text)]"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs tracking-wider text-[var(--muted-text)]">COURSE NAME</label>

                  <input
                    type="text"
                    value={editName}
                    onChange={(event) => setEditName(event.target.value)}
                    className="w-full rounded-md border border-[var(--border-color)] bg-[var(--panel-bg)] px-3 py-2 text-sm text-[var(--text-color)] outline-none focus:ring-1 focus:ring-[var(--muted-text)]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs tracking-wider text-[var(--muted-text)]">COURSE COLOR</label>

                <input
                  type="color"
                  value={editColor}
                  onChange={(event) => setEditColor(event.target.value)}
                  className="h-10 w-16 cursor-pointer rounded border border-[var(--border-color)] bg-[var(--panel-bg)] p-1"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleCancelCourseEdit}
                  className="cursor-pointer rounded-md border border-[var(--border-color)] px-3 py-1.5 text-xs text-[var(--muted-text)] transition hover:bg-[var(--panel-bg)]"
                >
                  CANCEL
                </button>

                <button
                  type="button"
                  onClick={handleSaveCourse}
                  className="cursor-pointer rounded-md border border-emerald-500/50 px-3 py-1.5 text-xs text-emerald-500 transition hover:bg-emerald-500/10"
                >
                  SAVE
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: course.color }} />

                <span className="text-xl">
                  {course.code} {course.name}
                </span>
              </div>

              <span className="rounded border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-emerald-500">
                ENROLLED
              </span>
            </div>
          )}
        </div>

        {/* Course Progress */}
        <div className="flex items-center justify-between rounded border-2 border-[var(--border-color)] bg-[var(--dashboard-bg)] p-5">
          <p>course progress placeholder</p>
        </div>

        {/* Study Time */}
        <div className="flex items-center justify-between rounded border-2 border-[var(--border-color)] bg-[var(--dashboard-bg)] p-5">
          <span>Study time placeholder</span>
        </div>

        {/* Assignments */}
        <div className="rounded border-2 border-[var(--border-color)] bg-[var(--dashboard-bg)] p-5">
          <div className="flex items-center justify-between">
            <h1 className="text-lg">ASSIGNMENTS</h1>

            <button
              onClick={() => setShowAddAssignmentForm(true)}
              className="rounded border border-[var(--border-color)] bg-[var(--panel-bg)] px-2 py-1 text-[var(--text-color)] transition hover:opacity-70"
            >
              + Assignment
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between rounded border-2 border-[var(--border-color)] bg-[var(--panel-bg)] p-5">
            <AssignmentList
              assignments={courseAssignments}
              onDeleteAssignment={onDeleteAssignment}
              onUpdateAssignment={onUpdateAssignment}
            />
          </div>

          {showAddAssignmentForm && (
            <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60">
              <div className="rounded-lg border-2 border-[var(--border-color)] bg-[var(--panel-bg)] p-6 font-mono text-[var(--text-color)]">
                <h1 className="mb-4 text-lg">ADD NEW ASSIGNMENT</h1>

                <div className="flex items-end justify-between gap-4">
                  <AssignmentAddForm courseId={course.id} onAddAssignment={onAddAssignment} />

                  <button
                    onClick={() => setShowAddAssignmentForm(false)}
                    className="rounded border border-[var(--border-color)] bg-[var(--dashboard-bg)] px-2 py-1 text-[var(--muted-text)] transition hover:text-[var(--text-color)]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[var(--border-color)] p-2 text-xs tracking-wider">
          <p>footer placeholder</p>
        </div>
      </div>
    </section>
  );
}

export default CourseDetails;
