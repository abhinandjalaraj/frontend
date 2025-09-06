"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const Page = () => {


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
     country: z
     .refine((value)=>value!=="country","please select a country")
     
      
    })

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
    <div className=" p-5 ">
       <h1 className="text-3xl  font-bold">checkout</h1>
      <div className=" grid grid-cols-3 gap-6">
       
        
          <form onSubmit={handleSubmit(data)} className="col-span-2  flex flex-col gap-4">
            <div className="flex gap-2 ">
              <input
              {...register("firstname")}
              
                className=" shadow-xs/50 w-full rounded-2xl h-12 p-2"
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
                className="shadow-xs/50  w-full rounded-2xl p-3 h-12"
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
                className=" shadow-xs/50 w-full rounded-2xl p-3"
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
                className="shadow-xs/50 w-full rounded-2xl p-3"
               
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
                className=" shadow-xs/50 w-full rounded-2xl p-3"
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
                className="shadow-xs/50 w-full rounded-2xl p-3"
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
              defaultValue="country"

               {...register("country")}
               
                className=" shadow-xs/50 w-full rounded-2xl p-3 "
               
              >
                <option  value="country" >choose country</option>
                <option value="india">india</option>
                <option value="usa">usa</option>
                <option value="canada">canada</option>
                <option value="japan">japan</option>
              </select>

              {errors.country && (
          <p className='text-red-700 m-0 p-0'>
            {errors.country.message}
                </p>

          ) }

            </div>
            <button disabled= {isSubmitting} type="submit" className="h-14 shadow-black  rounded-2xl p-3  w-190 bg-gray-950 text-white ">place order</button>
          </form>
           <div className="  col-span-1  flex flex-col gap-5  shadow-2xl   p-5  ">

          <h1 className='text-3xl font-bold '>order summary</h1>
          <hr></hr>
         <div className="flex flex-col   ">
            <div className="flex justify-between "><h1>item total</h1> <h1>$00.00</h1></div>
            <div className="flex  justify-between"><h1>shippping</h1><h1>$00.00</h1></div>
         </div>
         <hr></hr>
         <div className="flex justify-between"><h1>total</h1><h1>$00.00</h1></div>
      </div>

        </div>
  
        </div>

                    
      


    
  )
}

export default Page;
