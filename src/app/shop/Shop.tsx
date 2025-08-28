import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';

type props={
image:string|StaticImageData;
name:string;


}

const Shop = ({image,name}:props) => {
  return (
        <div className="relative h-[200px]  w-60 flex row-span-2 items-center justify-center rounded-2xl text-center ">
            <Image  className="absolute object-cover rounded-3xl hover:scale-110  transition-transform  "alt='' fill src={image}/>
            <h1  className='text-2xl  absolute  text-white hover:scale-110 '>{name}</h1>
        </div>

      
         )
}

export default Shop