import { useState } from 'react';

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
    onAddCourse?.(newCourse);
  }

  return (
    <form className="flex w-full flex-col gap-5" onSubmit={handleSubmit}>
      {/* Course Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="courseName" className="text-xs tracking-wider text-zinc-400 uppercase">
          Course Name
        </label>

        <input
          id="courseName"
          type="text"
          className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-sm text-zinc-100 transition outline-none placeholder:text-zinc-600 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
          placeholder="Software Engineering"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      </div>

      {/* Course Code */}
      <div className="flex flex-col gap-2">
        <label htmlFor="courseCode" className="text-xs tracking-wider text-zinc-400 uppercase">
          Course Code
        </label>

        <input
          id="courseCode"
          type="text"
          className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-sm text-zinc-100 transition outline-none placeholder:text-zinc-600 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
          placeholder="CS 401"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
        />
      </div>

      {/* Course Color */}
      <div className="flex flex-col gap-2">
        <label htmlFor="courseColor" className="text-xs tracking-wider text-zinc-400 uppercase">
          Course Color
        </label>

        <input
          id="courseColor"
          type="color"
          value={courseColor}
          onChange={(e) => setCourseColor(e.target.value)}
          className="h-10 w-full cursor-pointer border-zinc-700 p-1"
        />
      </div>

      <button
        type="submit"
        className="mt-2 cursor-pointer rounded-md bg-zinc-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-300 active:scale-[0.98]"
      >
        Add Course
      </button>
    </form>
  );
}

export default CourseAddForm;
