import React from "react";
import pic1 from "../../../../public/feaured01/61gfdtFjT8L._AC_SY400_.jpg";
import pic2 from "../../../../public/feaured01/furniture 1.jpg";
import pic3 from "../../../../public/feaured01/furniture 2.jpg";
import pic4 from "../../../../public/feaured01/furniture3.jpg";
import Card from "../Card";

const Featured = () => {


    
  const featured = [
    {
      image:pic3,
      ProductName: "Cupboard",
      ProductDescription:"wooden cupboards for 30% off",
      price:35000
    },
    {
      image:pic3,
      ProductName: "Cupboard",
      ProductDescription:"wooden cupboards for 30% off",
      price:35000
    },
    {
      image:pic3,
      ProductName: "Cupboard",
      ProductDescription:"wooden cupboards for 30% off",
      price:35000
    },
    {
      image:pic3,
      ProductName: "Cupboard",
      ProductDescription:"wooden cupboards for 30% off",
      price:35000
    },
    {
      image:pic3,
      ProductName: "Cupboard",
      ProductDescription:"wooden cupboards for 30% off",
      price:35000
    },

    {
      image:pic4,
      ProductName: " wooden storage ",
      ProductDescription:"wooden storage for 30% off",
      price:40000
    },
    {
      image:pic1,
      ProductName: "bedside table",
      ProductDescription:"wooden  for 70% off",
      price:17000
    },
    {
      image:pic2,
      ProductName: "bathroom mirroe",
      ProductDescription:"bathroom mirrors and storage for 30% off",
      price:999
    },

    
    

    
  ];
  return (

    <div className="bg-gray-900">
        
      <h1 className="text-center text-5xl font-bold text-white">featured products</h1>
        <div className="grid grid-cols-4 gap-3 max-md:grid-cols-1  min-sm:grid-cols-2 min-lg:grid-cols-4 ">
      {featured.map((item,index)=>(
        <Card
        key={index}
        image={item.image}
         ProductName={item. ProductName}
         ProductDescription={item.ProductDescription}
         price={item.price}

        
        />
      
      ))}


    
        
        
       
        
      </div>
    </div>
  );
};

export default Featured;
