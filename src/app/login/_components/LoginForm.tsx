"use client";  
import Cart from '@/app/_svg/Cart';
import Cartt from '@/app/_svg/Cartt';
// ✅ Marks this as a Client Component in Next.js (needed since we use hooks like useState, useForm here).

import CloseEye from '@/app/_svg/CloseEye';  
import Eye from '@/app/_svg/Eye';  
// ✅ Importing custom SVG icons for showing/hiding the password field.

import { zodResolver } from '@hookform/resolvers/zod';  
// ✅ Connects Zod validation schema with react-hook-form.

import Link from 'next/link';  
// ✅ Next.js Link component (used for navigation without reloading the page).

import React, { useState } from 'react';  
// ✅ Import React and the useState hook (used for password visibility toggle).

import { useForm } from 'react-hook-form';  
// ✅ Main hook from react-hook-form that manages form state, handles submission, and validation.)/////

import z from 'zod'; // form validation element  
// ✅ Zod library used to define validation rules for inputs.
////


// ====================== VALIDATION SCHEMA ======================
const loginSchema = z.object({
  username: z.string().min(1,"please enter a username "),
  // Rule: Username must not be empty (at least 1 character).
  
  password: z.string().min(8,"minimum 8 characters reqired ")
  // Rule: Password must be at least 8 characters long.
  // Schema is what defines the validation logic for this form.
});


// ====================== TYPE INFERENCE ======================
type TLoginSchema = z.infer<typeof loginSchema>; 
// ✅ Infers a TypeScript type automatically from the loginSchema.
// That means the form data will always follow the structure { username: string, password: string }.


// ====================== LOGIN FORM COMPONENT ======================
const LoginForm = () => {

  // ✅ useForm hook initializes the form with Zod schema for validation
  const {
    register,           // Registers inputs to track their values
    handleSubmit,       // Wraps submit handler and validates inputs
    formState:{errors,isSubmitting}  
    // errors → stores any validation errors for each input field
    // isSubmitting → true while form is submitting (disables button to prevent double-submit)
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema), 
    // ✅ Links Zod schema with react-hook-form validation.
  });

  // ✅ Local state to toggle password visibility
  const [showpass, setshowpass] = useState(false); 
  // Default = false → password field is hidden (masked).
  // Toggle true/false to switch between masked and visible.

  
  // ✅ Submit function called after successful validation
  const submit = (value: unknown) => {
    // "value" will contain form data as an object: { username: "...", password: "..." }
    console.log("data::",value); 
    // Just logging the submitted data to console for debugging...
  };


  // ====================== RETURN JSX ======================
  return (
    <div>
      <form 
        onSubmit={handleSubmit(submit)} // ✅ handleSubmit validates & passes values to submit()
        className="h-90 bg-gray-900 w-120 rounded-2xl flex flex-col justify-center items-center gap-4 "
      >

        {/* FORM TITLE */}
        <div>
          <h1 className="text-4xl text-white font-anton">
            LOGIN TO YOUR ACCOUNT
          </h1>
        </div>

        {/* SUBTITLE */}
        <div>
          <div>
            <h1 className="text-center mb-5 text-1xl text-white">
              PLEASE ENTER YOUR DETAILS
            </h1>
          </div>

          {/* USERNAME INPUT */}
          <input
            {...register("username")} // ✅ Register this input under the name "username"
            className="w-80 h-11 rounded-2xl bg-white p-5"
            type="text"
            placeholder="username"
          />
        </div>

        {/* USERNAME ERROR MESSAGE */}
        {errors.username && (
          <p className='text-red-700 m-0 p-0'>
            {errors.username.message}
          </p>
        )}

        {/* PASSWORD INPUT */}
        <div className="relative ">
          {/* Eye icon toggler → flips showpass state */}
          <div onClick={() => setshowpass(!showpass)}>
            {
              showpass == true
                ? <Eye className="size-6 absolute right-2 bottom-3" />
                : <CloseEye className="size-6 absolute right-2 bottom-3" />
            }
          </div>

          <input
            {...register("password")} 
            // ✅ Register this input under the name "password"
            // Value will be stored in the form data object.

            className="bg-white rounded-2xl w-80 h-11 text-black"
            type={showpass == true ? "text" : "password"} 
            // ✅ If showpass is true → input type "text" (plain password)
            // If false → input type "password" (masked password)

            placeholder="password"
          />
          
        </div>

        {/* PASSWORD ERROR MESSAGE */}
        {/* If validation fails, error message from schema shows here */}
        {errors.password && (
          <p className='text-red-700 text-center'>
            {errors.password.message}
          </p>
        )} 

        {/* SUBMIT BUTTON */}
        <div>
          <button  
            disabled={isSubmitting} // ✅ disables button while form is submitting
            type='submit' 
            className="bg-white rounded-2xl font-anton text-2xl w-80 h-11 text-black "
          >
            Login
          </button>
        </div>

        {/* LINK TO SIGNUP PAGE */}
        <div className='flex gap-2 text-white'>
          <h1>dont have an account </h1>
          <Link className='text-blue-800' href="/signup">
            signup!
          </Link>
        </div>
       
      </form>
    </div>
  )
}

export default LoginForm;  
// ✅ Exports LoginForm so it can be imported and used in other pages/components.
