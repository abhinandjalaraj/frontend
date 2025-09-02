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
    <div className="flex gap-6">
      {/* Product Image */}
      <div className="relative h-70 w-80">
        <Image
          alt="product"
          src={image}
          className="object-cover rounded-2xl overflow-hidden"
          fill
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-center gap-4">
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
