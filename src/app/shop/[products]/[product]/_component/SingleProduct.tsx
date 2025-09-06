import React from "react";
import Image from "next/image";

// ✅ Define props type
type Props = {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  image: string;
};

// ✅ Use props properly
const SingleProduct = ({ name, description, price, isAvailable, image }: Props) => {
  return (
    <div className="grid p-10 w-270 shadow-xl/25 h-110 grid-cols-3 justify-center items-center  max-md:grid-cols-1  max-sm:p-3 bg-white">
      {/* Product Image */}
      <div className="relative h-70 w-70 col-span-1 shadow-xl/40  rounded-2xl ">
        <Image
          alt="product"
          src={image}
          className="object-cover rounded-2xl "
          fill
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col col-span-2 p-5 gap-3 ">
        <h2 className="text-3xl font-bold">{name}</h2>

        <p className="text-gray-700">Address</p>
        <h4 className="font-extrabold">
          Price: <span className="text-gray-700">${price}</span> | Availability:{" "}
          <span className="text-gray-700">{isAvailable ? "Yes" : "No"}</span>
        </h4>

        <h4 className="font-extrabold">Description</h4>
        <p className="text-gray-700">{description}</p>

        <button className="bg-black text-white p-2 rounded-2xl hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
