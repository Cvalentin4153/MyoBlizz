import OverlayImage from "./Image/bgIM.svg";
import NavLogo from "./Image/NavLogo.png";
function App() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${OverlayImage})` }}
        className="h-screen bg-cover bg-no-repeat bg-center"
      >
        <header className="flex justify-between items-center py-2 bg-neutral-900 drop-shadow-2xl shadow-neutral-600">
          <a href="#">
            <img
              src={NavLogo}
              alt=""
              className="w-[147px] hover:scale-90 transition-all float-left"
            />
          </a>
          <ul className="hidden xl:flex justify-center items-center gap-12 font-semibold text-white font-serif">
            <li>About</li>
            <li>Products</li>
            <li>Collections</li>
            <li className="bx bx-cart"></li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default App;
