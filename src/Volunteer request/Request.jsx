import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";
import { toast, ToastContainer } from "react-toastify";

const Request = () => {
  const { user } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://volunteer-blue.vercel.app/applied/${user?.email}`)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(posts);
  const handleDelete = (id) => {
    axios
      .delete(`https://volunteer-blue.vercel.app/request/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          setPosts(posts.filter((post) => post._id !== id));
          toast.success(" Request canceled successfully!");
        }
      })
      .catch((err) => {
        console.error("Error deleting post:", err);
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Volunteer Posts</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id} className="hover:bg-gray-100 border-b">
                  <td className="py-2 px-4">{post.volunteerName}</td>
                  <td className="py-2 px-4">{post.volunteerEmail}</td>
                  <td className="py-2 px-4">{post.deadline}</td>
                  <td className="py-2 px-4 text-center">
                    <button
                      onClick={() => handleDelete(post?._id)}
                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {posts.length === 0 && (
            <p className="text-center py-4">No posts available.</p>
          )}
        </div>
      </div>
      );
    </div>
  );
};

export default Request;
