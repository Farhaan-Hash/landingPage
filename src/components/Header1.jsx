import React, {useState} from "react";

const Sidebar = ({showSidebar, onCloseSidebar}) => {
  return (
    <div
      className={`bg-gray-800 h-screen w-60 text-white flex flex-col z-10 justify-center items-center fixed top-0 left-0 transition-transform transform ${
        showSidebar ? "translate-x-0" : "-translate-x-60"
      }`}
    >
      <a href="#" className="text-gray-300 hover:text-white py-2 px-4">
        Home
      </a>
      <a href="#" className="text-gray-300 hover:text-white py-2 px-4">
        Menu
      </a>
      <a href="#" className="text-gray-300 hover:text-white py-2 px-4">
        Service
      </a>
      <a href="#" className="text-gray-300 hover:text-white py-2 px-4">
        Shop
      </a>
      <button
        onClick={onCloseSidebar}
        className="text-red-400 hover:text-red-500 absolute top-5 right-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

const Header1 = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setShowSidebar(true);
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <header className="container py-10">
      <nav className="flex flex-wrap md:flex-nowrap justify-between items-center">
        <div className="flex items-center space-x-6">
          <h2 className="text-3xl text-gray-800 font-bold">
            Grocx<span className="text-red-600">S</span>to
            <span className="text-red-800">re</span>
          </h2>
        </div>
        <div className="hidden md:flex items-center space-x-10 font-semibold capitalize">
          <a href="#" className="text-white-800">
            Home
          </a>
          <a href="#" className="text-white-600 hover:text-gray-800">
            Menu
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Service
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Shop
          </a>
        </div>
        <div className="flex space-x-6">
          <button
            onClick={handleOpenSidebar}
            className="cursor-pointer text-gray-700 text-xl font-semibold md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* ... */}
        </div>
      </nav>
      <Sidebar showSidebar={showSidebar} onCloseSidebar={handleCloseSidebar} />
    </header>
  );
};

export default Header1;
