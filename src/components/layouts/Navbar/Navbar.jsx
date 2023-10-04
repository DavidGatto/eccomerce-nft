import { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
export const Navbar = ({ isSidebarExpanded }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <nav
      className={`bg-indigo-950 p-4 flex justify-around items-center w-full ${
        isMenuOpen ? "fixed top-0" : "sticky top-0"
      } ${isSidebarExpanded ? "-ml-64" : ""}`}
    >
      <div className="max-w-7xl">
        <input
          type="search"
          className="w-full py-2 px-3 placeholder-indigo-900 text-indigo-900 bg-gradient-to-tr from-indigo-300 to-indigo-400 hover:from-indigo-400 hover:to-indigo-500 rounded-md focus:outline-none"
          placeholder="Buscar..."
        />
      </div>
      <div className="relative inline-block text-left">
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gradient-to-tr from-indigo-300 to-indigo-400  rounded-md hover:from-indigo-400 hover:to-indigo-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-300 focus-visible:ring-opacity-50"
        >
          Categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 -mr-1 text-indigo-900"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 6.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48  bg-gradient-to-tr from-indigo-300 to-indigo-400  rounded-md shadow-lg">
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-indigo-900 hover:bg-indigo-300 shadow"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-indigo-900 hover:bg-indigo-300 shadow"
              >
                Option 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-indigo-900 hover:bg-indigo-300 shadow"
              >
                Option 3
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <button>
          <BsFillCartFill className=" w-7 h-7 text-indigo-500 hover:text-indigo-300" />
        </button>
        <small className="text-indigo-900 text-center bg-indigo-400 w-4 h-5 rounded-md">
          0
        </small>
      </div>
    </nav>
  );
};
