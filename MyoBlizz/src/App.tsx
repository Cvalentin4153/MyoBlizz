import OverlayImage from "./Image/bgIM.svg";
import NavLogo from "./Image/NavLogo.png";
function App() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${OverlayImage})` }}
        className="h-screen bg-cover bg-no-repeat bg-center"
      >
        <header className="flex justify-between items-center py-0 bg-neutral-900 drop-shadow-2xl shadow-neutral-600">
          <a href="#">
            <img
              src={NavLogo}
              alt=""
              className="w-[210px] hover:scale-90 transition-all float-left ml-8"
            />
          </a>
          <ul className="hidden xl:flex justify-center items-center text-center ml-18 gap-24 font-medium font-roboto text-white text-lg">
            <li>
              <button className="hover:scale-105 transition-all bg-stone-800 bg-opacity-80 border-none rounded-full py-1 px-4 flex-row justify-center align-middle text-center">
                About
              </button>
            </li>
            <li>
              <button className="hover:scale-105 transition-all bg-stone-800 bg-opacity-80 border-none rounded-full py-1 px-4 flex-row justify-center align-middle text-center">
                Products
              </button>
            </li>
            <li>
              <button className="hover:scale-105 transition-all bg-stone-800 bg-opacity-80 border-none rounded-full py-1 px-4 flex-row justify-center align-middle text-center">
                Collections
              </button>
            </li>
          </ul>
          <div className="flex justify-center items-center align-middle gap-y-0.5">
            <button className="bg-stone-800 bg-opacity-80 mr-8 flex justify-center items-center py-1 px-4 border-none rounded-full hover:scale-90">
              <i className="bx bx-cart bx-sm bx-tada-hover mr-2 text-white" />
              <h3 className="text-white font-roboto">View Cart</h3>
            </button>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
