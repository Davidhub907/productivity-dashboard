function loadFromStorage(key) {
  const json = localStorage.getItem(key);
  return json ? JSON.parse(json) : [];
}

export function loadCourses() {
  return loadFromStorage('courses');
}

export function saveCourse(course) {
  var courses = loadFromStorage('courses');
  courses.push(course);
  localStorage.setItem('courses', JSON.stringify(courses));
}

export function deleteCourse(id) {
  var courses = loadFromStorage('courses');
  const updatedCourses = courses.filter(course => course.id !== id);
  localStorage.setItem('courses', JSON.stringify(updatedCourses));
}

export function editCourse(id, courseData) {
  var courses = loadFromStorage('courses');
  // TODO
}

export function loadAssignments() {
  return loadFromStorage('assignments');
}

export function loadAssignmentsByCourseId(courseId) {
  const assignments = loadAssignments();
  const filteredAssignments = assignments.filter((assignment) => assignment.courseId !== courseId);
  return filteredAssignments;
}

export function saveAssignment(assignment) {
  var assignments = loadFromStorage('assignments');
  assignments.push(assignment);
  localStorage.setItem('assignments', JSON.stringify(assignments));
}