import { useState } from 'react';

function AssignmentAddForm({ courseID, courseName, onAddAssignment}) {
    const [assignmentTitle, setAssignmentTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [weight, setWeight] = useState('');
    const [estimatedMinutes, setEstimatedMinutes] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const newAssignment = {
            id: crypto.randomUUID(),
            title: assignmentTitle.trim(),
            courseId: courseID,
            dueDate: dueDate.trim(),
            weight: weight.trim(),
            estimatedMinutes: estimatedMinutes.trim(),
            completed: false
        };

        console.log('New Assignment Created:', newAssignment);
        onAddAssignment?.(newAssignment);

        //reset form after submission
        setAssignmentTitle('');
        setDueDate('');
        setWeight('');
        setEstimatedMinutes('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <h2 className="mb-4 text-lg">Add Assignment</h2>
                <label className="mb-1 block">
                    Assignment Title:
                    <input type="text" value={assignmentTitle} onChange={(e) => setAssignmentTitle(e.target.value)} placeholder="e.g. homework 1" className="rounded border border-zinc-900 bg-zinc-800 placeholder:text-zinc-500"/>
                </label>
                
                <label className="mb-1 block">
                    Due Date:
                    <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="rounded border border-zinc-900 bg-zinc-800 " />
                </label>
                
                <label className="mb-1 block">
                    Difficulty Weight:
                    <select value={weight} onChange={(e) => setWeight(e.target.value)} className="rounded border border-zinc-900 bg-zinc-800 ">
                        <option value="" className="text-zinc-500">Select Weight</option>
                        <option value="1">1 - Light</option>
                        <option value="2">2 - Medium</option>
                        <option value="3">3 - Heavy</option>
                    </select>
                </label>
                
                <label className="mb-1 block">
                    Estimated Minutes:
                    <input type="number" value={estimatedMinutes} onChange={(e) => setEstimatedMinutes(e.target.value)} placeholder="e.g. 30" className="rounded border border-zinc-900 bg-zinc-800 placeholder:text-zinc-500" />
                </label>
                
                <button type="submit" className="mt-4 rounded bg-zinc-600 px-2 py-1 hover:bg-zinc-700">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AssignmentAddForm;