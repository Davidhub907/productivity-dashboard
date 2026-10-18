import { useState } from 'react';

function AssignmentItem({ assignment, onDeleteAssignment, onUpdateAssignment }) {
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(assignment.title);
  const [dueDate, setDueDate] = useState(assignment.dueDate);
  const [estimatedMinutes, setEstimatedMinutes] = useState(assignment.estimatedMinutes);
  const [weight, setWeight] = useState(assignment.weight);

  function handleSave() {
    if (!title.trim()) {
      return;
    }

    const updatedAssignment = {
      ...assignment,
      title: title.trim(),
      dueDate,
      estimatedMinutes: Number(estimatedMinutes),
      weight,
    };

    onUpdateAssignment(updatedAssignment);
    setIsEditing(false);
  }

  function handleCancel() {
    setTitle(assignment.title);
    setDueDate(assignment.dueDate);
    setEstimatedMinutes(assignment.estimatedMinutes);
    setWeight(assignment.weight);

    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <section className="rounded-lg border border-[var(--border-color)] bg-[var(--dashboard-bg)] p-4">
        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs text-[var(--muted-text)]">TITLE</label>

            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="w-full rounded-md border border-[var(--border-color)] bg-[var(--panel-bg)] px-3 py-2 text-sm text-[var(--text-color)] outline-none focus:ring-1 focus:ring-[var(--muted-text)]"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs text-[var(--muted-text)]">DUE DATE</label>

              <input
                type="date"
                value={dueDate}
                onChange={(event) => setDueDate(event.target.value)}
                className="w-full rounded-md border border-[var(--border-color)] bg-[var(--panel-bg)] px-3 py-2 text-sm text-[var(--text-color)] outline-none focus:ring-1 focus:ring-[var(--muted-text)]"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs text-[var(--muted-text)]">EST. MINUTES</label>

              <input
                type="number"
                min="0"
                value={estimatedMinutes}
                onChange={(event) => setEstimatedMinutes(event.target.value)}
                className="w-full rounded-md border border-[var(--border-color)] bg-[var(--panel-bg)] px-3 py-2 text-sm text-[var(--text-color)] outline-none focus:ring-1 focus:ring-[var(--muted-text)]"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs text-[var(--muted-text)]">WEIGHT</label>

              <select
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                className="w-full rounded-md border border-[var(--border-color)] bg-[var(--panel-bg)] px-3 py-2 text-sm text-[var(--text-color)] outline-none focus:ring-1 focus:ring-[var(--muted-text)]"
              >
                <option value="">Select</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={handleCancel}
              className="cursor-pointer rounded-md border border-[var(--border-color)] px-3 py-1.5 text-xs text-[var(--muted-text)] transition hover:bg-[var(--panel-bg)]"
            >
              CANCEL
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="cursor-pointer rounded-md border border-emerald-500/50 px-3 py-1.5 text-xs text-emerald-500 transition hover:bg-emerald-500/10"
            >
              SAVE
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="group rounded-lg border border-[var(--border-color)] bg-[var(--dashboard-bg)] p-4 transition hover:-translate-y-0.5 hover:bg-[var(--hover-bg)]">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold tracking-wide text-[var(--text-color)] uppercase">{assignment.title}</p>

          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--muted-text)]">
            <span>
              Due: <span className="text-[var(--text-color)]">{assignment.dueDate}</span>
            </span>

            <span>
              Est: <span className="text-[var(--text-color)]">{assignment.estimatedMinutes} min</span>
            </span>

            <span>
              Weight: <span className="text-[var(--text-color)]">{assignment.weight}</span>
            </span>
          </div>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="cursor-pointer rounded-md border border-[var(--border-color)] px-2 py-1 text-xs text-sky-400 transition hover:bg-[var(--panel-bg)]"
          >
            EDIT
          </button>

          <button
            type="button"
            onClick={() => onDeleteAssignment(assignment.id)}
            className="cursor-pointer rounded-md border border-[var(--border-color)] px-2 py-1 text-xs text-rose-500 transition hover:bg-[var(--panel-bg)] hover:text-rose-400"
          >
            DELETE
          </button>
        </div>
      </div>
    </section>
  );
}

export default AssignmentItem;
