import {useState} from 'react';
import DashboardPanel from './DashboardPanel';
import CourseForm from '../courses/CourseForm'

function CourseProgress() {
    const [showAddCourseForm, setShowAddCourseForm] = useState(false);

    return(
        <>
            <DashboardPanel title="COURSE PROGRESS" subtitle="Fall Sem" className="min-h-[400px]" onHeaderAction={() => setShowAddCourseForm(!showAddCourseForm)}>
                <p>Course progress placeholder</p>
            </DashboardPanel>

            {showAddCourseForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-black/60">
                    <div className="rounded-lg border-2 border-zinc-800 bg-zinc-900 p-6 text-white">
                        <CourseForm />
                    </div>
                </div>
            )}
        </>
    );
}

export default CourseProgress;