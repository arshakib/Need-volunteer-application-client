import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900">
      {/* 404 Text */}
      <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-100 mb-4 animate-bounce">
        404
      </h1>

      {/* Error Message */}
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center px-4">
        Oops! The page you are looking for does not exist.
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Go Back to Home
      </Link>

      {/* Optional: Animation or Illustration */}
      <div className="mt-12">
        <svg
          className="w-48 h-48 text-gray-400 dark:text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Error;
