import React from "react";
import SingleProduct from "./_component/SingleProduct";
import { frontendApi } from "@/Api/FrontendApi";

const Page = async ({ params }: { params: { product: string } }) => {


const id = params.product;

  const response = await frontendApi.getOneProductById(id);
  const resp2 = response.data.data.product
  console.log(resp2)


  return (
    <div className=" ">
      <SingleProduct
        id={resp2[0]._id}
        name={resp2[0].text}
        description={resp2[0].description}
        price={resp2[0].price}
        image={resp2[0].image}
        
        
      />
    </div>
  );
};

export default Page;
