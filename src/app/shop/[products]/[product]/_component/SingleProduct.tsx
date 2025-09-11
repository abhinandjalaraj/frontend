"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useCart } from "react-use-cart";

type Props = {
  id: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  image: string | StaticImageData;
};

const SingleProduct = ({ id, name, description, price, isAvailable, image }: Props) => {
  const value = { id, name, description, price, isAvailable, image };
  const { addItem } = useCart();

  return (
    <div className="grid p-20 shadow-xl/25 grid-cols-3 justify-center items-center max-md:grid-cols-1 min-sm:gap-5 max-lg:grid-cols-1 min-lg:gap-20 bg-white">
      <div className="relative h-72 w-72 col-span-1 shadow-xl/40 rounded-2xl">
        <Image alt="" src={image} className="object-cover rounded-2xl" fill />
      </div>
      <div className="flex flex-col col-span-2 p-5 gap-3">
        <h2 className="text-3xl font-bold">{name}</h2>
        <h4 className="font-extrabold">
          Price: <span className="text-gray-700">${price}</span> | Availability:{" "}
          <span className="text-gray-700">{isAvailable ? "Yes" : "No"}</span>
        </h4>
        <h4 className="font-extrabold">Description</h4>
        <p className="text-gray-700">{description}</p>
        <button
          onClick={() => addItem(value)}
          className="bg-black text-white p-2 rounded-2xl hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
