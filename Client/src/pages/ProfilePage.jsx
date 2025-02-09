import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import API_INSTANCE from '../services/api';

function ProfilePage() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await API_INSTANCE.get('/auth/me');
                setUser(response.data.data);
            } catch (error) {
                toast.error('Failed to fetch profile');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (isLoading) {
        return <div className="text-center py-10 text-gray-700">Loading profile...</div>;
    }

    if (!user) {
        return <div className="text-center py-10 text-red-500">Failed to load profile</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-3">My Profile</h1>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <h2 className="text-gray-500 font-medium w-32">Name</h2>
                        <p className="text-gray-900 font-semibold text-lg">{user.name}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <h2 className="text-gray-500 font-medium w-32">Email</h2>
                        <p className="text-gray-900 font-semibold text-lg">{user.email}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <h2 className="text-gray-500 font-medium w-32">Member Since</h2>
                        <p className="text-gray-900 font-semibold text-lg">
                            {new Date(user.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
