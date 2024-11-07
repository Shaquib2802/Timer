import React from 'react'
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue",right:"10px", zIndex:100 }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className } left-4 `}
        style={{ ...style, display: "block", background: "green", left:"10px", zIndex:100 }}
        onClick={onClick}
      />
    );
  }

function Resp_Slider({items}) {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="slider-container bg-gray-200 w-full h-screen ">
        
        <Slider {...settings}>
        {items.map((shaquib) => (
          <div className="bg-white   ml-16 !w-[45vh] border border-gray-300  rounded-md  h-[55vh] flex flex-col  !justify-start p-2 gap-y-0.5 ">
            
            <img className="w-[80%] h-[60%] mx-auto border-red-500 " src={shaquib.thumbnail} />
            <h1 className="  text-sm font-semibold mt-2 ">{shaquib.title}</h1>
            <p className="text-sm font-light">{shaquib.description}</p>
            <p className="text-sm text-green-600 font-semibold">{shaquib.stock}</p>
            <div className="rounded-md px-1 bg-green-500 w-16 text-sm">
            {shaquib.price}
            </div>
            <div className="grid grid-cols-2"> 
              <p className=" line-through text-sm">{shaquib.discountPrice}</p>
              <p className=" bg-green-500 rounded-md text-white text-sm text-center  w-14  ">{shaquib.discountPercentage}</p>
          
            </div>

          </div>
        ))}
        </Slider>
        
      </div>
    );
  }
  

export default Resp_Slider