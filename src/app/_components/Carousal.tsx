"use client";
import React, { useState } from "react";
import image1 from "../../..//public/catagories/12.png";
import image2 from "../../..//public/catagories/111 (1).png";
import image3 from "../../..//public/catagories/carousal2.jpg";
import Image from "next/image";

const Carousal = () => {
  // usestate id called and initial value is set to 0 to count
  const [index, setindex] = useState(0);

  // created an array and gave images and titles to dynamically allocate
  const gallery = [
    {
      image: image1,
      title: "Groceries",
      subtitle: "Buy your favorite groceries for resonable price ",
    },
    {
      image: image2,
      title: "Mobile Phones",
      subtitle: "save big upto 75% off on mobile phones",
    },
    {
      image: image3,
      title: "Home Appliances ",
      subtitle: "upto 60% off on home appliances ",
    },
  ];

  //    create 2 functions for onclick ::function for onclick!!!

  // function to view next image

  const nextSlide = () => {
    if (index === gallery.length - 1) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  };
  // function to vew previous image in a carousal//======
  const prevSlide = () => {
    if (index === 0) {

      setindex(gallery.length - 1);

    } else {
      setindex(index - 1);
    }
  };

  return (
    <div className="relative h-[500px]">
      <Image className="object-cover " fill src={gallery[index].image} alt="" />
      <div className="absolute z-10 w-full h-full flex items-center justify-between">
        {/* left  button  */}
        <button
          className=" text-4xl font-bold hover:bg-blue-900 bg-blue-800 rounded-full  w-13 h-13 text-center text-white"
          onClick={prevSlide}
        >
          {"<"}
        </button>

        <button
          className="right-5 bottom-45  text-4xl font-bold text-white hover:bg-blue-900 bg-blue-800  w-13 h-13 text-center rounded-full"
          onClick={nextSlide}
        >
          {">"}
        </button>
        {/* right button */}
      </div>
      {/* dynamically adjusted   text  */}
      <div className="absolute flex flex-col h-full w-full justify-center items-center text-black">
        <h1 className="text-5xl font-bold  ">{gallery[index].title} </h1>
        <h4 className="text-1xl font-bold pt-3 ">{gallery[index].subtitle}</h4>
        
      </div>
    </div>
  );
};

export default Carousal;
