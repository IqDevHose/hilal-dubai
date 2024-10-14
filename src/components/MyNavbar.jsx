
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="relative font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900 
               before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 
               before:origin-left before:scale-x-0 before:transform 
               before:rounded-full before:bg-gray-900 before:transition-all 
               before:duration-200 hover:before:scale-x-100"
  >
    {children}
  </Link>
);

export function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home ", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },

  ];

  return (
    <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
      {/* Adjusted padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-20"> {/* Increased height */}


          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="beirut Logo"
                className="w-64 object-cover"
              />
            </Link>
          </div>


          <div className="hidden md:block">
            {/* Increased space between items */}
            <div className="ml-10 flex items-baseline gap-6 text-xl">

              {navItems.map((item) => (
                <NavLink key={item.name} to={item.path}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>


          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6"> {/* Adjusted padding and spacing */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-3 rounded-md text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
