import React from "react";
import SingleProduct from "./_component/SingleProduct";

const Page = async ({ params }: { params: { product: string } }) => {
  const res = await fetch(`https://dummyjson.com/products/${params.product}`);
  const product = await res.json();

  console.log("product::", product);

  return (
    <div className="min-h-screen p-20">
      <SingleProduct
        id={String(product.id)}
        name={product.title}
        description={product.description}
        price={product.price}
        image={product.thumbnail || product.images?.[0]}
        isAvailable={product.stock > 0}
      />
    </div>
  );
};

export default Page;
