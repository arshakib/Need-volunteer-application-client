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
      <div className=" w-1/5 mx-auto flex justify-between">
        <label className="input input-bordered flex items-center gap-2">
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

        <button onClick={layout} className="ml-7 btn btn-outline btn-info">
          {isTrue ? "Grid View" : "List View"}
        </button>
      </div>
      {isTrue ? (
        <div
          className="grid lg:grid-cols-3 gap-4 my-6
      "
        >
          {cards.map((card) => (
            <div className=" w-10/12 mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
              <img
                src={card.thumbnail}
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-medium">Category:</span> {card.category}
                </p>
                <p className=" my-4 text-sm text-gray-600 mt-1">
                  <span className="font-medium">Deadline:</span> {card.deadline}
                </p>
                <Link
                  className=" my-4 mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  to={`details/${card._id}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="my-6 w-10/12 mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Thumbnail</th>
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Category</th>
                <th className="border border-gray-300 px-4 py-2">Deadline</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cards.map((card) => (
                <tr key={card._id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <img
                      src={card.thumbnail}
                      alt=""
                      className="w-32 h-20 object-cover mx-auto"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {card.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {card.category}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {card.deadline}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <Link
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                      to={`details/${card._id}`}
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
      {cards.length === 0 && (
        <p className="text-center py-4">No cards available.</p>
      )}
    </div>
  );
};

export default All;
