import React, { useState } from "react";

const Navbar =()=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 p-3 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-5">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">MyPortfolio</div>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMenu}
        >
          &#9776; {/* Hamburger Icon */}
        </button>

        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-6">
          {["Welcome", "About", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase()}`} className="text-blue-400 text-lg font-semibold px-3 py-2 rounded hover:bg-gray-800 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col bg-black bg-opacity-90 w-full absolute top-14 left-0 p-4 space-y-4">
          {["Welcome", "About", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase()}`} className="block text-blue-400 text-lg font-semibold p-2 rounded hover:bg-gray-800 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;




