"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const page = () => {


    const loginSchema = z.object({
      firstname: z.string().min(6,"please enter firstname "),
      // Rule: Username must not be empty (at least 1 character).
      
     lastname: z.string().min(1,"enter last name "),
      // Rule: Password must be at least 8 characters long.
      // Schema is what defines the validation logic for this form.
      phnumber: z.string().min(10,"enter minimun 10  numbers "),
      email: z.string().min(4,"enter valid email"),
      adress: z.string().min(10,"enter a valid adress "),
      zipcode: z.string().min(6,"enter minimum 6 digits  "),
      country: z.string().min(1,"choose a country/region ")
    });

type TLoginSchema = z.infer<typeof loginSchema>;
    const {
        register,           // Registers inputs to track their values
        handleSubmit,       // Wraps submit handler and validates inputs
        formState:{errors,isSubmitting}  
        // errors → stores any validation errors for each input field
        // isSubmitting → true while form is submitting (disables button to prevent double-submit)
      } = useForm<TLoginSchema>({resolver:zodResolver(loginSchema)})

    
    const data=(value:unknown)=>{
        console.log(value)


    }
     
     
  return (
    <div className=" grid grid-cols-3 ">
      <div className=" col-span-2 p-5 bg-blue-100">
        <h1 className="text-3xl p-3  font-bold">checkout</h1>
        <div className="grid grid-cols-3 capitalize  ">
          <form onSubmit={handleSubmit(data)} className="col-span-2 w-190  flex flex-col gap-8">
            <div className="flex gap-3 w-190 ">
              <input
              {...register("firstname")}
              
                className="h-8 shadow-black  w-95 rounded-2xl p-3  bg-white"
                type="text"
                placeholder="first name"
              />{" "}

 {errors.firstname && (
          <p className='text-red-700 m-0 p-0'>
            {errors.firstname.message}
          </p>
            )}
              <input
               {...register("lastname")}
                className=" h-8 shadow-2xl  rounded-2xl p-3 w-95 bg-white"
                type="text"
                placeholder="last name"
              />
  {errors.lastname && (
          <p className='text-red-700 m-0 p-0'>
            {errors.lastname.message}
                </p>

          ) }

            </div>
           

         

        

            <div className="w-190">
              <input
               {...register("phnumber")}
                className="h-8 shadow-black rounded-2xl p-3  w-190 bg-white"
                type="text"
                placeholder="phone number "
              />
             
            {errors.phnumber && (
          <p className='text-red-700 m-0 p-0'>
            {errors.phnumber.message}
                </p>

          ) }
            </div>
            <div className="w-190">
              <input
              type="email"
               {...register("email")}
                className="h-8 shadow-black rounded-2xl p-3  w-190 bg-white"
               
                placeholder="email adress"
              />
              {errors.email && (
          <p className='text-red-700 m-0 p-0'>
            {errors.email.message}
                </p>

          ) }
              
            </div>
            <div className="w-190">
              <input
               {...register("adress")}
                className="h-8 shadow-black rounded-2xl p-3  w-190 bg-white"
                type="text"
                placeholder="adress"
              />
              {errors.adress && (
          <p className='text-red-700 m-0 p-0'>
            {errors.adress.message}
                </p>

          ) }
            </div>
            <div className="w-190">
              <input
               {...register("zipcode")}
                className="h-8 shadow-black rounded-2xl p-3 w-190 bg-white"
                type="text"
                placeholder="zip code"
              />
              {errors.zipcode && (
          <p className='text-red-700 m-0 p-0'>
            {errors.zipcode.message}
                </p>

          ) }
            </div>
            <div className="w-190">
              <select
               {...register("country")}
               
                className="h-8 shadow-black rounded-2xl   w-190 bg-white"
               
              >
                <option value="choose region">choose region</option>
                <option value="india">india</option>
                <option value="india">usa</option>
                <option value="india">canada</option>
                <option value="india">china</option>
              </select>
            </div>
            <button disabled= {isSubmitting} type="submit" className="h-14 shadow-black  rounded-2xl p-3  w-190 bg-gray-950 text-white ">place order</button>
          </form>
          
  
        </div>
      </div>
             <div className="col-span-1 h-full">
 <div className=' h-full  col-span-1  flex flex-col gap-7  shadow-2xl justify-center p-8  '>
          <h1 className='text-4xl'>Cart total</h1>
          <h1>item total</h1>
          <hr></hr>
          <div className="flex gap-3"><h1>total :</h1><h1>$399</h1></div>
          <button className='bg-gray-950 p-3 w-85  rounded-2xl  text-white'>proceed to checkout </button>
      </div>

        </div>
    </div>
    
  )
}

export default page;
