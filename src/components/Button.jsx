export default function Button({ text }) {
    return (
      <button
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-all"
      >
        {text}
      </button>
    );
  }
  

  