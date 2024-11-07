import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
      name: "Laptop",
      price: 1200,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
      name: "Laptop",
      price: 1200,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
      name: "Laptop",
      price: 1200,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
      name: "Laptop",
      price: 1200,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
      name: "Laptop",
      price: 1200,
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
      name: "Laptop",
      price: 1200,
    },
  ];
  return (
    <div className=" bg-rose-300 flex gap-5 h-screen w-full p-5">
      {products.map((item) => (
        <div className=" h-[30vh] w-[10vw]  bg-green-400 text-center">
          <img src={item.img} />
          <h1>{item.name}</h1>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
