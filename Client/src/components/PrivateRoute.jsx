import API_INSTANCE from '../services/api';
import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from './Navbar';

function PrivateRoute() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isValidating, setIsValidating] = useState(true);

    async function validateToken() {
        const token = localStorage.getItem('token');
        
        if (!token) {
            setIsAuthenticated(false);
            setIsValidating(false);
            return;
        }

        try {
            // Use API_INSTANCE instead of axios
            const response = await API_INSTANCE.get('/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setIsAuthenticated(true);
        } catch (error) {
            console.error('Token validation error:', error.response?.data);
            localStorage.removeItem('token');
            setIsAuthenticated(false);
        } finally {
            setIsValidating(false);
        }
    }

    useEffect(() => {
        validateToken();
    }, []);

    if (isValidating) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? (
        <div className="min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <Outlet />
            </div>
        </div>
    ) : (
        <Navigate to='/login' />
    );
}

export default PrivateRoute;
