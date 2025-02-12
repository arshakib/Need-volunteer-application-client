import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Mypost = () => {
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`https://volunteer-blue.vercel.app/myposts/${user?.email}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://volunteer-blue.vercel.app/posts/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success",
              });
              setPost(post.filter((post) => post._id !== id));
            }
          })
          .catch((err) => {
            console.error("Error deleting post:", err);
          });
      }
    });
  };

  return (
    <div className="container my-10">
      <div className="w-11/12 mx-auto p-4 ">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Volunteer Needs Posts
        </h2>

        <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-gradient-to-r from-blue-600 to-purple-600">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {post.map((post) => (
                <tr
                  key={post._id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    {post.title}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {post.location}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {post.deadline}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Link
                        to={`/update/${post._id}`}
                        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                        Update
                      </Link>

                      <button
                        onClick={() => handleDelete(post._id)}
                        className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {post.length === 0 && (
          <div className="text-center py-6">
            <p className="text-gray-600">No volunteer posts available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mypost;
