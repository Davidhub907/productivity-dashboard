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
  const updatedCourses = courses.filter((course) => course.id !== id);
  localStorage.setItem('courses', JSON.stringify(updatedCourses));
}

export function editCourse(id, courseData) {
  var courses = loadFromStorage('courses');
  // TODO
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
  const assignments = loadAssignments();
  const updatedAssignments = assignments.filter((assignment) => assignment.id !== id);
  localStorage.setItem('assignments', JSON.stringify(updatedAssignments));
}

const STUDY_SESSIONS_KEY = 'studySessions';

export function loadStudySessions() {
  const storedSessions = localStorage.getItem(STUDY_SESSIONS_KEY);

  if (!storedSessions) {
    return [];
  }

  return JSON.parse(storedSessions);
}

export function saveStudySessions(studySessions) {
  localStorage.setItem(STUDY_SESSIONS_KEY, JSON.stringify(studySessions));
}

const DAILY_STUDY_GOAL_KEY = 'dailyStudyGoalMinutes';

export function loadDailyStudyGoal() {
  const storedGoal = localStorage.getItem(DAILY_STUDY_GOAL_KEY);

  if (!storedGoal) {
    return 180;
  }

  return Number(storedGoal);
}

export function saveDailyStudyGoal(goalMinutes) {
  localStorage.setItem(DAILY_STUDY_GOAL_KEY, goalMinutes.toString());
}
