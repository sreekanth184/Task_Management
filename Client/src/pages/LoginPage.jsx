import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import API_INSTANCE from '../services/api'

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await API_INSTANCE.post('/auth/login', {
            email,
            password
        });

        console.log('LOGIN RESPONSE:', response.data);
        const token = response.data.data.token;
        localStorage.setItem('token', token);
        navigate('/tasks');
    } catch (error) {
        
        console.error('LOGIN ERROR:', {
            response: error.response,
            request: error.request,
            message: error.message
        });
        const errorMsg = error.response?.data?.message || 'Login failed';
        toast.error(errorMsg);
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-400 via-white to-gray-400 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8  shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-lg shadow-sm space-y-5">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:border-black focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none  focus:border-black focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isLoading 
                  ? 'bg-gray-500 cursor-not-allowed' 
                  : 'bg-black hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2'
              }`}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>

          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account?{' '}
              <Link 
                to="/register" 
                className="font-medium text-black hover:text-gray-600"
              >
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;