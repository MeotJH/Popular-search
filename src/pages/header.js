import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex space-x-4 items-center">
            {/* Logo or brand */}
            <a href="/" className="text-white text-xl font-semibold">
              인기 검색어
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-white hover:text-gray-300">
              Youtube
            </Link>
            <Link to="/naver" className="text-white hover:text-gray-300">
              Naver
            </Link>
            <Link to="/tweeter" className="text-white hover:text-gray-300">
              Tweeter
            </Link>
            <Link to="/google" className="text-white hover:text-gray-300">
              Google
            </Link>
            <Link to="/namu-wiki" className="text-white hover:text-gray-300">
              NamuWiki
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 13H5v-2h14v2zm2-6H3V5h18v2zm-2 10H5v-2h14v2zM3 19h18v2H3v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <a href="/" className="block py-2 px-4 text-white hover:bg-gray-600">
            Home
          </a>
          <a href="/" className="block py-2 px-4 text-white hover:bg-gray-600">
            About
          </a>
          <a href="/" className="block py-2 px-4 text-white hover:bg-gray-600">
            Services
          </a>
          <a href="/" className="block py-2 px-4 text-white hover:bg-gray-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
