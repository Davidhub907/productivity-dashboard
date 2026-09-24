import { useState } from "react";

function CourseForm() {
    const [courseName, setCourseName] = useState("");

    return (
        <div>
            <h1>New Course</h1>
            <form>
                <label>Course Name:
                    <input type ="text" placeholder="Course Name" onChange={(e) => setCourseName(e.target.value)}/>
                </label>
                <button type="submit">Submit</button>
                <p>Course Name: {courseName}</p>
            </form>
        </div>
    );
}

export default CourseForm;