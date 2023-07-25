import {BeakerIcon, Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import {useState} from "react";
const Header = () => {
  let Links = [
    {name: "Home", link: "/"},
    {name: "Services", link: "/Services"},
    {name: "About", link: "/About"},
    {name: "Contact", link: "/contact"},
  ];
  let [show, setShow] = useState(false);
  return (
    <div className="bg-white-300 shadow-md w-full fixed top-0 left-0 ">
      {/* Logo */}
      <div className="md:px-10 py-5 px-7 md:flex justify-between items-center ">
        <div className="flex text-2xl cursor-pointer items-center gap-2 ">
          <BeakerIcon className="w-7 h-7 text-blue-600 " />
          <span className="font-bold">Infix</span>
        </div>
        {/* {sidebar icon} */}
        <div
          className="w-7 h-7 text-green-600 cursor-pointer absolute right-8 top-6 md:hidden"
          onClick={() => setShow(!show)}
        >
          {show ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        {/* Nav Links */}
        <ul
          className={`md:flex pl-9 md:pl-0 text-2xl cursor-pointer md:pb-0 pb-12 absolute md:static 
        bg-white md:z-auto z-[-1] left-0 w-ful md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          show ? "top-12" : "top-[-490px]"
        }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="font-normal my-6 md:my-0 md:ml-8">
              <a className="text-green-800  hover:text-gray-800">{link.name}</a>
            </li>
          ))}
          <button className="btn bg-green-800 text-white py-0.5 px-3 md:ml-8 rounded md:static hover:text-gray-800">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
