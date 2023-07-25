import ProductItem from "./ProductItem";
import imgBurger from "../assets/img1/burger.png";
import imgCake from "../assets/img1/cake.png";
import imgDish from "../assets/img1/dish.png";
import imgSalad from "../assets/img1/salad.png";
import backgroundImage from "../assets/img1/bg.jpg";

const ProductSection = () => {
  return (
    <div className=" flex justify-center  bg-gradient-to-l from-green-100 to-white ml-12">
      <div className="w-1/2 flex flex-col space-y-10  py-10">
        <div>
          <h1 className="text-7xl text-black font-bold font-[Raleway]">
            Order your{" "}
            <span className="text-6xl font-light">favorite Food</span>
          </h1>
        </div>
        <div>
          <p className="text-base text-gray-400 font-semibold font-[Roboto]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus debitis veritatis RepellendusRepellendus debitis
            veritatis <span className="text-black">sit amit</span>
          </p>
        </div>
        <div>
          <h2 className="text-4xl text-black font-extralight font-[Roboto]">
            Total order: <span className="font-extrabold">$80.32</span>
          </h2>
        </div>
        <div className="flex justify-start items-center space-x-8">
          <div className="flex h-[41px] w-[70px] border border-pink-400 p-2 rounded-full divide-x-2 divide-gray-300">
            {/* Increase and decrease quantity buttons go here */}
            <span>
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
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span>
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
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </div>
          <div className="flex justify-center items-center capitalize p-2 text-white">
            <a
              href="#"
              className="flex justify-center items-center capitalize bg-black p-2 text-white rounded-full space-x-3 shadow-one"
            >
              <span className="p-3 rounded-full bg-[#fed97f] text-black">
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
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </span>
              <span className="text-lg px-6 font-[Raleway] font-semibold">
                Buy now
              </span>
            </a>
          </div>
        </div>
        <div className="flex justify-start items-center mt-10 space-x-10">
          <div className="text-gray-800 bg-white rounded-full shadow-one shadow-black p-1 flex flex-row-reverse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          <div className="flex space-x-8">
            {/* Product cards go here */}

            <ProductItem image={imgCake} title="Cake" price={2.9} />
            <ProductItem image={imgSalad} title="Salad" price={2.9} />
          </div>
          <div className="text-gray-800 bg-white rounded-full shadow-one shadow-black p-1 flex flex-row-reverse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Images------------------------------------------- */}
      <div className="container flex justify-center mr-10">
        <div className="w-1/2 flex flex-col space-y-10 py-10">
          {/* Existing code */}
        </div>
        <div className="w-1/2 relative z-10">
          {/* Background image with curved top side */}
          <div
            className="absolute -right-10 top-1 h-[720px] w-2/5 rounded-tl-[342px] rounded-bl-[342px] blur-xl-sm  blur-3xl  -z-10"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="relative py-8">
            {/* Additional images at the top */}
            {/* Product image */}
            <div className="w-auto h-auto">
              <img
                src={imgDish}
                alt="Dish"
                className=" w-full h-full object-cover rounded-3xl drop-shadow-two"
              />
              <img
                src={imgBurger}
                alt="Dish"
                className=" absolute top-40 -left-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
