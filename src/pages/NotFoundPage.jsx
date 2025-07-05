import React from 'react';
import { Link } from 'react-router';
import { FiAlertTriangle } from 'react-icons/fi';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <div className="max-w-md">
        
        <div className="flex justify-center mb-4 text-rose-500">
          <FiAlertTriangle size={60} />
        </div>

        <h1 className="text-6xl font-extrabold text-gray-800 tracking-tighter">
          404
        </h1>
        
        <h2 className="text-3xl font-semibold text-gray-700 mt-2">
          Page Not Found
        </h2>
        
        <p className="text-gray-500 mt-4">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        
        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg shadow-md hover:bg-rose-600 transition-colors duration-300"
        >
          Go to Homepage
        </Link>

      </div>
    </div>
  );
};

export default NotFoundPage;