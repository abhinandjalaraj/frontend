import Image from "next/image";
import React from "react";
import image1 from "../../../public/contact/vintage-pink-telephone-composition.jpg";
import Location from "../_svg/Location";
import Contactlogo from "../_svg/Contactlogo";
import Emaillogo from "../_svg/Emaillogo";
const page = () => {
  return (
    <div>
      <div  className="text-center h-180">
        <div className=" relative h-180">
          <Image src={image1} alt="" fill className="object-cover" />
        </div>
        <div className="flex flex-col absolute top-37  ">
         
          <h1 className="text-black pb-3 text-center text-6xl font-anton">
            contact us
          </h1>
          <h1 className="text-black text-center text-1xl font-bold">
            wed love to hear from you !weather you have any questions ,feedback,or
            would you like to enquire about our services please feel free to
            contact us our team feel free to contact us ,our team will be in touch
          </h1>
        </div>
        <div className=" flex justify-center items-center     max-md:"> 
          <div className=" bg-gray-900 absolute top-80 max-md:absolute  max-md:w-100 justify-between gap-10 p-7 opacity-30 flex  text-white font-bold  max-md:flex-col ">
            <div className="flex flex-col ">
              <div className="flex ">
                <Location className="size-7 " />
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
              <div className="ml-5 mb-4 ">
                <p className="">8714419174</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
