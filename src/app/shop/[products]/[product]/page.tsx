import { frontendApi } from "@/Api/FrontendApi";
import SingleProduct from "./_component/SingleProduct";

type PageProps = {
  params: Promise<{
    product: string;
  }>;
};

const Page = async ({ params }: PageProps) => {
  const { product } = await params;

  const response = await frontendApi.getOneProductById(product);
  const resp2 = response.data.data.product;

  return (
    <div>
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