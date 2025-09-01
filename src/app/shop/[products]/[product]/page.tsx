import React from "react";
import Image from "next/image";
import featured1 from "../../../../../public/feaured01/furniture 1.jpg";

const products = [
  {
    name: "Ventillated seats",
    description: "seat comfort",
    price: 42,
    image: featured1,
    isAvailable: false,
  },
  
  
];

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">

       
             <div className=" grid  w-250 shadow-2xl h-100 grid-cols-2 max-md:grid-cols-1   items-center max-sm:p-3 bg-white rounded-2xl  p-7"
          >
            {/* Product Image */}
            <div className="relative h-70  w-80">
              <Image
                alt="product"
                src={products[0].image}
                className="object-cover rounded-2xl overflow-hidden"
                fill
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-3xl font-bold">{products[0].name}</h2>
              <p className="text-gray-700">Address</p>
              <h4 className="font-extrabold">
                Price: <span className="text-gray-700">${products[0].price}</span> |
                Availability:{" "}
                <span className="text-gray-700">
                  {products[0].isAvailable ? "Yes" : "No"}
                </span>
              </h4>
              <h4 className="font-extrabold">Description</h4>
              <p className="text-gray-700">{products[0].description}</p>
              <button className="bg-black text-white p-2 rounded-2xl hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
            </div>
          </div>
       
     
   
  );
};

export default Page;
