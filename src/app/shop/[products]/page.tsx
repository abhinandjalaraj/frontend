import Card from "@/app/_components/Card";
import React from "react";
import { frontendApi } from "@/Api/FrontendApi";

type Product = {
  _id: string;
  image: string;
  productName: string;
  ProductDescription: string;
  price: string;
};

type PageProps = {
  params: Promise<{
    products: string;
  }>;
};

const Page = async ({ params }: PageProps) => {
  const { products } = await params;

  const response = await frontendApi.getProductByCategoryId(products);
  const resp2: Product[] = response.data.data.getProductsByCategoryId;

  if (!resp2?.length) {
    return <div>No products found</div>;
  }

  return (
    <div>
      <h1 className="text-5xl font-bold text-center font-serif mt-7">
        Products
      </h1>
      <p className="p-2 font-sans text-xl font-bold">
        {resp2.length} Products
      </p>

      <div className="grid grid-cols-4 p-5 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2">
        {resp2.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            image={item.image}
            ProductName={item.productName}
            ProductDescription={item.ProductDescription}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;