import {useState} from 'react';
import DashboardPanel from './DashboardPanel';

function CourseProgress() {
    const [showAddCourseForm, setShowAddCourseForm] = useState(false);

    return(
        <DashboardPanel title="COURSE PROGRESS" subtitle="Fall Sem" className="min-h-[400px]" onHeaderAction={() => console.log('Header action clicked!')}>
            <p>Course progress placeholder</p>
        </DashboardPanel>
    )
}

export default CourseProgress;