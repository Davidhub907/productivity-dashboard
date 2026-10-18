import { useState } from 'react';
import { saveCourse } from '../../utils/storage.js';

function CourseAddForm({ onAddCourse }) {
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseColor, setCourseColor] = useState('#4cc70a');

  function handleSubmit(event) {
    event.preventDefault();

    const newCourse = {
      id: crypto.randomUUID(),
      name: courseName.trim(),
      code: courseCode.trim(),
      color: courseColor,
    };

    console.log('New Course Created:', newCourse);

    saveCourse(newCourse);
    onAddCourse?.(newCourse);

    // Reset form after submission
    setCourseName('');
    setCourseCode('');
    setCourseColor('#32472c');
  }

  return (
    <form className="flex w-full flex-col gap-5" onSubmit={handleSubmit}>
      {/* Course Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="courseName" className="text-xs tracking-wider text-[var(--muted-text)] uppercase">
          Course Name
        </label>

        <input
          id="courseName"
          type="text"
          className="w-full rounded-md border border-[var(--border-color)] bg-[var(--dashboard-bg)] px-3 py-2.5 text-sm text-[var(--text-color)] transition outline-none placeholder:text-zinc-500 focus:ring-1 focus:ring-[var(--muted-text)]"
          placeholder="Software Engineering"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      </div>

      {/* Course Code */}
      <div className="flex flex-col gap-2">
        <label htmlFor="courseCode" className="text-xs tracking-wider text-[var(--muted-text)] uppercase">
          Course Code
        </label>

        <input
          id="courseCode"
          type="text"
          className="w-full rounded-md border border-[var(--border-color)] bg-[var(--dashboard-bg)] px-3 py-2.5 text-sm text-[var(--text-color)] transition outline-none placeholder:text-zinc-500 focus:ring-1 focus:ring-[var(--muted-text)]"
          placeholder="CS401"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
        />
      </div>

      {/* Course Color */}
      <div className="flex flex-col gap-2">
        <label htmlFor="courseColor" className="text-xs tracking-wider text-[var(--muted-text)] uppercase">
          Course Color
        </label>

        <input
          id="courseColor"
          type="color"
          value={courseColor}
          onChange={(e) => setCourseColor(e.target.value)}
          className="h-10 w-full cursor-pointer rounded-md border border-[var(--border-color)] bg-[var(--dashboard-bg)] p-1"
        />
      </div>

      <button
        type="submit"
        className="mt-2 cursor-pointer rounded-md bg-[var(--text-color)] px-4 py-2.5 text-sm font-semibold text-[var(--panel-bg)] transition hover:opacity-80 active:scale-[0.98]"
      >
        Add Course
      </button>
    </form>
  );
}

export default CourseAddForm;
