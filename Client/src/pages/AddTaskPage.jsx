
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm.jsx'

function AddTaskPage() {
    return (
        <div>
            <div className=" flex justify-center  mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Create New Task</h1>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <TaskForm mode="add" />
            </div>
        </div>
    );
}

export default AddTaskPage;