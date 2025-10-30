import { storageurl } from "@/utils/BaseUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type props = {
  image:string;
  id: string;
  ProductName: string;
  ProductDescription: string;
  price: number;
  
  
};

const Card = ({id, image, ProductName, ProductDescription, price }: props) => {
  
  return (
    <Link  href={`products/${id}`} className="bg-gray-100 shadow-xl/25 ">
      <div className="relative  h-[250px]">
        <Image className="object-cover" src={storageurl+image} fill alt="" />
      </div>
      <div className=" p-7">
        <h1 className=" font-sans  font-extrabold p-2  text-center">{ProductName}</h1>
        <p className="text-center">{ProductDescription}</p>
        <p className="">{price}$</p>
      </div>
    </Link>
  );
};

export default Card;
