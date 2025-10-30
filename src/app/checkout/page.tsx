"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useCart } from "react-use-cart";
import z from "zod";

const Page = () => {
  const { cartTotal, items } = useCart();

  const loginSchema = z.object({
    firstname: z.string().min(2, "Please enter first name"),
    lastname: z.string().min(1, "Enter last name"),
    phnumber: z.string().min(10, "Enter minimum 10 numbers"),
    email: z.string().email("Enter valid email"),
    adress: z.string().min(10, "Enter a valid address"),
    zipcode: z.string().min(6, "Enter minimum 6 digits"),
    country: z.refine((value) => value !== "country", "Please select a country"),
  });

  type TLoginSchema = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema) });

  const data = (value: unknown) => {
    toast.success("order placed")
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
        Checkout
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* --- Form Section --- */}
        <form
          onSubmit={handleSubmit(data)}
          className="col-span-2 flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-md"
        >
          {/* Firstname / Lastname */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <input
                {...register("firstname")}
                className="w-full border border-gray-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
                type="text"
                placeholder="First name"
              />
              {errors.firstname && (
                <p className="text-red-600 text-sm mt-1">{errors.firstname.message}</p>
              )}
            </div>

            <div className="flex-1">
              <input
                {...register("lastname")}
                className="w-full border border-gray-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
                type="text"
                placeholder="Last name"
              />
              {errors.lastname && (
                <p className="text-red-600 text-sm mt-1">{errors.lastname.message}</p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div>
            <input
              {...register("phnumber")}
              className="w-full border border-gray-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              type="text"
              placeholder="Phone number"
            />
            {errors.phnumber && (
              <p className="text-red-600 text-sm mt-1">{errors.phnumber.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email")}
              className="w-full border border-gray-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              type="email"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <input
              {...register("adress")}
              className="w-full border border-gray-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              type="text"
              placeholder="Address"
            />
            {errors.adress && (
              <p className="text-red-600 text-sm mt-1">{errors.adress.message}</p>
            )}
          </div>

          {/* Zip Code */}
          <div>
            <input
              {...register("zipcode")}
              className="w-full border border-gray-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              type="text"
              placeholder="Zip code"
            />
            {errors.zipcode && (
              <p className="text-red-600 text-sm mt-1">{errors.zipcode.message}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <select
              defaultValue="country"
              {...register("country")}
              className="w-full border border-gray-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="country">Choose country</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="japan">Japan</option>
            </select>
            {errors.country && (
              <p className="text-red-600 text-sm mt-1">{errors.country.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full h-14 rounded-2xl bg-gray-900 text-white text-lg font-medium hover:bg-gray-800 transition-all"
          >
            {isSubmitting ? "Processing..." : "Place Order"}
          </button>
        </form>

        {/* --- Summary Section --- */}
        <div className="col-span-1 flex flex-col gap-5 bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-2xl font-bold">Order Summary</h1>
          <hr />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span>Total</span>
              <span>${cartTotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
          </div>
          <hr />
          <div className="flex justify-between font-semibold text-lg">
            <span>Cart Total</span>
            <span>${cartTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
