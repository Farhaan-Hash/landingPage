import React from "react";

const Sidebar = ({onCloseSidebar}) => {
  return (
    <div className="fixed top-0 right-0 h-screen w-1/2 bg-gray-800 p-6 transition-transform transform translate-x-0 md:translate-x-full">
      {/* Close button */}
      <button
        className="mt-4 text-white hover:text-gray-400"
        onClick={onCloseSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Sidebar links */}
      <div className="space-y-4">
        <a href="/" className="block text-white hover:text-gray-400">
          Home
        </a>
        <a href="/about" className="block text-white hover:text-gray-400">
          About
        </a>
        <a href="/contact" className="block text-white hover:text-gray-400">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
