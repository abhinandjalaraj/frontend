import React from "react";
import featured from "../../../../../public/feaured01/furniture 2.jpg"; // ✅ check folder spelling
import SingleProduct from "./_component/SingleProduct";

const products =
  {

    id:"1",
    name: "Ventillated seats",
    description: "seat comfort",
    price: 7899,
    image: featured,
    isAvailable: false,
  }


const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  min-md:p-10">
        <SingleProduct
          name={products.name}
          description={products.description}
          price={products.price}
          image={products.image}
          isAvailable={products.isAvailable}
          id={products.id}
        />
      </div>
   
  );
};

export default Page;
