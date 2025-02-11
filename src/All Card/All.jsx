/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const All = () => {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState(cards);
  const [isTrue, setIsTrue] = useState(false);
  useEffect(() => {
    try {
      axios
        .get(`https://volunteer-blue.vercel.app/all?filter=${filter}`)
        .then((res) => {
          setCards(res.data);
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [filter]);

  const layout = () => {
    setIsTrue(!isTrue);
  };

  console.log(isTrue);

  return (
    <div className="my-10">
      {/* Search and Toggle View Section */}
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Search Input */}
        <label className="input input-bordered flex items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            onChange={(e) => setFilter(e.target.value)}
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        {/* Toggle View Button */}
        <button
          onClick={layout}
          className="w-full md:w-auto btn btn-outline btn-info flex items-center gap-2"
        >
          {isTrue ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Grid View
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              List View
            </>
          )}
        </button>
      </div>

      {/* Grid View */}
      {isTrue ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
          {cards.map((card) => (
            <div
              key={card._id}
              className="w-11/12 mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-600 mt-3">
                  <span className="font-medium text-gray-900">Category:</span>{" "}
                  {card.category}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-medium text-gray-900">Deadline:</span>{" "}
                  {card.deadline}
                </p>
                <Link
                  to={`details/${card._id}`}
                  className="mt-5 inline-block w-full text-center px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-md hover:bg-blue-700 transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // List View
        <div className="my-6 w-full overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
          <table className="w-full mx-auto min-w-max border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Thumbnail
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Deadline
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cards.map((card) => (
                <tr
                  key={card._id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-4 py-3">
                    <img
                      src={card.thumbnail}
                      alt={card.title}
                      className="w-16 h-12 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {card.title}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {card.category}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {card.deadline}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      to={`details/${card._id}`}
                      className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-all duration-300"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* No Cards Message */}
      {cards.length === 0 && (
        <p className="text-center py-6 text-gray-600">No cards available.</p>
      )}
    </div>
  );
};

export default All;
