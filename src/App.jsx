import React from "react";
import Card from "./Component/Card";
import Product from "./Component/Product";
import Proma from "./Component/proma";
import Card1 from "./Component/Card1";
import New_card from "./Component/New_card";
import Resp_Slider from "./Component/Resp_Slider";

import Use2 from "./Component/Use2";
import Insider from "./Component/Insider";
import Form1 from "./Component/Form1";
import UseState2 from "../Use";
import Formic from "../Use";
import Useeffect from "./Component/useeffect";


const data = [
  {
    id: 1,
    title: "OPPO Reno12",
    description: "Key focus on generative AI features",

    price: "Rs.25000",
    discountPrice: "Rs.31000",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-y18i-space-black-64gb-4gb-ram-Front-Back-View.webp",
  },
  {
    id: 2,
    title: "Samsung Galaxy Z-fold",
    description: "Join the flip side featured fold.....",

    price: "Rs.86000",
    discountPrice: "Rs.17500",
    discountPercentage: "10% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/samsung-galaxy-z-fold-6-5g-pink-512gb-12gb-ram-back-fold.webp",
  },
  {
    id: 3,
    title: "OnePlus Nord CE4",
    description: "A little more than you'd expect that.",

    price: "Rs.24000",
    discountPrice: "Rs.2500",
    discountPercentage: "12% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/ec64eb41a8e787a798be1b71c13a51bb.webp",
  },
  {
    id: 4,
    title: "Motorola G85 5G",
    description: "with stunning 3D curved pOLED 6.7",

    price: "Rs.31000",
    discountPrice: "Rs.25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/157773-800-auto.webp",
  },
  {
    id: 1,
    title: "OPPO Reno12",
    description: "Key focus on generative AI features",

    price: "Rs.31000",
    discountPrice: "Rs.25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-y18i-space-black-64gb-4gb-ram-Front-Back-View.webp",
  },
];
const proma = [
  {
    id: 1,
    name: "Timewear Metronaut",
    img: "https://rukminim2.flixcart.com/image/300/300/kc0u7bk0/watch/c/r/u/mt-gr904-ylbk-metronaut-original-imaft84wvt2jfegz.jpeg?q=70",
    price: "Under Rs.599",
    unit: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque maxime fugiat facilis veritatis voluptatum officia, sapiente assumenda hic! Necessitatibus repellat nam sed, nobis quas sint distinctio. Sint, soluta dolorum?",
  },
  {
    id: 1,
    name: "Fashion Favs",
    img: "https://rukminim2.flixcart.com/image/300/300/xif0q/shirt/g/a/5/36-vm-1522775-14013-unlimited-original-imah4cdzwsg4bk4p.jpeg?q=70",
    price: "Under Rs.699",
    unit: "DressesLorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque maxime fugiat facilis veritatis voluptatum officia, sapiente assumenda hic! Necessitatibus repellat nam sed, nobis quas sint distinctio. Sint, soluta dolorum?",
  },
  {
    id: 1,
    name: "Timewear Metronaut",
    img: "https://rukminim2.flixcart.com/image/300/300/xif0q/jean/i/u/d/28-united241-united-denim-original-imah39cmzux2q6yt.jpeg?q=70",
    price: "Under Rs.599",
    unit: "Branded Jeans Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque maxime fugiat facilis veritatis voluptatum officia, sapiente assumenda hic! Necessitatibus repellat nam sed, nobis quas sint distinctio. Sint, soluta dolorum?",
  },
  {
    id: 1,
    name: "PUMA, ADIDAS & more",
    img: "https://rukminim2.flixcart.com/image/300/300/xif0q/shoe/5/a/k/-original-imaghvb3sd3kz4wt.jpeg?q=70",
    price: "Under Rs.999",
    unit: "Shoes Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque maxime fugiat facilis veritatis voluptatum officia, sapiente assumenda hic! Necessitatibus repellat nam sed, nobis quas sint distinctio. Sint, soluta dolorum?",
  },
  {
    id: 1,
    name: "Asics, New Balance",
    img: "https://rukminim2.flixcart.com/image/300/300/xif0q/jean/i/u/d/28-united241-united-denim-original-imah39cmzux2q6yt.jpeg?q=70",
    price: "Under Rs.659",
    unit: "Sneakers Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque maxime fugiat facilis veritatis voluptatum officia, sapiente assumenda hic! Necessitatibus repellat nam sed, nobis quas sint distinctio. Sint, soluta dolorum?",
  },
  {
    id: 1,
    name: "Hots Trends",
    img: "https://rukminim2.flixcart.com/image/300/300/xif0q/apparel-set/t/f/i/l-kttwomensdressset58-co-ords-kotty-original-imagwcdezgyqtaqz.jpeg?q=70",
    price: "Under Rs.459",
    unit: "So chics& Minimal Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque maxime fugiat facilis veritatis voluptatum officia, sapiente assumenda hic! Necessitatibus repellat nam sed, nobis quas sint distinctio. Sint, soluta dolorum?",
  },
];

const App = () => {
  return (
    <div>
      {/* <Card name="Taj Mahal" arry={proma} /> */}
      {/* <Product/> */}
      {/*       <Proma name="HERO DEALS" item={proma}/>
       */}
      {/* <Card1 item={proma} /> */}
      {/* <New_card item={data}/> */}
      {/* <Resp_Slider items={data} /> */}
      {/* <Form1/> */}
      {/* <UseState2/> */}
      {/* <Form1/> */}
      {/* <Formic/> */}
      <Useeffect/>
    
    </div>
  );
};

export default App;
