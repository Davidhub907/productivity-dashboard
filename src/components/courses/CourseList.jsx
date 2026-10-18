import CourseItem from './CourseItem';

function CourseList({ courses, onSelectCourse }) {
  return (
    <section>
      <div className="subtle-scrollbar max-h-100 space-y-2 overflow-y-auto bg-[var(--panel-bg)] tracking-wide">
        {courses.map((course) => {
          return <CourseItem key={course.id} course={course} onSelectCourse={onSelectCourse} />;
        })}
      </div>
    </section>
  );
}

export default CourseList;
