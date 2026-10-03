import AssignmentItem from './AssignmentItem';

function AssignmentList({ assignments, onDeleteAssignment }) {
  return (
    <section>
      <div className="subtle-scrollbar max-h-100 space-y-2 overflow-y-auto bg-zinc-900 tracking-wide">
        {assignments.map((assignment) => {
          return <AssignmentItem key={assignment.id} assignment={assignment} onDeleteAssignment={onDeleteAssignment} />;
        })}
      </div>
    </section>
  );
}

export default AssignmentList;
