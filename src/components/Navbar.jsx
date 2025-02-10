// import React, { useState } from "react";

// const Navbar =()=> {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="fixed top-0 w-full bg-black bg-opacity-80 p-3 z-50">
//       <div className="flex justify-between items-center max-w-6xl mx-auto px-5">
//         {/* Logo */}
//         <div className="text-white text-2xl font-bold">MyPortfolio</div>

//         {/* Mobile Menu Button */}
//         <button
//           className="text-white text-2xl md:hidden"
//           onClick={toggleMenu}
//         >
//           &#9776; {/* Hamburger Icon */}
//         </button>

//         {/* Navbar Links */}
//         <ul className="hidden md:flex space-x-6">
//           {["Welcome", "About", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
//             <li key={index}>
//               <a href={`#${item.toLowerCase()}`} className="text-blue-400 text-lg font-semibold px-3 py-2 rounded hover:bg-gray-800 transition">
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <ul className="md:hidden flex flex-col bg-black bg-opacity-90 w-full absolute top-14 left-0 p-4 space-y-4">
//           {["Welcome", "About", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
//             <li key={index}>
//               <a href={`#${item.toLowerCase()}`} className="block text-blue-400 text-lg font-semibold p-2 rounded hover:bg-gray-800 transition">
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="fixed top-0 w-full bg-black bg-opacity-80 p-3 md:p-4 z-50 backdrop-blur-sm">
//       <div className="flex justify-between items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Logo */}
//         <div className="text-white text-xl md:text-2xl lg:text-3xl font-bold hover:text-blue-400 transition-colors">
//           MyPortfolio
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="text-white p-2 md:hidden rounded-lg hover:bg-gray-800 transition-colors"
//           onClick={toggleMenu}
//           aria-label="Toggle navigation menu"
//         >
//           <span className="text-2xl">&#9776;</span>
//         </button>

//         {/* Desktop Navbar Links */}
//         <ul className="hidden md:flex space-x-4 lg:space-x-6">
//           {["Welcome", "About", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
//             <li key={index}>
//               <a
//                 href={`#${item.toLowerCase()}`}
//                 className="text-blue-400 text-base lg:text-lg font-medium px-3 py-2 rounded-md hover:bg-gray-800 transition-colors whitespace-nowrap"
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute w-full left-0 bg-black bg-opacity-90 backdrop-blur-sm">
//           <ul className="px-4 py-3 space-y-2 border-t border-gray-800">
//             {["Welcome", "About", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   className="block text-blue-400 text-base font-medium p-3 rounded-md hover:bg-gray-800 transition-colors"
//                   onClick={toggleMenu}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-white text-xl md:text-2xl font-bold hover:text-blue-400 transition-colors">
            MyPortfolio
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-4 lg:space-x-6">
            {["Welcome", "About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-blue-400 text-sm lg:text-base px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 ${isMenuOpen ? 'block' : 'hidden'}`}>
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={toggleMenu} />
        
        {/* Menu Panel - Slides from top */}
        <div className={`fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-sm transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Close Button */}
            <div className="flex justify-end h-16 items-center">
              <button
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="pb-8 space-y-4">
              {["Welcome", "About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-blue-400 text-xl p-3 rounded-md hover:bg-gray-800 transition-colors text-center"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




