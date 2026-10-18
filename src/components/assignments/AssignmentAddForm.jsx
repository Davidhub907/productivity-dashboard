import { useState } from 'react';
import { saveAssignment } from '../../utils/storage.js';

function AssignmentAddForm({ courseId, onAddAssignment }) {
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [weight, setWeight] = useState('');
  const [estimatedMinutes, setEstimatedMinutes] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const newAssignment = {
      id: crypto.randomUUID(),
      title: assignmentTitle.trim(),
      courseId: courseId,
      dueDate: dueDate.trim(),
      weight: weight.trim(),
      estimatedMinutes: estimatedMinutes.trim(),
      completed: false,
    };

    console.log('New Assignment Created:', newAssignment);

    saveAssignment(newAssignment);
    onAddAssignment?.(newAssignment);

    // Reset form fields after submission
    setAssignmentTitle('');
    setDueDate('');
    setWeight('');
    setEstimatedMinutes('');
  }

  return (
    <form className="flex w-full flex-col gap-5" onSubmit={handleSubmit}>
      {/* Assignment Title */}
      <div className="flex flex-col gap-2">
        <label htmlFor="assignmentTitle" className="text-xs tracking-wider text-[var(--muted-text)] uppercase">
          Assignment Title
        </label>

        <input
          id="assignmentTitle"
          type="text"
          value={assignmentTitle}
          onChange={(e) => setAssignmentTitle(e.target.value)}
          placeholder="Project Report"
          className="w-full rounded-md border border-[var(--border-color)] bg-[var(--dashboard-bg)] px-3 py-2.5 text-sm text-[var(--text-color)] transition outline-none placeholder:text-[var(--muted-text)] focus:ring-1 focus:ring-[var(--muted-text)]"
        />
      </div>

      {/* Due Date */}
      <div className="flex flex-col gap-2">
        <label htmlFor="dueDate" className="text-xs tracking-wider text-[var(--muted-text)] uppercase">
          Due Date
        </label>

        <input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className={`w-full rounded-md border border-[var(--border-color)] bg-[var(--dashboard-bg)] px-3 py-2.5 text-sm transition outline-none focus:ring-1 focus:ring-[var(--muted-text)] ${
            !dueDate ? 'text-[var(--muted-text)]' : 'text-[var(--text-color)]'
          }`}
        />
      </div>

      {/* Difficulty */}
      <div className="flex flex-col gap-2">
        <label htmlFor="weight" className="text-xs tracking-wider text-[var(--muted-text)] uppercase">
          Difficulty
        </label>

        <select
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className={`w-full rounded-md border border-[var(--border-color)] bg-[var(--dashboard-bg)] px-3 py-2.5 text-sm transition outline-none focus:ring-1 focus:ring-[var(--muted-text)] ${
            !weight ? 'text-[var(--muted-text)]' : 'text-[var(--text-color)]'
          }`}
        >
          <option value="">Select Difficulty</option>
          <option value="Easy">1 - Easy</option>
          <option value="Medium">2 - Medium</option>
          <option value="Hard">3 - Hard</option>
        </select>
      </div>

      {/* Estimated Minutes */}
      <div className="flex flex-col gap-2">
        <label htmlFor="estimatedMinutes" className="text-xs tracking-wider text-[var(--muted-text)] uppercase">
          Estimated Minutes
        </label>

        <input
          id="estimatedMinutes"
          type="number"
          value={estimatedMinutes}
          onChange={(e) => setEstimatedMinutes(e.target.value)}
          placeholder="60"
          min="0"
          className="w-full rounded-md border border-[var(--border-color)] bg-[var(--dashboard-bg)] px-3 py-2.5 text-sm text-[var(--text-color)] transition outline-none placeholder:text-[var(--muted-text)] focus:ring-1 focus:ring-[var(--muted-text)]"
        />
      </div>

      <button
        type="submit"
        className="mt-2 rounded-md bg-[var(--text-color)] px-4 py-2.5 text-sm font-semibold text-[var(--panel-bg)] transition hover:opacity-80 active:scale-[0.98]"
      >
        Add Assignment
      </button>
    </form>
  );
}

export default AssignmentAddForm;
