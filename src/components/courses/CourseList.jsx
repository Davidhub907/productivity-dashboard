import CourseItem from './CourseItem';

function CourseList({ courses }) {
  return (
    <section>
      <div className="subtle-scrollbar max-h-100 space-y-2 overflow-y-auto bg-zinc-900 tracking-wide">
        {courses.map((course) => {
          return <CourseItem key={course.id} course={course} />;
        })}
      </div>
    </section>
  );
}

export default CourseList;
