import { useState } from 'react';

function CourseEditForm({ course, closeCourse }) {
  const [courseName, editCourseName] = useState(course.name);
  const [courseCode, editCourseCode] = useState(course.code);
  const [courseColor, editCourseColor] = useState(course.color);

  function handleSubmit(event) {
    event.preventDefault();

    const course = {
      name: courseName.trim(),
      code: courseCode.trim(),
      color: courseColor,
    };
  }
  return (
    <div className="bg-white">
      <form onSubmit={handleSubmit}>
        <label>
          Course Name:
          <input type="text" value={courseName} onChange={(e) => editCourseName(e.target.value)} />
        </label>
        <br />
        <label>
          Course Code:
          <input type="text" value={courseCode} onChange={(e) => editCourseCode(e.target.value)} />
        </label>
        <br />
        <label>
          {' '}
          Course Color:
          <input type="color" value={courseColor} onChange={(e) => editCourseColor(e.target.value)} />
        </label>
        <br />
        <button type="submit" className="mt-4 rounded bg-zinc-600 px-2 py-1 hover:bg-zinc-700">
          Save
        </button>
        <button onClick={closeCourse} type="submit" className="mt-4 rounded bg-zinc-600 px-2 py-1 hover:bg-zinc-700">
          Close
        </button>
        <button type="submit" className="mt-4 rounded bg-zinc-600 px-2 py-1 hover:bg-zinc-700">
          Delete
        </button>
      </form>
    </div>
  );
}

export default CourseEditForm;
