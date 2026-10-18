function CourseItem({ course, onSelectCourse }) {
  return (
    <section
      onClick={() => onSelectCourse(course)}
      className="cursor-pointer rounded-md border border-[var(--border-color)] p-3 transition duration-300 hover:-translate-y-1 hover:bg-[var(--hover-bg)] hover:shadow-lg"
    >
      <p className="text-base font-bold text-[var(--text-color)] uppercase">{course.code}</p>

      <p className="text-sm text-[var(--muted-text)]">{course.name}</p>

      <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: course.color }}></span>
    </section>
  );
}

export default CourseItem;
