import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import API_INSTANCE from '../services/api';

function TaskForm({ task, mode = 'add' }) {
    const [title, setTitle] = useState(task?.title || '');
    const [description, setDescription] = useState(task?.description || '');
    const [status, setStatus] = useState(task?.status || 'Pending');
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (mode === 'add') {
                await API_INSTANCE.post('/tasks', {
                    title,
                    description,
                    status
                });
                toast.success('Task created successfully');
            } else {
                await API_INSTANCE.put(`/tasks/${task._id}`, {
                    title,
                    description,
                    status
                });
                toast.success('Task updated successfully');
            }
            navigate('/tasks');
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Operation failed';
            toast.error(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className=" text-black p-8 rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
                {mode === 'add' ? 'Create Task' : 'Edit Task'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="block w-full p-3 rounded-lg text-gray-600 border border-gray-600 focus:outline-gray-700 focus:ring-2 focus:ring-white"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="3"
                        className="block w-full p-3 rounded-lg  text-white border border-gray-600 focus:outline-gray-700 focus:ring-2 focus:ring-white"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="block w-full p-3 rounded-lg  text-black border border-gray-600 focus:outline-gray-700 focus:ring-2 focus:ring-white"
                    >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3 rounded-lg font-medium text-white transition-colors ${
                        isLoading
                            ? 'bg-gray-600 cursor-not-allowed'
                            : 'bg-black hover:bg-gray-700 focus:ring-2 focus:ring-white'
                    }`}
                >
                    {isLoading ? 'Processing...' : mode === 'add' ? 'Create Task' : 'Update Task'}
                </button>
            </form>
        </div>
    );
}

export default TaskForm;
