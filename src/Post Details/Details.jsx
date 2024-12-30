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
    <div className="my-6 w-10/12 mx-auto">
      <div className="my-8">
        {data.volunteersNeeded === 0 ? (
          <div role="alert" className="alert alert-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
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
            <span>Volunteer requirement is not available</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="mb-6">
        <img
          src={data.thumbnail}
          alt="Post Thumbnail"
          className=" mx-auto object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="p-6 my-5">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p className="text-gray-700">{data.description}</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>
            <strong>Category:</strong>
            {data.category}
          </li>
          <li>
            <strong>Location:</strong>
            {data.location}
          </li>
          <li>
            <strong>No. of Volunteers Needed:</strong>
            {data.volunteersNeeded}
          </li>
          <li>
            <strong>Deadline:</strong>
            {data.deadline}
          </li>
          <li>
            <strong>Organizer:</strong>
            {data.organizerName}
          </li>
          <li>
            <strong>Email:</strong>
            {data.organizerEmail}
          </li>
        </ul>
        <div className="mt-6">
          <Link
            to={`/apply/${id}`}
            className={`mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${
              data.volunteersNeeded === 0
                ? "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50  btn-disabled "
                : ""
            }`}
          >
            Be a Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
