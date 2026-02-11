import React from 'react'
//this is shop page 
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
type props={
image:string|StaticImageData;
name:string;
id:string;
}

const Shop = ({image,id,name}:props) => {
  return (
        <Link href={`shop/${id}`} className="relative h-[250px]  w-65 flex row-span-2 items-center justify-center rounded-2xl text-center overflow-hidden group   ">
            
            <Image  className="absolute object-cover rounded-2xl group-hover:scale-110 transition-transform duration-800 hover:brightness-50  "alt='' fill src={image}/>
           
            <h1  className='text-2xl font-bold  absolute   text-white'>{name}</h1>
        </Link>

      
         )
}

export default Shop