import Card from "@/app/_components/Card";
import React from "react";
import feature1 from "../../../../public/suits/black suit.jpg";
import feature2 from "../../../../public/suits/blue.jpg";
import feature3 from "../../../../public/suits/brown.jpg";
import feature4 from "../../../../public/suits/grey2.jpg";

const page = () => {
  const suits = [
    {
      name: "black",
      price: 9420,
      image: feature1,
    },
    {
      name: "blue",
      price: 9442,
      image: feature2,
    },
    {
      name: "black",
      price: 9420,
      image: feature1,
    }
    ,
  
    
    {
      name:"blue",
      image:feature2,
      price:4655
    },
    {
       name: "grey",
     
      price: 4200,
      image: feature4,
    },
    {
      name: "black",
      price: 9420,
      image: feature1,
    },
    {
      name: "brown",
      price: 4552,
      image: feature3,
    },
    {
       name: "grey",
     
      price: 4200,
      image: feature4,
    }
  
  ];

  return (

    <div >
        <h1 className="text-7xl text-center font-serif  mt-7 ">suits</h1>
        <p className="p-5  font-anton text-2xl">{suits.length} Products</p>
        <div className="grid grid-cols-4 p-5  gap-5">
          {suits.map((item, index) => (
            <Card
        key={index}
        image={item.image}
         ProductName={item.name}
         ProductDescription={""}
         price={item.price}

        
        />
          ))}
        </div>
    </div>
  );
};

export default page;
