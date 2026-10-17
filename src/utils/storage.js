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
  const courses = loadFromStorage('courses');
  const updatedCourses = courses.filter(course => course.id !== id);
  localStorage.setItem('courses', JSON.stringify(updatedCourses));
}

export function editCourse(id, courseData) {
  var courses = loadFromStorage('courses');
  const index = courses.findIndex(course => course.id === id);
  if (index !== -1) {
    courses[index] = { ...courses[index], ...courseData };
    localStorage.setItem('courses', JSON.stringify(courses));
  }
}

export function loadAssignments() {
  return loadFromStorage('assignments');
}

export function saveAssignment(assignment) {
  var assignments = loadFromStorage('assignments');
  assignments.push(assignment);
  localStorage.setItem('assignments', JSON.stringify(assignments));
}

export function deleteAssignment(id) {
  const assignments = loadAssignments()
  const updatedAssignments = assignments.filter((assignment) => assignment.id !== id);
  localStorage.setItem('assignments', JSON.stringify(updatedAssignments));
}

export function editAssignment(id, assignmentData) {
  var assignments = loadAssignments();
  const index = assignments.findIndex(assignment => assignment.id === id);
  if (index !== -1) {
    assignments[index] = { ...assignments[index], ...assignmentData };
    localStorage.setItem('assignments', JSON.stringify(assignments));
  }
}