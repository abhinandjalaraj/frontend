"use client";
import React, { useState } from "react";
import image1 from "../../..//public/catagories/girl-posing-with-shopping-bags.jpg";
import image2 from "../../..//public/catagories/happy-modern-asian-woman-going-shopping-malls-holding-bags-with-clothes-smiling-wearing-sungl.jpg";
import image3 from "../../..//public/catagories/menn.jpg";
import Image from "next/image";
import { storageurl } from "@/utils/BaseUrl";

const Carousal = ({data}:any) => {
  const carousal=data
  // console.log("this is data carousal",data.carousal)
  // usestate id called and initial value is set to 0 to count
  const [index, setindex] = useState(0);


  // function to view next image

  const nextSlide = () => {
    if (index === carousal.length - 1) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  };
  // function to vew previous image in a carousal//======
  const prevSlide = () => {
    if (index === 0) {

      setindex(carousal.length - 1);

    } else {
      setindex(index - 1);
    }
  };

  return (
    <div className="relative h-[500px] bg-black">
      <Image className="object-cover " fill src={storageurl+carousal[index].image} alt="" />
      <div className="absolute z-10 w-full h-full flex items-center justify-between">
        {/* left  button  */}
        <button
          className=" text-7xl font-extrabold font-anton size-15 text-center text-white"
          onClick={prevSlide}
        >
          {"<"}
        </button>

        <button
          className="right-5 bottom-45   font-extrabold font-anton text-7xl  text-white size-15 text-center "
          onClick={nextSlide}
        >
          {">"}
        </button>
        {/* right button */}
      </div>
      {/* <div className="absolute flex flex-col h-full w-full justify-center items-center font-serif font-bold">
        <h1 className="text-5xl font-bold  ">{carousal[index].text} </h1>
        <h4 className="text-1xl font-bold pt-3 ">{carousal[index].description}</h4>
        
      </div> */}
     
    </div>
  );
};

export default Carousal;
