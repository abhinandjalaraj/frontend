import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type props = {
  image: string | StaticImageData;
  ProductName: string;
  ProductDescription: string | "";
  price: number|"";
  
};

const Card = ({ image, ProductName, ProductDescription, price }: props) => {
  return (
    <Link href={`shop/${ProductName}`} className="bg-white rounded-2xl ">
      <div className="relative rounded-3xl h-[250px]">
        <Image className="object-cover rounded-t-2xl" src={image} fill alt="" />
      </div>
      <div className=" font-extrabold p-4">
        <h1 className="">{ProductName}</h1>
        <p className="">{ProductDescription}</p>
        {/* <p className="">{price}$</p> */}
      </div>
    </Link>
  );
};

export default Card;
