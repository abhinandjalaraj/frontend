import React from "react";
import Image from "next/image";
import featured from "../../../../../public/feaured01/furniture 2.jpg"; // ✅ check folder spelling
import SingleProduct from "./_component/SingleProduct";

const products = [
  {
    name: "Ventillated seats",
    description: "seat comfort",
    price: 42,
    image: featured,
    isAvailable: false,
  },
];

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid w-250 shadow-2xl h-100 grid-cols-2  gap-5 max-md:grid-cols-1 items-center max-sm:p-3 bg-white rounded-2xl p-7">
        <SingleProduct
          name={products[0].name}
          description={products[0].description}
          price={products[0].price}
          image={products[0].image}
          isAvailable={products[0].isAvailable}
        />
      </div>
    </div>
  );
};

export default Page;
