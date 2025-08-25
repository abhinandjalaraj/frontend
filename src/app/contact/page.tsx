import Image from "next/image";
import React from "react";
import image1 from "../../../public/contact/vintage-pink-telephone-composition.jpg";
import Location from "../_components/_Pages/Location";
import Contactlogo from "../_components/_Pages/Contactlogo";
import Emaillogo from "../_components/_Pages/Emaillogo";
const page = () => {
  return (
    <div className=" h-screen w-full">
      <div className=" relative h-screen w-full">
        <Image src={image1} alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-col absolute top-50 w-full h-full p-6 ">
        {" "}
        <h1 className="text-black pb-3 text-center text-6xl font-anton">
          contact us
        </h1>
        <h1 className="text-black text-center text-1xl font-bold">
          wed love to hear from you !weather you have any questions ,feedback,or
          would you like to enquire about our services please feel free to
          contact us our team feel free to contact us ,our team will be in touch
        </h1>
      </div>
      <div className=" mx-14 my-10 w-270 h-25 bg-gray-900 absolute top-80 opacity-30 flex gap-50 items-center text-white font-bold ">
        <div className="flex flex-col">
          <div className="flex mx-3">
            <Location className="size-7" />
            <h1>Adress</h1>
          </div>
          <div className="ml-5 mb-4">
            <p className="">
              1990,19th floor ,prism tower,business bay,kannur,kerala
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex mx-3">
            <Contactlogo className="size-7" />
            <h1>contact</h1>
          </div>
          <div className="ml-5 mb-4">
            <p className="">8714419174</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mx-3">
            <Emaillogo className="size-7" />
            <h1>Email</h1>
          </div>
          <div className="ml-5 mb-4">
            <p className="">8714419174</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
