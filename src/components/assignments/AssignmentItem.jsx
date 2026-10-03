function AssignmentItem({ assignment }) {
  return (
    <section className="rounded-md border border-zinc-800 p-3 transition duration-600 hover:-translate-y-1 hover:bg-zinc-800 hover:shadow-lg">
      <p className="text-base font-bold text-zinc-200 uppercase">{assignment.title}</p>

      <p className="text-sm text-zinc-400">Due: {assignment.dueDate}</p>

      <p className="text-sm text-zinc-400">Estimated: {assignment.estimatedMinutes} minutes</p>
    </section>
  );
}

export default AssignmentItem;
