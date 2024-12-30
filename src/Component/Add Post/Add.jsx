import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { AuthContext } from "../../Context/Context";
import { toast, ToastContainer } from "react-toastify";

const Add = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const handelSubmit = async (event) => {
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

    const post = {
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

    try {
      await axios
        .post("https://volunteer-blue.vercel.app/posts", post)
        .then((res) => {
          toast.success("Post added successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mt-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Add Volunteer Need Post
        </h1>
        <form onSubmit={handelSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Thumbnail URL
            </label>
            <input
              type="text"
              name="thumbnail"
              placeholder="Enter image URL"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Post Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter post title"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter description"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Category
            </label>
            <select
              name="category"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            >
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="social-service">Social Service</option>
              <option value="animal-welfare">Animal Welfare</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              No. of Volunteers Needed
            </label>
            <input
              type="number"
              name="volunteersNeeded"
              placeholder="Enter number"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Deadline
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Organizer Name
            </label>
            <input
              type="text"
              name="organizerName"
              value={user?.displayName}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Organizer Email
            </label>
            <input
              type="email"
              name="organizerEmail"
              value={user?.email}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
