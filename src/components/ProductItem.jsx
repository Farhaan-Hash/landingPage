const ProductItem = ({image, title, price}) => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-700 bg-[#fbe1c8] px-3 py-2 rounded-full space-y-2">
      <div className="h-[4.5rem] w-16 bg-white rounded-[85px/100px] relative">
        <img
          src={image}
          alt={title}
          className="absolute flex justify-center items-center h-14 w-14 top-2 left-[7%] drop-shadow-one"
        />
      </div>
      <h3 className="font-semibold text-sm">{title}</h3>
      <p className="text-sm font-bold text-black pb-2">
        <span className="text-red-600 font-extrabold">$</span>{" "}
        {price.toFixed(2)}
      </p>
    </div>
  );
};

export default ProductItem;
