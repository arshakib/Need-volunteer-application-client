import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Volunteer = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({});
  const id = useParams().id;
  useEffect(() => {
    try {
      axios
        .get(`https://volunteer-blue.vercel.app/allpost/details/${id}`)
        .then((res) => {
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
    const volunteerName = user?.displayName;
    const volunteerEmail = user?.email;
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
      volunteerName,
      volunteerEmail,
      suggestion,
    };

    console.log(apply);

    axios
      .post(`https://volunteer-blue.vercel.app/applied`, apply)
      .then((res) => {
        console.log(res.data);
      });

    axios
      .patch(`https://volunteer-blue.vercel.app/update/${id}`, apply)
      .then((res) => {
        console.log(res.data);
      });

    toast.success("Volunteer request submitted successfully!");

    form.reset();
  };

  return (
    <div className="my-6">
      {/* Toast Container */}
      <ToastContainer />

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
      >
        {/* Form Heading */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Volunteer Request Form
        </h2>

        {/* Read-only Fields */}
        <div className="space-y-4">
          {/* Thumbnail */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Thumbnail
            </label>
            <input
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Post Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Post Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Volunteers Needed */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              No. of Volunteers Needed
            </label>
            <input
              type="text"
              name="volunteersNeeded"
              value={formData.volunteersNeeded}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Deadline
            </label>
            <input
              type="text"
              name="date"
              value={formData.deadline}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Organizer Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Organizer Name
            </label>
            <input
              type="text"
              name="organizerName"
              value={formData.organizerName}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Organizer Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Organizer Email
            </label>
            <input
              type="text"
              name="organizerEmail"
              value={formData.organizerEmail}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Volunteer Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Volunteer Name
            </label>
            <input
              type="text"
              name="volunteerName"
              value={user?.displayName}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Volunteer Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Volunteer Email
            </label>
            <input
              type="text"
              name="volunteerEmail"
              value={user?.email}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Suggestion (Editable Field) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Suggestion
            </label>
            <textarea
              name="suggestion"
              value={formData.suggestion}
              onChange={(e) =>
                setFormData({ ...formData, suggestion: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Enter your suggestions (optional)"
            />
          </div>

          {/* Status Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Status
            </label>
            <input
              type="text"
              name="status"
              value="request"
              readOnly
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-300"
        >
          Request
        </button>
      </form>
    </div>
  );
};

export default Volunteer;
