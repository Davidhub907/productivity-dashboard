import AssignmentItem from './AssignmentItem';

function AssignmentList({ assignments, onDeleteAssignment, onEditAssignment }) {
  return (
    <section>
      <div className="subtle-scrollbar max-h-100 space-y-2 overflow-y-auto bg-zinc-900 tracking-wide">
        {assignments.map((assignment) => (
          <AssignmentItem
            key={assignment.id}
            assignment={assignment}
            onDeleteAssignment={onDeleteAssignment}
            onEditAssignment={onEditAssignment}
          />
        ))}
      </div>
    </section>
  );
}

export default AssignmentList;
