import React from 'react';
import ErrorImage from '../assets/error-404.png'; 
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <img src={ErrorImage} alt="Error" className="w-60 mb-4" />
      <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong</h2>
      <p className="text-gray-500 text-sm mb-4">
        The page you are looking for is not available.
      </p>
       <button
        onClick={() => navigate(-1)}
        className="text-white bg-linear-to-r from-purple-700 to-purple-400 hover:opacity-90 font-semibold px-4 py-2 rounded-lg text-lg"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
