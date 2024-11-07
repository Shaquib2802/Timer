import React from "react";

const Card1 = ({ item }) => {
  /* console.log(item); */

  return (
    <div className="w-full h-full border rounded-md py-10">
      <div className="border h-[80%] w-[50%] gap-y-3 flex flex-col mx-auto items-center p-10 rounded-lg">
        {item.map((product) => (
          <div className=" w-[60%] h-[20%] items-center justify-center  shadow-lg  rounded-md ">
            <img
              src={product.img}
              className="rounded-t-lg"
              alt=""
            />
            <div className="p-7">
              <div className="text-xl font-bold  text-gray-600 ">
                {product.name}
              </div>
              <p className="mt-3 text-gray-600 text-justify">
               {product.unit}
              </p>
              <div className="justify-start text-white p-4 bg-rose-400 w-[30%] rounded-full text-center mt-4">
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card1;
