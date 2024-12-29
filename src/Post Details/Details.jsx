import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const id = useParams().id;

  return (
    <div className="my-6">
      <div className="mb-6">
        <img
          src="kjhg"
          alt="Post Thumbnail"
          className="w-10/12 mx-auto h-64 object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold">h1</h1>
        <p className="text-gray-700">h1</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>
            <strong>Category:</strong> h1
          </li>
          <li>
            <strong>Location:</strong>h1
          </li>
          <li>
            <strong>No. of Volunteers Needed:</strong> h1
          </li>
          <li>
            <strong>Deadline:</strong> h1
          </li>
          <li>
            <strong>Organizer:</strong> h1
          </li>
          <li>
            <strong>Email:</strong> h1
          </li>
        </ul>
        <button
          // onClick={handleVolunteer}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Be a Volunteer
        </button>
      </div>
    </div>
  );
};

export default Details;
