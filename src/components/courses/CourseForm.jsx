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
            <h1>New Course</h1>
            <form onSubmit={handleSubmit}>
                <label>Course Name: 
                    <input type ="text" value={courseName} onChange={(e) => setCourseName(e.target.value)}/>
                </label>
                <br />
                <label> Course Color: 
                    <input type="color" value={courseColor} onChange={(e) => setCourseColor(e.target.value)} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CourseForm;