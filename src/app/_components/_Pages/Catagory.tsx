import React from "react";

import Image from "next/image";
import { storageurl } from "@/utils/BaseUrl";
import { THomeCategory } from "@/Api/type";
import Link from "next/link";



const Catagory = ({ category }: THomeCategory) => {

  return (
    <div className="capitalize pt-3  bg-gray-900">
      <h1 className="text-5xl font-bold text-white text-center p-3 ">
        Categories
      </h1>
      <div className="grid grid-rows-2 grid-cols-3 max-md:p-7 min-md:gap-4 max-md:gap-10 max-md:grid-cols-1 min-md:p-7  gap-2">
        <Link href={`/shop/691ec12e7c29a3c3d3c00feb`} className=" row-span-2 col-span-1  relative   h-[400px]">
          <Image
            className="object-cover"
            src={storageurl + category[0].image}
            fill
            alt=""
          />

          <h1 className="text-2xl font-black absolute bottom-0 left-0  bg-gray-400 ">
            {category[0]?.text}
          </h1>
        </Link>

        <Link href={`/shop/691ec18b7c29a3c3d3c01003`} className=" relative row-span-2  col-span-1 h-[400px]">
          <Image
            className="object-cover"
            src={storageurl + category[1]?.image}
            alt=""
            fill
          />
          <h1 className="text-2xl font-black r absolute bottom-0 left-0 p-1  bg-gray-400 ">
            {category[1]?.text}
          </h1>
        </Link>
        <Link href={`/shop/691ec1e27c29a3c3d3c01013`} className=" relative  row-span-1 col-span-1  h-auto max-md:h-[400px]">
          {" "}
          <Image
            className="object-cover"
            src={storageurl + category[2]?.image}
            alt=""
            fill
          />
          <h1 className="text-2xl font-black  absolute bottom-0 left-0  p-1  bg-gray-400 ">
            {category[2]?.text}
          </h1>
        </Link>
        <Link href={`/shop/691ec1f77c29a3c3d3c01017`} className="  relative row-span-1 col-span-1  h-auto max-md:h-[400px]">
          {" "}
          <Image
            className="object-cover"
            src={storageurl + category[3]?.image}
            alt=""
            fill
          />
          <h1 className="text-2xl font-black  absolute bottom-0 left-0   p-1 bg-gray-400 ">
            {category[3]?.text}
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Catagory;
