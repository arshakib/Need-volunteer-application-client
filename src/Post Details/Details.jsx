import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const id = useParams().id;
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      axios
        .get(`https://volunteer-blue.vercel.app/allpost/details/${id}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <div className="my-6 w-full md:w-10/12 mx-auto">
      {/* Volunteer Alert */}
      <div className="my-8">
        {data.volunteersNeeded === 0 && (
          <div
            role="alert"
            className="flex items-center p-4 bg-yellow-100 dark:bg-yellow-800/30 text-yellow-700 dark:text-yellow-300 rounded-lg border border-yellow-200 dark:border-yellow-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current mr-3"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="font-medium">Volunteer positions filled</span>
          </div>
        )}
      </div>

      {/* Thumbnail */}
      <div className="mb-8 relative group">
        {/* Image Container */}
        <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg dark:shadow-gray-800/50 transition-all duration-300">
          {/* Loading State */}
          {!data.thumbnail && (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl"></div>
          )}

          {/* Image with Zoom Effect */}
          <img
            src={data.thumbnail}
            alt="Post Thumbnail"
            className={`mx-auto h-full object-cover transition-transform duration-300 ${
              data.thumbnail ? "group-hover:scale-105" : ""
            }`}
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/800x400"; // Fallback image
            }}
          />
        </div>

        {/* Optional: Overlay with Details */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

        {/* Optional: Caption */}
        {data.title && (
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <h3 className="text-xl font-semibold">{data.title}</h3>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/50">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          {data.title}
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          {data.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Details List */}
          <div className="space-y-4">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
              </svg>
              <span className="text-gray-700 dark:text-gray-300">
                <strong className="font-medium">Category:</strong>{" "}
                {data.category}
              </span>
            </div>

            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span className="text-gray-700 dark:text-gray-300">
                <strong className="font-medium">Location:</strong>{" "}
                {data.location}
              </span>
            </div>

            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <span className="text-gray-700 dark:text-gray-300">
                <strong className="font-medium">Volunteers Needed:</strong>{" "}
                {data.volunteersNeeded}
              </span>
            </div>

            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <span className="text-gray-700 dark:text-gray-300">
                <strong className="font-medium">Deadline:</strong>{" "}
                {data.deadline}
              </span>
            </div>

            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <span className="text-gray-700 dark:text-gray-300">
                <strong className="font-medium">Organizer:</strong>{" "}
                {data.organizerName}
              </span>
            </div>

            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <span className="text-gray-700 dark:text-gray-300">
                <strong className="font-medium">Email:</strong>{" "}
                {data.organizerEmail}
              </span>
            </div>
          </div>
        </div>

        {/* Volunteer Button */}
        <div className="mt-8">
          <Link
            to={`/apply/${id}`}
            className={`inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md transition-all duration-300 ${
              data.volunteersNeeded === 0
                ? "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
            }`}
          >
            {data.volunteersNeeded === 0
              ? "Positions Filled"
              : "Be a Volunteer"}
            {data.volunteersNeeded > 0 && (
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
