import AssignmentItem from './AssignmentItem';

function AssignmentList({ assignments, onDeleteAssignment, onUpdateAssignment }) {
  return (
    <section>
      <div className="subtle-scrollbar max-h-100 space-y-2 overflow-y-auto bg-[var(--panel-bg)] tracking-wide">
        {assignments.map((assignment) => (
          <AssignmentItem
            key={assignment.id}
            assignment={assignment}
            onDeleteAssignment={onDeleteAssignment}
            onUpdateAssignment={onUpdateAssignment}
          />
        ))}
      </div>
    </section>
  );
}

export default AssignmentList;
