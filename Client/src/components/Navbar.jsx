import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="bg-gradient-to-r from-gray-400 via-white to-gray-400 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/tasks" className="text-2xl font-bold text-white">
                    Task Manager
                </Link>
                <div className="flex gap-4">
                    <Link
                        to="/tasks"
                        className="bg-white text-black font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-indigo-100 transition duration-300"
                    >
                        Tasks
                    </Link>
                    <Link
                        to="/tasks/add"
                        className="bg-white text-black font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-purple-100 transition duration-300"
                    >
                        Add Task
                    </Link>
                    <Link
                        to="/profile"
                        className="bg-white text-black font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-pink-100 transition duration-300"
                    >
                        Profile
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="bg-white text-black font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-red-100 transition duration-300"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
