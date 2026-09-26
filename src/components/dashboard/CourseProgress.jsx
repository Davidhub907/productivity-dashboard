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
                <div className="fixed inset-0 flex items-center justify-center bg-black/60">
                    <div className="font-mono rounded-lg border-2 border-zinc-800 bg-zinc-900 p-6 text-white">
                        <h1 className="mb-4 text-lg"> ADD NEW COURSE </h1>
                        <div className="flex items-end justify-between">
                            <CourseForm />
                            <button onClick={() => setShowAddCourseForm(false)} className="rounded bg-zinc-600 px-2 py-1 hover:bg-zinc-700">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
        );
    }

export default CourseProgress;