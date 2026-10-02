import { useState } from 'react';

function AssignmentAddForm({ onAddAssignment}) {
    const [assignmentTitle, setAssignmentTitle] = useState('');
    const [ course, setCourse] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [weight, setWeight] = useState('');
    const [estimatedMinutes, setEstimatedMinutes] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const newAssignment = {
            id: crypto.randomUUID(),
            title: assignmentTitle.trim(),
            courseId: "placeholder-course-id",
            dueDate: dueDate.trim(),
            weight: weight.trim(),
            estimatedMinutes: estimatedMinutes.trim(),
            completed: false
        };

        console.log('New Assignment Created:', newAssignment);
        onAddAssignment?.(newAssignment);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Assignment Title:
                    <input type="text" value={assignmentTitle} onChange={(e) => setAssignmentTitle(e.target.value)} />
                </label>
                <br />
                <label>
                    Course:
                    placeholder for course selection, I would like to add a dropdown menu to choose from existing courses.
                </label>
                <br />
                <label>
                    Due Date:
                    <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </label>
                <br />
                <label>
                    Difficulty Weight:
                    placeholder for difficulty weight selection, I would like to add a dropdown menu to choose from weight options.
                </label>
                <br />
                <label>
                    Estimated Minutes:
                    <input type="number" value={estimatedMinutes} onChange={(e) => setEstimatedMinutes(e.target.value)} />
                </label>
                <br />
                <button type="submit" className="mt-4 rounded bg-zinc-600 px-2 py-1 hover:bg-zinc-700">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AssignmentAddForm;