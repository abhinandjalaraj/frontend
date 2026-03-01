"use client";

import { OrderApi } from "@/Api/Config/OrderApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useCart } from "react-use-cart";
import { z } from "zod";

const loginSchema = z.object({
  firstname: z.string().min(2, "Please enter first name"),
  lastname: z.string().min(1, "Enter last name"),
  phnumber: z.string().min(10, "Enter minimum 10 numbers"),
  email: z.string().email("Enter valid email"),
  address: z.string().min(10, "Enter a valid address"),
  zipcode: z.string().min(6, "Enter minimum 6 digits"),
  country: z
  .string()
  .refine((value) => value !== "country", {
    message: "Please select a country",
  }),
});

type FormValues = z.infer<typeof loginSchema>;

const Page = () => {
  const { cartTotal, items } = useCart();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  });

  const submit = async (shippingDetails: FormValues) => {
    try {
      const userId = window.localStorage.getItem("userId");

      if (!userId) {
        toast.error("User not logged in");
        return;
      }

      const cartItems = items.map((item) => ({
        quantity: item.quantity ?? 1,
        productId: String(item.id),
      }));

      const response = await OrderApi.PlaceOrder({
        userId,
        shippingDetails,
        cartItems,
      });

      router.push(
        `/payment/?orderId=${response.data.data.orderID}`
      );
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
        Checkout
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <form
          onSubmit={handleSubmit(submit)}
          className="col-span-2 flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-md"
        >
          <input {...register("firstname")} placeholder="First name" />
          <p>{errors.firstname?.message}</p>

          <input {...register("lastname")} placeholder="Last name" />
          <p>{errors.lastname?.message}</p>

          <input {...register("phnumber")} placeholder="Phone number" />
          <p>{errors.phnumber?.message}</p>

          <input {...register("email")} placeholder="Email" />
          <p>{errors.email?.message}</p>

          <input {...register("address")} placeholder="Address" />
          <p>{errors.address?.message}</p>

          <input {...register("zipcode")} placeholder="Zip code" />
          <p>{errors.zipcode?.message}</p>

          <select defaultValue="country" {...register("country")}>
            <option value="country">Choose country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="japan">Japan</option>
          </select>
          <p>{errors.country?.message}</p>

          <button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Processing..." : "Place Order"}
          </button>
        </form>

        <div>
          <h2>Order Summary</h2>
          <p>Total: ${cartTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;