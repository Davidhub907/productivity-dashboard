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
      <section className="rounded-lg border border-zinc-700 bg-zinc-950 p-4">
        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs text-zinc-500">TITLE</label>

            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-600"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs text-zinc-500">DUE DATE</label>

              <input
                type="date"
                value={dueDate}
                onChange={(event) => setDueDate(event.target.value)}
                className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs text-zinc-500">EST. MINUTES</label>

              <input
                type="number"
                min="0"
                value={estimatedMinutes}
                onChange={(event) => setEstimatedMinutes(event.target.value)}
                className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs text-zinc-500">WEIGHT</label>

              <select
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-600"
              >
                <option value="">Select</option>
                <option value="light">Light</option>
                <option value="medium">Medium</option>
                <option value="heavy">Heavy</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={handleCancel}
              className="cursor-pointer rounded-md border border-zinc-800 px-3 py-1.5 text-xs text-zinc-400 transition hover:bg-zinc-900"
            >
              CANCEL
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="cursor-pointer rounded-md border border-emerald-800 px-3 py-1.5 text-xs text-emerald-400 transition hover:bg-emerald-950"
            >
              SAVE
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="group rounded-lg border border-zinc-800 bg-zinc-950/60 p-4 transition hover:border-zinc-700 hover:bg-zinc-950">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold tracking-wide text-zinc-200 uppercase">{assignment.title}</p>

          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500">
            <span>
              Due: <span className="text-zinc-400">{assignment.dueDate}</span>
            </span>

            <span>
              Est: <span className="text-zinc-400">{assignment.estimatedMinutes} min</span>
            </span>

            <span>
              Weight: <span className="text-zinc-400">{assignment.weight}</span>
            </span>
          </div>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="cursor-pointer rounded-md border border-zinc-800 px-2 py-1 text-xs text-sky-400 transition hover:border-zinc-700 hover:bg-zinc-900"
          >
            EDIT
          </button>

          <button
            type="button"
            onClick={() => onDeleteAssignment(assignment.id)}
            className="cursor-pointer rounded-md border border-zinc-800 px-2 py-1 text-xs text-rose-500 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-rose-400"
          >
            DELETE
          </button>
        </div>
      </div>
    </section>
  );
}

export default AssignmentItem;
