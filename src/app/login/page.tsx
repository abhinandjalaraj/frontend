"use client";

import Eye from "../_svg/Eye";
import CloseEye from "../_svg/CloseEye";
import { useState } from "react";
import { text } from "stream/consumers";
import Link from "next/link";
// import Eye from "../_svg/eye";

const Login = () => {
  const [showpass, setshowpass] = useState(false);

  return (
    <div className="bg-black h-120 flex items-center justify-center items center  ">
      <form className="  h-90 bg-gray-900 w-120 rounded-2xl flex flex-col justify-center items-center gap-4 ">
        <div>
          <h1 className="text-4xl text-white font-anton">
            LOGIN TO YOUR ACCOUNT
          </h1>
        </div>
        <div>
          <div>
            <h1 className=" text-center mb-5 text-1xl text-white">
              PLEASE ENTER YOUR DETAILS
            </h1>
          </div>

          <input
            className="  w-80 h-11 rounded-2xl bg-white"
            type="text"
            placeholder="usrename"
          />
        </div>
        <div className="relative ">
          <div onClick={()=>setshowpass(!showpass)}>
            
          

            {
              showpass==true?
           <Eye className="size-6 absolute right-2 bottom-3" />: <CloseEye className="size-6 absolute right-2 bottom-3"/>
            }
          </div>

          <input
            className="bg-white rounded-2xl w-80 h-11  text-black"
           type={showpass==true?"text":"password"}
            placeholder="password"
          />
        </div>
        <div>
          <button className="bg-white rounded-2xl font-anton text-2xl  w-80 h-11 text-black ">
            Login
          </button>
        </div>
        <div className="flex">
          <h1 className="text-white">dont have an account?</h1>{" "}
           <Link  className="text-blue-800 underline"   href="/signup">Sign up Now!!</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
