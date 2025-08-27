"use client";
import CloseEye from "@/app/_svg/CloseEye";
import Eye from "@/app/_svg/Eye";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";


const loginSchema = z.object({
  username: z.string().min(1, "please enter a username "),
  email: z.string().min(1, "please enter a  valid email "),
  password: z.string().min(8, "minimum 8 characters reqired "),
  confirmpassword: z.string().min(8, "password should match the above password "),
});

type TLoginSchema = z.infer<typeof loginSchema>;

const SignupForm = () => {
  const {
    register,
    handleSubmit,
     formState:{errors}    
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  

  const [showpass, setshowpass] = useState(false);
  const [showpass2, setshowpass2] = useState(false);

  
  const submit = (value: unknown) => {
    console.log("details", value);
  };
  return (
    <div className=" p-10">
    
        <form onSubmit={handleSubmit(submit)}   className="p-10   bg-gray-900 opacity-90  rounded-2xl flex flex-col justify-center items-center gap-4 ">
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
              {...register("username")}
              className="  w-80 h-11 rounded-2xl bg-white p-3"
              type="text"
              placeholder="Name"
            />
                    {errors.username && <p className="pb-4  text-red-700  m-0 p-0 text-center">{errors.username.message}</p>}
  
          </div>
  
          <div className="relative ">
            <input
              className="bg-white rounded-2xl w-80 h-11 p-3  text-black"
              {...register("email")}
              placeholder="email"
            />
                    {errors.email && <p  className="pb-  text-red-700 m-0 p-0 text-center">{errors.email.message}</p>}
  
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
              {...register("password")}
            />
          </div>
                                        {  errors.password &&(<p className= ' className="pb-4 text-red-700 m-0 p-0'>{errors.password.message}</p>)}

  
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
              type={showpass2 == true ? "text" : " password"}
              placeholder=" Confirm password"
              {...register("confirmpassword")}
            />
          </div>
                      {errors.username && <p className="  text-red-700   m-0 p-0">{errors.confirmpassword?.message}</p>}

          <div>
            <button
              type="submit"
              
              className="bg-white rounded-2xl font-anton text-2xl  w-80 h-11 text-black "
            >
              SIGNUP
            </button>
          </div>
          <div className="flex">
            <h1 className="text-white">dont have an account?</h1>
            <Link className="text-blue-800 underline" href="/login">
              login
            </Link>
          </div>
        </form>
     </div>
  );
};

export default SignupForm;
