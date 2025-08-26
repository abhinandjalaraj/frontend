"use client";

import React, { useState } from "react";
import Eye from "../_svg/Eye";
import CloseEye from "../_svg/CloseEye";
import Link from "next/link";

const Page = () => {
  const [showpass, setshowpass] = useState(false);
   const [showpass2, setshowpass2] = useState(false);
  return (
    <div className="bg-black h-135 flex items-center justify-center items center capitalize max-md:p-15 p-10">
      <form className="  h-110 bg-gray-900 opacity-90 w-130 rounded-2xl flex flex-col justify-center items-center gap-4 ">
        <div>
          <h1 className="text-4xl text-white font-anton">SIGNUP NOW!!!</h1>
        </div>
        <div>
          <h1 className=" text-center mb-2 text-1xl text-white">
            PLEASE ENTER YOUR DETAILS
          </h1>
        </div>
        <div>
          <input
            className="  w-80 h-11 rounded-2xl bg-white p-3"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="relative ">
          

          <input
            className="bg-white rounded-2xl w-80 h-11 p-3  text-black"
            
            placeholder="email"
          />
        </div>
        <div className="relative ">
          <div onClick={() => setshowpass(!showpass)}>
            {showpass == true ? (
              <Eye className="size-6 absolute right-2 bottom-3" />
            ) : (
              <CloseEye className="size-6 absolute right-2 bottom-3" />
            )}
          </div>

          <input
            className="bg-white rounded-2xl w-80 h-11  p-3  text-black"
            type={showpass == true ? "text" : "password"}
            placeholder=" password"
          />
        </div>

         <div className="relative ">
          <div onClick={() => setshowpass2(!showpass2)}>
            {showpass2 == true ? (
              <Eye className="size-6 absolute right-2 bottom-3" />
            ) : (
              <CloseEye className="size-6 absolute right-2 bottom-3" />
            )}
          </div>

          <input
            className="bg-white rounded-2xl w-80 h-11  p-3 text-black"
            type={showpass2 == true ? "text" : "password"}
            placeholder=" Confirm password"
          />
        </div>

        

        <div>
          <button className="bg-white rounded-2xl font-anton text-2xl  w-80 h-11 text-black ">
          SIGNUP
          </button>
        </div>
        <div className="flex">
          <h1 className="text-white" >dont have an account?</h1>{" "}
           <Link  className="text-blue-800 underline"   href="/login">login</Link>
        </div>
      </form>
    </div>
  );
};

export default Page;
