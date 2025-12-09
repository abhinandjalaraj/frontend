import { storageurl } from "@/utils/BaseUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type props = {
  image:string;
  id: string;
  ProductName: string;
  ProductDescription: string;
  price: string;
  
  
};

const Card = ({id, image, ProductName, ProductDescription, price }: props) => {
  
  return (
    <Link  href={`products/${id}`} className="bg-gray-100 p-2 rounded-[25px]  ">
      <div className="relative rounded-[25px]   h-[280px]">
        <Image className="object-cover rounded-[25px] " src={storageurl+image} fill alt="" />
      </div>
      <div className="  ">
        <h1 className=" font-sans  font-extrabold p-2  ">{ProductName}</h1>
        {/* <p className="text-center">{ProductDescription}</p> */}
        <p className="bg-gray-400 text-center text-white p-2 rounded-[28px]">{price}$</p>
      </div>
    </Link>
  );
};

export default Card;
