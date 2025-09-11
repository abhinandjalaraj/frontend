import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type props = {
  image:StaticImageData;
  id: string;
  ProductName: string;
  ProductDescription: string;
  price: number;
  
  
};

const Card = ({id, image, ProductName, ProductDescription, price }: props) => {
  
  return (
    <Link  href={`shop/${id}`} className="bg-gray-100 shadow-xl/25 ">
      <div className="relative  h-[250px]">
        <Image className="object-cover" src={image} fill alt="" />
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
