import React, {useState} from "react";
import Sidebar from "./Sidebar";

const ResponsiveNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        {/* Logo or Navbar Brand */}
        <span className="text-xl font-bold">Your Logo</span>

        {/* Navbar links */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Sidebar toggle button (visible on mobile) */}
        <div className="md:hidden">
          <button onClick={handleSidebarToggle}>
            {isSidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer transition-transform transform rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer transition-transform transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar (visible on mobile) */}
      {isSidebarOpen && <Sidebar onCloseSidebar={handleSidebarToggle} />}
    </nav>
  );
};

export default ResponsiveNavbar;
