import React from "react";

const Proma = ({item}) => {
  

  return (
    <div className="w-full h-screen  bg-gray-100 overflow-hidden">
      <div className="bg-white overflow-hidden m-5 ">
        <p className=" text-2xl font-semibold m-5"></p>
        <div>
          <div className="flex ">
            {item.map((product) => (
              <div className="border w-[20vw] m-4 h-[60vh] text-center">
                <div className="border-t !h-[20vh]">
                  <img
                    src={product.img}
                    className="w-32 mx-auto mt-5 items-center"
                  />
                  <h1 className="text-sm  mt-3 font-semibold">{product.name}</h1>
                  <p className="text-sm text-green-700   mt-2">{product.price}</p>
                  <p className="text-sm text-green-700   mt-2">{product.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proma;
