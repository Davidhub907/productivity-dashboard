import AssignmentItem from './AssignmentItem';

function AssignmentList({ assignments, onDeleteAssignment }) {
  return (
    <section className="w-full">
      <div className="subtle-scrollbar max-h-100 space-y-3 overflow-y-auto pr-1">
        {assignments.length === 0 ? (
          <div className="rounded-md border border-dashed border-zinc-800 px-4 py-8 text-center">
            <p className="text-sm text-zinc-500">No assignments yet.</p>
          </div>
        ) : (
          assignments.map((assignment) => (
            <AssignmentItem key={assignment.id} assignment={assignment} onDeleteAssignment={onDeleteAssignment} />
          ))
        )}
      </div>
    </section>
  );
}

export default AssignmentList;
