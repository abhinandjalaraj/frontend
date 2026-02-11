"use client";
import React from "react";
import { useCart } from "react-use-cart";
import { storageurl } from "@/utils/BaseUrl";
import Image from "next/image";
import toast from "react-hot-toast";

type Props = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string 
};

 export type Tvalue={
  
id:string,
name:string
description:string
price:number
image:string

}
const SingleProduct = ({ id, name, description, price, image }: Props) => {
  // console.log("name:::",name)
  const value = { id, name, description, price,  image } as Tvalue
  const { addItem } = useCart();
  const addToCart =(value:Tvalue)=>{
    addItem(value)
    toast.success("added to cart")//toast component should be called in layot page beforen using it 

  } 

  return (
    <div className="grid p-20 shadow-xl/25 grid-cols-3 justify-center items-center max-md:grid-cols-1 min-sm:gap-5 max-lg:grid-cols-1 min-lg:gap-20 bg-white">
      <div className="relative h-72 w-72 col-span-1 shadow-xl/40 rounded-2xl">
        <Image alt="" src={storageurl+image} className="object-cover rounded-2xl" fill />
      </div>
      <div className="flex flex-col col-span-2 p-5 gap-3">
        <h2 className="text-3xl font-bold font-sans">{name}</h2>
        <h4 className="font-extrabold">
           <span className="text-gray-700 text-2xl  font-mono">${price}</span><span className=" font-mono pl-3 text-[14px] text-green-400">in stock ✅</span>
        </h4>
        <p className="text-gray-700">{description}</p>
        <button
          onClick={() => addToCart(value)}
          className="bg-black w-50 text-white p-2 mt-2 rounded-4xl hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
