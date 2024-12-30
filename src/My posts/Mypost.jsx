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

  //   console.log(post[0]?._id);
  return (
    <div className="w-10/12 mx-auto">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Volunteer Needs Posts</h2>
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {post.map((post) => (
              <tr key={post._id} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {post.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {post.location}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {post.deadline}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2 justify-center">
                  <Link
                    to={`/update/${post._id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mypost;
