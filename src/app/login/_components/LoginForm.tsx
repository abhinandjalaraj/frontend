"use client";

import CloseEye from '@/app/_svg/CloseEye'
import Eye from '@/app/_svg/Eye'
import { zodResolver } from '@hookform/resolvers/zod';

import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import z from 'zod';//form validation element 

const loginSchema =z.object({
  username:z.string().min(1,"please enter a username "),
  password:z.string().min(8,"minimum 8 characters reqired ")//schema used to check various conditions in a form validation
})

type TLoginSchema=z.infer<typeof loginSchema>;//zod automatically checks the type of the data stored in as objeects

const LoginForm = () => {


  const {
    register,
    handleSubmit,
    formState:{errors,isSubmitting}  //this is for error message,is submiting uses to disable the submit button being clicked during submission  
  } =useForm<TLoginSchema>({
    resolver:zodResolver(loginSchema),
  });//zod value stored as labled names like username password etc,handle submit is prdefined zod function that passes values stored in as object as parameters



    const [showpass, setshowpass] = useState(false);

    
const submit=(value:unknown)=>{//after the object is passed as parameters from handlesubmit==>submit fn the value:UNKNOWN MEANS THE TYPE OF VALUE PASSED IS UNKNOWN 
  console.log("data::",value)//JUST CHECKING IF THE VALUE HAVE BEEN PASSED BY CONSOLING THE OUTPUT IN A CONSOLE
}
  return (//handle submit is predefined function and the objects will be passed as parameters from handeSubmit function to submit function as parameters
    <div> <form onSubmit={handleSubmit(submit)} className="  h-90 bg-gray-900 w-120 rounded-2xl flex flex-col justify-center items-center gap-4 ">
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
          {...register("username")}
            className="  w-80 h-11 rounded-2xl bg-white"
            type="text"
            placeholder="usrename"
          />
        </div>
                  {errors.username&&(<p className='text-red-700 m-0 p-0'>{errors.username.message}</p>)}

        <div className="relative ">
          <div onClick={()=>setshowpass(!showpass)}>
            
          

            {
              showpass==true?
           <Eye className="size-6 absolute right-2 bottom-3" />: <CloseEye className="size-6 absolute right-2 bottom-3"/>
            }
          </div>

          <input

          {...register("password")}//register will carry the value in password with name tagged "password":(THEN THE VALUE) as objects
            className="bg-white rounded-2xl w-80 h-11  text-black"
           type={showpass==true?"text":"password"}
            placeholder="password"
          />
         
        </div>
        {/* there is a condition that if ther is eerror message inside error.password ther will be a paragraph tag belloe that will show the specific error messsage for each input the error message is displayed as errors.password.message */}
         {errors.password&&(<p className='text-red-700 text-center'>{errors.password.message}</p>)} 
        <div>

          {/* when submitting if submiting currently working then submit button disabled */}
          <button  disabled={isSubmitting}    type='submit' className="bg-white rounded-2xl font-anton text-2xl  w-80 h-11 text-black ">
            Login
          </button>
        </div>
        <div className='flex gap-2  text-white' >
          <h1>dont have an account </h1>
          <Link className='text-blue-800'  href="/signup ">  signup! </Link>
        </div>
       
      </form></div>
  )
}

export default LoginForm