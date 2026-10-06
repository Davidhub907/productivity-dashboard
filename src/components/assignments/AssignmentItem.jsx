function AssignmentItem({ assignment, onDeleteAssignment }) {
  return (
    <section className="group rounded-lg border border-zinc-800 bg-zinc-950/60 p-4 transition hover:border-zinc-700 hover:bg-zinc-950">
      <div className="flex items-center justify-between gap-4">
        {/* Left side */}
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

        {/* Right side */}
        <button
          type="button"
          onClick={() => onDeleteAssignment(assignment.id)}
          className="shrink-0 cursor-pointer rounded-md border border-zinc-800 px-2 py-1 text-xs text-rose-500 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-rose-400"
        >
          DELETE
        </button>
      </div>
    </section>
  );
}

export default AssignmentItem;
