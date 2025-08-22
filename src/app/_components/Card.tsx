import Image, { StaticImageData } from 'next/image'
import React from 'react'

type props={
    image:string|StaticImageData;
    ProductName:string;
    ProductDescription:string;
    price:number;
}


const Card = ({image,ProductName,ProductDescription,price}:props) => {
  return (

    <div className="bg-white rounded-2xl">

          <div className="relative rounded-3xl h-[250px]">
            <Image className="object-cover rounded-t-2xl" 
            src={image} fill alt="" />
          </div>
          <div className="p-4">
            <h1 className="text-">{ProductName}</h1>
            <p className="">{ProductDescription}</p>
            <p className="">{price}$</p>
          </div>
        </div>
  )
}

export default Card