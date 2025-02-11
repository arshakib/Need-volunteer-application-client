import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ card }) => {
  const { thumbnail, title, category, deadline, _id } = card;

  return (
    <div className="w-10/12 mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Optional: Add a gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-300">
          {title}
        </h2>

        {/* Category */}
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 text-blue-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M17.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L6 15.586 16.293 5.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-medium">Category:</span> {category}
        </div>

        {/* Deadline */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 text-blue-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-medium">Deadline:</span> {deadline}
        </div>

        {/* View Details Button */}
        <Link
          to={`allpost/details/${_id}`}
          className="inline-flex items-center justify-center w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          View Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
