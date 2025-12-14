export default function LoadMoreButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mb-4 px-6 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-medium rounded-lg shadow-md hover:from-gray-600 hover:to-gray-700 transition"
    >
      Load More
    </button>
  );
}