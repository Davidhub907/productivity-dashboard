import { useState } from 'react';

function CourseAddForm({ onAddCourse }) {
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseColor, setCourseColor] = useState('#32472c');

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

    //reset form after submission
    setCourseName('');
    setCourseCode('');
    setCourseColor('#32472c');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label>
            Course Name:
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              placeholder="e.g. Calculus I"
              className="rounded border border-zinc-900 bg-zinc-800 placeholder:text-zinc-500"
            />
          </label>

          <label>
            Course Code:
            <input
              type="text"
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              placeholder="e.g. MATH 251"
              className="rounded border border-zinc-900 bg-zinc-800 placeholder:text-zinc-500"
            />
          </label>

          <label>
            {' '}
            Course Color:
            <input
              type="color"
              value={courseColor}
              onChange={(e) => setCourseColor(e.target.value)}
              className="rounded border border-zinc-900 bg-zinc-800"
            />
          </label>
        </div>
        <button type="submit" className="mt-4 rounded bg-zinc-600 px-2 py-1 hover:bg-zinc-700">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CourseAddForm;
