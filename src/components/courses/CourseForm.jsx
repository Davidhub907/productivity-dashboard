import { useState } from "react";

function CourseForm({ onAddCourse }) {
    const [courseName, setCourseName] = useState("");
    const [courseColor, setCourseColor] = useState("#32472c");

    function handleSubmit(event) {
        event.preventDefault();
        
        const newCourse = {
            id: crypto.randomUUID(),
            name: courseName.trim(),
            color: courseColor,
        }
        console.log("New Course Created:", newCourse);
        onAddCourse?.(newCourse);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Course Name: 
                    <input type ="text" value={courseName} onChange={(e) => setCourseName(e.target.value)}/>
                </label>
                <br />
                <label> Course Color: 
                    <input type="color" value={courseColor} onChange={(e) => setCourseColor(e.target.value)} />
                </label>
                <br />
                <button type="submit" className="mt-4 rounded bg-zinc-600 px-2 py-1 hover:bg-zinc-700">Submit</button>
            </form>
        </div>
    );
}

export default CourseForm;