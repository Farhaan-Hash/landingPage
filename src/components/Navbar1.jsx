import {useState} from "react";
// import HamburgerIcon from "../assets/icons/hamburger.svg";
import StarIcon from "../assets/icons/star.svg";
import FuelerIcon from "../assets/icons/fueler.svg";
import LeafIcon from "../assets/img/leaf.png";
import ChefIcon from "../assets/img/chef.png";
import DishIcon from "../assets/img/dish.png";
import DriverIcon from "../assets/img/driver.png";
import VegIcon from "../assets/img/vegetable.png";
import AvatarIcon1 from "../assets/img/avatar-1.jpeg";
import AvatarIcon2 from "../assets/img/avatar-2.jpeg";
import AvatarIcon3 from "../assets/img/avatar-3.jpeg";

const Navbar1 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const activeMenu = "Home";
  const menus = ["Home", "Delivery", "Pricing", "FAQs", "Contact"];
  const imageArray = [AvatarIcon1, AvatarIcon2, AvatarIcon3];
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className={`w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-transparent to-green-100 ${
        sidebarOpen ? "overflow-hidden h-screen" : ""
      }`}
    >
      <nav className="flex justify-between items-center py-8 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24">
        <a href="#" className="text-3xl md:text-4xl font-bold tracking-wide">
          Organ<span className="text-green-500">o</span>
        </a>
        <div
          className={`inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14 ${
            sidebarOpen ? "fixed flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8">
            {menus.map((menu) => (
              <li
                key={menu}
                className={`text-lg md:text-base lg:text-lg font-medium group ${
                  activeMenu === menu ? "text-green-500" : ""
                }`}
              >
                <a href="#"> {menu} </a>
                <div className="h-0.5 bg-green-500 scale-x-0 group-hover:scale-100 transition-transform origin-right-0 rounded-full duration-300 ease-out" />
              </li>
            ))}
          </ul>
          <button className="flex justify-center items-center h-13 px-7 font-medium text-white bg-green-500 p-3 rounded-xl hover:shadow-xl hover:text-green-100 hover:bg-green-700 transition-shadow duration-300 whitespace-nowrap">
            Get started
          </button>
        </div>
        <button
          onClick={handleSidebarToggle}
          className="block md:hidden relative z-50 transition-all duration-300"
        >
          {!sidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </nav>

      <div className="flex flex-wrap-reverse gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="relative z-10 md:w-1/2 w-full">
          <img
            className="absolute top-0 right-0 md:-top-4 md:-right-8 w-24 h-auto"
            src={LeafIcon}
            alt="leaf"
          />
          <span className="flex items-center px-1 text-xl text-green-500">
            <span className="font-medium text-green-500">
              100% Organic food
            </span>
            <img className="w-auto h-8" src={VegIcon} alt="" />
          </span>
          <h1 className="pt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight whitespace-nowrap">
            Healthy Lifestyle <br />
            is your only <br />
            <span className="whitespace-nowrap text-green-500">
              unfair advantage
            </span>
          </h1>
          <p className="pt-8 sm:text-lg max-w-md font-normal text-gray-600 leading-relaxed">
            Choose healthy habits with Organo daily meal prepared by our expert
            nutritionist and chef
          </p>
          <div className="flex pt-8 space-x-4 sm:space-x-6">
            <button className="flex justify-center items-center bg-green-500 p-4 w-full sm:w-auto h-13 px-8 bg-green-500 font-medium text-white rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300">
              Get started
            </button>
            <button className="flex justify-center items-center w-full sm:w-auto h-13 px-8 font-medium text-gray-900 border border-gray-900 rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300">
              Explore menu
            </button>
          </div>
          <div className="flex pt-20">
            <img className="w-24" src={ChefIcon} alt="" />
            <div className="pt-5 pl-3">
              <div className="text-xl font-bold leading-relaxed">
                Chef of the month
              </div>
              <div className="inline-flex text-gray-600 leading-relaxed">
                People loved his 🍳
              </div>
              <div className="font-bold text-green-500 leading-relaxed">
                80+ famous dishes
              </div>
            </div>
          </div>
          <div>
            <div className="md:hidden flex pt-8 justify-end space-x-1 font-bold">
              <div className="justify-between">Powered by</div>
              <img
                className="w-6 h-6 bg-green-900 fill-current"
                src={FuelerIcon}
                alt="fueler"
              />
              <span>GrocxStore</span>
            </div>
          </div>
        </div>

        <div className="relative md:w-1/2 w-full flex flex-col justify-between">
          <img
            className="w-96 lg:w-full drop-shadow-2xl self-center lg:self-end"
            src={DishIcon}
            alt=""
          />
          <div className="absolute right-0 lg:-right-6 top-0 lg:top-28 flex flex-col py-5 px-7 rounded-2xl shadow-xl bg-white/80 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="flex -space-x-3">
              {imageArray.map((image, index) => (
                <div
                  key={index}
                  className="w-12 h-13 rounded-full border-4 border-white object-cover overflow-hidden"
                >
                  <img src={image} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="pt-3 font-bold">Happy customers</div>
            <div className="flex items-center text-gray-600 leading-relaxed">
              {/* <StarIcon /> */}
              <img src={StarIcon} alt="star" width={27} height={27} />
              <span className="pl-1">4.9 (+2.5k Ratings)</span>
            </div>
          </div>
          <div className="absolute left-0 bottom-0 md:bottom-32 lg:bottom-16 flex bg-white/80 rounded-2xl shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <img className="w-auto h-20 self-end" src={DriverIcon} alt="" />
            <div className="pr-7 pl-2 py-5">
              <div className="font-bold">Fast delivery</div>
              <div className="text-gray-600 leading-relaxed">
                30 mins delivery 🚀
              </div>
            </div>
          </div>
          <div className=" md:flex justify-end space-x-1 font-bold">
            <span>Powered by</span>
            <img
              className="w-6 h-6 bg-green-900 fill-current"
              src={FuelerIcon}
              alt="fueler"
            />
            <span>GrocxStore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
