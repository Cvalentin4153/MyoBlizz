import OverlayImage from "./Image/bgIM.png";

function App() {
  return (
    <main
      style={{ backgroundImage: `url(${OverlayImage})` }}
      className="h-screen bg bg-gradient-to-b from-black to-stone-400 bg-blend-overlay bg-cover"
    >
      <h1
        className="text-8xl font-bold text-white py-10 text-center"
        id="title"
      >
        MyoBlizz
      </h1>
      <div className="mx-auto flex items-center justify-center">
        <button class="px-8 py-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-600 to-blue-700 group-hover:from-green-800 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:bg-green-900">
          Shop Now
        </button>
      </div>
    </main>
  );
}

export default App;
