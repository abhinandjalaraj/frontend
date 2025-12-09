import Card from "@/app/_components/Card";
import React from "react";

import { frontendApi } from "@/Api/FrontendApi";

const page = async ({ params }:{ params: { products: string } }) => {
  const id = params.products;

  const response = await frontendApi.getProductByCategoryId(id);
  const resp2 = response.data.data.getProductsByCategoryId;
  return (
    <div>
      <h1 className="text-7xl text-center font-serif  mt-7 "></h1>
      <p className="p-5  font-anton text-2xl">{resp2.length} Products</p>
      <div className="grid grid-cols-4 p-5  gap-5 max-lg:grid-cols-3 max-md:grid-cols-2">
        {resp2.map((items:T,index: React.Key) => (
          <Card
            id={items._id}
            key={index}
            image={items.image}
            ProductName={items.title}
            ProductDescription={items.description}
            price={items.price}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
