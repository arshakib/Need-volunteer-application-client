import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import axios from "axios";

const Volunteer = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({});
  const id = useParams().id;
  useEffect(() => {
    try {
      axios.get(`http://localhost:5000/details/${id}`).then((res) => {
        console.log(res.data);
        setFormData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteersNeeded = form.volunteersNeeded.value;
    const deadline = form.date.value;
    const organizerName = form.organizerName.value;
    const organizerEmail = form.organizerEmail.value;
    const status = form.status.value;
    const suggestion = form.suggestion.value;

    const apply = {
      thumbnail,
      title,
      description,
      category,
      location,
      volunteersNeeded,
      deadline,
      organizerName,
      organizerEmail,
      status,
      suggestion,
    };

    console.log(apply);

    axios.post(`http://localhost:5000/applied`, apply).then((res) => {
      console.log(res.data);
    });

    axios.patch(`http://localhost:5000/update/${id}`, apply).then((res) => {
      console.log(res.data);
    });

    form.reset();
  };

  return (
    <div className="my-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4 border rounded shadow"
      >
        <h2 className="text-lg font-bold mb-4">Volunteer Request Form</h2>

        {/* Read-only Fields */}
        <label className="block mb-2">Thumbnail</label>
        <input
          type="text"
          name="thumbnail"
          value={formData.thumbnail}
          readOnly
          className="w-full mb-4 p-2 border rounded bg-gray-100"
        />

        <label className="block mb-2">Post Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          readOnly
          className="w-full mb-4 p-2 border rounded bg-gray-100"
        />

        <label className="block mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          readOnly
          className="w-full mb-4 p-2 border rounded bg-gray-100"
        ></textarea>

        <label className="block mb-2">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          readOnly
          className="w-full mb-4 p-2 border rounded bg-gray-100"
        />

        <label className="block mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          readOnly
          className="w-full mb-4 p-2 border rounded bg-gray-100"
        />

        <label className="block mb-2">No. of Volunteers Needed</label>
        <input
          type="text"
          name="volunteersNeeded"
          value={formData.volunteersNeeded}
          readOnly
          className="w-full mb-4 p-2 border rounded bg-gray-100"
        />

        <label className="block mb-2">Deadline</label>
        <input
          type="text"
          name="date"
          value={formData.deadline}
          readOnly
          className="w-full mb-4 p-2 border rounded bg-gray-100"
        />

        <label className="block mb-2">Organizer Name</label>
        <input
          type="text"
          name="organizerName"
          value={formData.organizerName}
          readOnly
          className="w-full mb-4 p-2 border rounded bg-gray-100"
        />

        <label className="block mb-2">Organizer Email</label>
        <input
          type="text"
          name="organizerEmail"
          value={formData.organizerEmail}
          readOnly
          className="w-full mb-4 p-2 border rounded bg-gray-100"
        />

        {/* Logged-in User Info */}
        <label className="block mb-2">Volunteer Name</label>
        <input
          type="text"
          name="volunteerName"
          value={user?.displayName}
          readOnly
          className="w-full mb-4 p-2 border rounded bg-gray-100"
        />

        <label className="block mb-2">Volunteer Email</label>
        <input
          type="text"
          name="volunteerEmail"
          value={user?.email}
          readOnly
          className="w-full mb-4 p-2 border rounded bg-gray-100"
        />

        {/* Editable Field */}
        <label className="block mb-2">Suggestion</label>
        <textarea
          name="suggestion"
          value={formData.suggestion}
          className="w-full mb-4 p-2 border rounded"
        ></textarea>

        {/* Status Field */}
        <input
          type="text"
          name="status"
          readOnly
          value="request"
          className="w-full mb-4 p-2 border rounded bg-gray-100"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Request
        </button>
      </form>
    </div>
  );
};

export default Volunteer;
