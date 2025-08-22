import React from "react";
import Image1 from "../../../../public/catagories/mennn.webp";
import Image2 from "../../../../public/catagories/women.jpeg";
import Image3 from "../../../../public/catagories/kids.webp";
import Image4 from "../../../../public/catagories/businessman-accessories-man-s-style-men-s-accessories_160204-1731.avif";
import Image from "next/image";

const Catagory = () => {

  
  const catagory = [
    {
      image: Image1,
      cat: "men",
    },

    {
      image: Image2,
      cat: "women",
    },
    {
      image: Image3,
      cat: "kids",
    },
    {
      image: Image4,
      cat: "catagory",
    },
  ];

  return (
    <div className="capitalize pt-3 bg-gray-900">
      <h1 className="text-5xl font-bold text-white text-center p-3  ">
        Categories
      </h1>
      <div className="grid grid-rows-2 grid-cols-3  max-md:grid-cols-1  gap-2">
        <div className=" row-span-2 col-span-1  relative   h-[400px]">
          <Image className="object-cover" src={catagory[0].image} fill alt="" />
          
            
            <h1 className="text-2xl font-black absolute bottom-0 left-0 w-30 bg-white ">MEN</h1>
        </div>

        <div className=" relative row-span-2  col-span-1 h-[400px]">
        
          <Image className="object-cover" src={catagory[1].image} alt="" fill />
                      <h1 className="text-2xl font-black r absolute bottom-0 left-0  bg-white ">WOMEN</h1>

        </div>
        <div className=" relative  row-span-1 col-span-1  h-auto max-md:h-[400px]">
          {" "}
          <Image className="object-cover" src={catagory[2].image} alt="" fill />
                      <h1 className="text-2xl font-black  absolute bottom-0 left-0  bg-white ">KIDS</h1>

        </div>
        <div className="  relative row-span-1 col-span-1  h-auto max-md:h-[400px]">
          {" "}
          <Image className="object-cover" src={catagory[3].image} alt="" fill />
                      <h1 className="text-2xl font-black  absolute bottom-0 left-0   bg-white ">ACCESORIES</h1>

        </div>
      </div>
    </div>
  );
};

export default Catagory;
