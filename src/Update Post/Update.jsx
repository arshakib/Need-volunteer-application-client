import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";

const Update = () => {
  const id = useParams().id;
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({});
  const [startDate, setStartDate] = useState(formData.deadline);

  useEffect(() => {
    axios
      .get(`https://volunteer-blue.vercel.app/allpost/details/${id}`)
      .then((res) => {
        console.log(res.data);
        setFormData(res.data);
        setStartDate(new Date(res.data.deadline));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteersNeeded = parseInt(form.volunteersNeeded.value);
    const deadline = format(new Date(startDate), "P");
    const organizerName = form.organizerName.value;
    const organizerEmail = form.organizerEmail.value;

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
    };

    axios
      .patch(`https://volunteer-blue.vercel.app/posts/${id}`, apply)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    toast.success(" Post updated successfully!");
  };

  return (
    <div className="w-11/12 mx-auto p-4">
      {/* Toast Container */}
      <ToastContainer />

      {/* Form Container */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {/* Form Heading */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Update Volunteer Need Post
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Thumbnail Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Thumbnail
            </label>
            <input
              type="text"
              name="thumbnail"
              defaultValue={formData.thumbnail}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Post Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Post Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={formData.title}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Description Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              name="description"
              defaultValue={formData.description}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Category Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="">Select Category</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="social-service">Social Service</option>
              <option value="animal-welfare">Animal Welfare</option>
            </select>
          </div>

          {/* Location Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              defaultValue={formData.location}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Volunteers Needed Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              No. of Volunteers Needed
            </label>
            <input
              type="number"
              name="volunteersNeeded"
              defaultValue={formData.volunteersNeeded}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Deadline DatePicker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Deadline
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Organizer Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Organizer Name
            </label>
            <input
              type="text"
              name="organizerName"
              value={user?.displayName}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Organizer Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Organizer Email
            </label>
            <input
              type="email"
              name="organizerEmail"
              value={user?.email}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-300"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
