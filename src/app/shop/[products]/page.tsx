import Card from "@/app/_components/Card";
import React from "react";

import { StaticImageData } from "next/image";

const page = async({params}:{params:{products:string }}) => {
console.log(params)
  
const res = await fetch(`https://dummyjson.com/products/category/${params.products}`)
const response = await res.json()
console.log("reepee",{response});
const allProducts=response.products;




  return (

    <div >
        <h1 className="text-7xl text-center font-serif  mt-7 "></h1>
        <p className="p-5  font-anton text-2xl">{allProducts.length} Products</p>
        <div className="grid grid-cols-4 p-5  gap-5 max-lg:grid-cols-3 max-md:grid-cols-2">
          
          {allProducts.map((item: { thumbnail: StaticImageData; id:string ;title: string; description: string; price: number; },index: React.Key | null | undefined) => (
           
           
           <Card
        id={item.id}
        key={index}
        image={item.thumbnail}
         ProductName={item.title}
         ProductDescription={item.description}
         price={item.price}
        
        
        />
      
          ))}
        </div>
    </div>
  );
  
};

export default page;
