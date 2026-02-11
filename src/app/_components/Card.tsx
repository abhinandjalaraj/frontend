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
    <Link 
      href={`products/${id}`} 
      className="group h-50 bg-white border h-100 border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5]  overflow-hidden bg-gray-50">
        <Image 
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
          src={storageurl + image} 
          fill 
          alt="" 
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="font-sans font-bold text-gray-800 text-lg line-clamp-1 group-hover:text-blue-600 transition-colors">
          {ProductName}
        </h3>
        
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-extrabold text-gray-900">${price}</span>
          <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
