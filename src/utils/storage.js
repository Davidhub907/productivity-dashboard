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

export function loadAssignments() {
  return loadFromStorage('assignments');
}

export function saveAssignment(assignment) {
  var assignments = loadFromStorage('assignments');
  assignments.push(assignment);
  localStorage.setItem('assignments', JSON.stringify(assignments));
}