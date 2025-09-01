import React from "react";
import pic1 from "../../../../public/suits/laptops-featured.jpg";
import pic2 from "../../../../public/suits/mobile phones-featured.jpg";
import pic3 from "../../../../public/suits/men-shirt.jpg"
import pic4 from "../../../../public/suits/women-catagory.jpg";
import pic5 from "../../../../public/suits/kids-catagory.jpg";
import pic6 from "../../../../public/suits/gadjets.jpg";
import pic7 from "../../../../public/feaured01/furniture3.jpg";
import pic8 from "../../../../public/feaured01/furniture 1.jpg";




import Card from "../Card";

const Featured = () => {


    
  const featured = [
    {
      image:pic1,
      ProductName: "Laptops",
      ProductDescription:"laptops  for upto 30% off",
      
    },
    {
      image:pic2,
      ProductName: "mobile phones",
      ProductDescription:"mobile phones for upto 25%off ",
      
    },
    {
      image:pic3,
      ProductName: "mens clothing",
      ProductDescription:"upto 80% off on mens clothing",
      
    },
    {
      image:pic4,
      ProductName: "women clothing",
      ProductDescription:"upto 30% off on womens clothing",
      
    },
    {
      image:pic5,
      ProductName: "kids shopping",
      ProductDescription:"kids clothing 10%off",
      
    },

    {
      image:pic6,
      ProductName: " electronics",
      ProductDescription:"30% off on electronics",
     
    },
    {
      image:pic7,
      ProductName: "home furniture",
      ProductDescription:"wooden furnitures  for 70% off",
    },
    {
      image:pic8,
      ProductName: "home decor",
      ProductDescription:"bedroom decorations for 30% off",
    },

    
    

    
  ];
  return (

    <div className="bg-gray-900 max-md:pt-5 min-md:p-8  ">
        
      <h1 className="text-center text-5xl font-bold min-md:pt-4 min-md:pb-7 text-white max-md:pb-5">featured products</h1>
        <div className="grid grid-cols-4 gap-3  max-md:pb-10  max-md:gap-10  max-md:p-7 max-md:grid-cols-1  min-sm:grid-cols-2 min-lg:grid-cols-4 ">
      {featured.map((item,index)=>(
       
          <Card
          key={index}
          image={item.image}
           ProductName={item. ProductName}
           ProductDescription={item.ProductDescription}
           price={""}
  
          
          />
       
      
      ))}


    
        
        
       
        
      </div>
    </div>
  );
};

export default Featured;
