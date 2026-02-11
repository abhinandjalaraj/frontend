"use client";
// ✅ Required in Next.js 13+ to mark this as a Client Component (since we use useState and form hooks here).

import CloseEye from "@/app/_svg/CloseEye";
import Eye from "@/app/_svg/Eye";
// ✅ Importing custom SVG components (icons) to toggle show/hide password.

import { zodResolver } from "@hookform/resolvers/zod";
// ✅ Allows react-hook-form to use Zod validation schema.

import Link from "next/link";
// ✅ Next.js Link component for client-side navigation (prevents full page reload).

import React, { useState } from "react";
// ✅ Import React and useState hook (needed for managing show/hide password states).

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// ✅ useForm hook manages the form state, validation, and handles submissions.

import z from "zod";
// ✅ Importing Zod to define schema-based validation rules.

// ====================== VALIDATION SCHEMA ======================
const loginSchema = z
  .object({
    username: z.string().min(1, "please enter a username "),
    // Rule: must enter at least 1 character for username.

    email: z.email().min(1, "please enter a  valid email "),
    // Rule: must enter something for email (not empty).
    // (Currently not validating email format, just min length check.)

    password: z.string().min(8, "minimum 8 characters reqired "),
    // Rule: password must be at least 8 characters.

    confirmpassword: z.string().min(8, "minimum 8 characters required"),
    // Rule: confirm password must also be at least 8 characters (but not checking equality here).
  })
  .superRefine(({ password, confirmpassword }, ctx) => {
    if (password !== confirmpassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmpassword"], // 👈 attaches error to confirmPassword field
        message: "Passwords do not match",
      });
    }
  });

// ✅ Generates a TypeScript type based on loginSchema
type TLoginSchema = z.infer<typeof loginSchema>;

// ====================== SIGNUP COMPONENT ======================
const SignupForm = () => {
  // ✅ Initialize form using react-hook-form
  const {
    register, // Used to connect inputs with form state
    handleSubmit, // Handles form submission and runs validation
    formState: { errors }, // Stores any validation errors for inputs
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    // ✅ Ties Zod schema validation to react-hook-form
  });

  // ✅ Local state variables to toggle password visibility
  const [showpass, setshowpass] = useState(false); // For main password field
  const [showpass2, setshowpass2] = useState(false); // For confirm password field

  // ✅ Function triggered when form is successfully submitted

  const [pending, setPending] = useState(false);
  const submit = async (value: any) => {

   

  };

  return (
    <div className=" p-10">
      {/* Outer wrapper for padding and layout */}

      <form
        onSubmit={handleSubmit(submit)}
        className="p-10 bg-gray-900 opacity-90 rounded-2xl flex flex-col justify-center items-center gap-4 "
      >
        {/* Form wrapper with styling and validation on submit */}

        {/* TITLE */}
        <div>
          <h1 className="text-4xl text-white font-anton">SIGNUP wNOW!!!</h1>
        </div>

        {/* SUBTITLE */}
        <div>
          <h1 className="text-center mb-2 text-1xl text-white">
            PLEASE ENTER YOUR DETAILS
          </h1>
        </div>

        {/* USERNAME INPUT */}
        <div>
          <input
            {...register("username")} // ✅ Registers this input to form state
            className="w-80 h-11 rounded-2xl bg-white p-3"
            type="text"
            placeholder="Name"
          />
          {/* Error message if username is invalid */}
          {errors.username && (
            <p className="pb-4 text-red-700 m-0 p-0 text-center">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* EMAIL INPUT */}
        <div className="relative">
          <input
            className="bg-white rounded-2xl w-80 h-11 p-3 text-black"
            {...register("email")} // ✅ Registers email input
            placeholder="email"
          />
          {/* Error message for email */}
          {errors.email && (
            <p className="pb- text-red-700 m-0 p-0 text-center">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* PASSWORD INPUT */}
        <div className="relative">
          {/* Toggle show/hide password on click */}
          <div onClick={() => setshowpass(!showpass)}>
            {showpass == true ? (
              <Eye className="size-6 absolute right-2 bottom-3" />
            ) : (
              <CloseEye className="size-6 absolute right-2 bottom-3" />
            )}
          </div>

          <input
            className="bg-white rounded-2xl w-80 h-11 p-3 text-black"
            type={showpass == true ? "text" : "password"}
            // ✅ Shows password as plain text or masked depending on showpass state
            placeholder=" password"
            {...register("password")} // ✅ Registers password input
          />
        </div>
        {/* Error for password */}
        {errors.password && (
          <p className="pb-4 text-red-700 m-0 p-0">{errors.password.message}</p>
        )}

        {/* CONFIRM PASSWORD INPUT */}
        <div className="relative">
          {/* Toggle show/hide confirm password */}
          <div onClick={() => setshowpass2(!showpass2)}>
            {showpass2 == true ? (
              <Eye className="size-6 absolute right-2 bottom-3" />
            ) : (
              <CloseEye className="size-6 absolute right-2 bottom-3" />
            )}
          </div>

          <input
            className="bg-white rounded-2xl w-80 h-11 p-3 text-black"
            type={showpass2 == true ? "text" : "password"}
            // ✅ Shows confirm password as text or masked
            placeholder=" Confirm password"
            {...register("confirmpassword")} // ✅ Registers confirm password input
          />
        </div>
        {/* Error for confirm password */}
        {errors.username && (
          <p className="text-red-700 m-0 p-0">
            {errors.confirmpassword?.message}
          </p>
        )}

        {/* SUBMIT BUTTON */}
        <div>
          <button
            type="submit"
            className="bg-white rounded-2xl font-anton text-2xl w-80 h-11 text-black "
          >
            SIGNUP
          </button>
        </div>

        {/* LOGIN LINK */}
        <div className="flex">
          <h1 className="text-white">Already have an account?</h1>
          <Link className="text-blue-800 underline" href="/login">
            login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
// ✅ Exports the SignupForm component so it can be imported and used in your Next.js pages/components
