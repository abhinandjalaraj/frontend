import React from 'react'
//this is shop page 
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
type props={
image:string|StaticImageData;
name:string;
}

const Shop = ({image,name}:props) => {
  return (
        <Link href={`shop/${name}`} className="relative h-[200px]  w-60 flex row-span-2 items-center justify-center rounded-2xl text-center overflow-hidden group   ">
            
            <Image  className="absolute object-cover rounded-3xl group-hover:scale-110 transition-transform duration-800 hover:brightness-50  "alt='' fill src={image}/>
           
            <h1  className='text-2xl  absolute   text-white'>{name}</h1>
        </Link>

      
         )
}

export default Shop