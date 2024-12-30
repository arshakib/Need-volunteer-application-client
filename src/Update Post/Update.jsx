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
      .get(`http://localhost:5000/allpost/details/${id}`)
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
      .patch(`http://localhost:5000/posts/${id}`, apply)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    toast.success(" Post updated successfully!");
  };

  return (
    <div className="w-10/12 mx-auto">
      <ToastContainer />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Update Volunteer Need Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Thumbnail</label>
            <input
              type="text"
              name="thumbnail"
              defaultValue={formData.thumbnail}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Post Title</label>
            <input
              type="text"
              name="title"
              defaultValue={formData.title}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              defaultValue={formData.description}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            >
              <option value="">Select Category</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="social-service">Social Service</option>
              <option value="animal-welfare">Animal Welfare</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              defaultValue={formData.location}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              No. of Volunteers Needed
            </label>
            <input
              type="number"
              name="volunteersNeeded"
              defaultValue={formData.volunteersNeeded}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Deadline</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Organizer Name
            </label>
            <input
              type="text"
              name="organizerName"
              value={user?.displayName}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Organizer Email
            </label>
            <input
              type="email"
              name="organizerEmail"
              value={user?.email}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
