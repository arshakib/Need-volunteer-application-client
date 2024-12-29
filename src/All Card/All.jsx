/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const All = () => {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState(cards);
  useEffect(() => {
    try {
      axios.get(`http://localhost:5000/all?filter=${filter}`).then((res) => {
        setCards(res.data);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [filter]);

  return (
    <div className="my-10">
      <div className=" w-1/5 mx-auto">
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
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
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
    </div>
  );
};

export default All;
