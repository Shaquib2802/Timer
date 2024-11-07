import React from "react";

const arry = [1, 2, 3, 4];

const Card = (props) => {
  console.log(props.arry);
  return (
    <div className=" h-full w-full flex  flex-col items-center justify-center text-center">
      <img
        className=" h-36 w-36 "
        src="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg"
        alt=""
      />
      <p>
        This is <span className=" text-blue-600 text-4xl">{props.name}</span>
      </p>
    </div>
  );
};

export default Card;
