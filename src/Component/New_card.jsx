import React from "react";


const New_card = ({ item }) => {
  return (
    <div className="w-full h-screen  p-14 bg-gray-200 !flex  ">
      <div className=" border border-gray-500 rounded-md bg-white  gap-5 h-[60vh]  w-full  ">
        {item.map((shaquib) => (
          <div className="bg-white w-[20%] border  border-gray-300 rounded-md m-2 h-[55vh] flex flex-col  !justify-start p-2 gap-y-0.5 ">
            
            <img className="w-[80%] h-[60%] mx-auto border-red-500 " src={shaquib.thumbnail} />
            <h1 className="  text-sm font-semibold mt-2 ">{shaquib.title}</h1>
            <p className="text-sm font-light">{shaquib.description}</p>
            <p className="text-sm text-green-600 font-semibold">{shaquib.stock}</p>
            <div className="rounded-md px-1 bg-green-500 w-16 text-sm">
            {item.price}
            </div>
            <div className="grid grid-cols-2"> 
              <p className=" line-through text-sm">{shaquib.discountPrice}</p>
              <p className=" bg-green-500 rounded-md text-white text-sm text-center  w-14  ">{shaquib.discountPercentage}</p>
          
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default New_card;
