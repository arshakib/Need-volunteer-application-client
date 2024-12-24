/* eslint-disable react/prop-types */
const Card = ({ card }) => {
  const { thumbnail, title, category, deadline } = card;
  console.log(card);
  return (
    <div className=" w-10/12 mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img src={thumbnail} alt="" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">
          <span className="font-medium">Category:</span> {category}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          <span className="font-medium">Deadline:</span> {deadline}
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
