import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const id = useParams().id;
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      axios.get(`http://localhost:5000/details/${id}`).then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <div className="my-6 w-10/12 mx-auto">
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
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Be a Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
