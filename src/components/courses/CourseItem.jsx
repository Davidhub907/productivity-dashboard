function CourseItem({ course, onSelectCourse }) {
  return (
    <section
      onClick={() => onSelectCourse(course)}
      className="cursor-pointer rounded-md border border-zinc-800 p-3 transition duration-600 hover:-translate-y-1 hover:bg-zinc-800 hover:shadow-lg"
    >
      <p className="text-base font-bold text-zinc-200 uppercase">{course.code}</p>
      <p className="text-sm text-zinc-400">{course.name}</p>

      <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: course.color }}></span>
    </section>
  );
}

export default CourseItem;
