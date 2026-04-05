import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      
      <div className="text-center max-w-lg">
    
        <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 drop-shadow-lg">
          404
        </h1>


        <h2 className="mt-6 text-2xl md:text-3xl font-semibold">
          Oops! Page not found
        </h2>


        <p className="mt-3 text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition transform shadow-lg"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-800 transition"
          >
            Go Back
          </button>
        </div>

        <div className="mt-10">
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;