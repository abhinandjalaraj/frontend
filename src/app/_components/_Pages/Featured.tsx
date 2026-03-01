import Card from "../Card";
import { TFeaturedProducts } from "@/Api/type";

const Featured = ({ featured }: TFeaturedProducts) => {
  if (!featured || featured.length === 0) {
    return null; // or return <div>No featured products</div>
  }

  return (
    <div className="bg-gray-900 max-md:pt-5 min-md:p-8">
      <h1 className="text-center text-5xl font-bold min-md:pt-4 min-md:pb-7 text-white max-md:pb-5">
        featured products
      </h1>

      <div className="grid grid-cols-4 gap-3 max-md:pb-10 max-md:gap-10 max-md:p-7 max-md:grid-cols-1 min-sm:grid-cols-2 min-lg:grid-cols-4">
        {featured.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            image={item.image}
            ProductName={item.text}
            ProductDescription={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;