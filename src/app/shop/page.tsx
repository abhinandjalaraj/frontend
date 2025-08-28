import React from 'react'
import image1 from"../../../public/feaured01/furniture 2.jpg"
import image2 from"../../../public/feaured01/61gfdtFjT8L._AC_SY400_.jpg"
import image3 from"../../../public/feaured01/furniture3.jpg"
import image4 from"../../../public/feaured01/furniture 1.jpg"

import Shop from './Shop'


const page = () => {

    const categories=[
        {
            name:"suits",
            image:image1
        },
        {
           name:"shirts",
            image:image2
        },
{
           name:"acessories",
            image:image3
        },
        {
           name:"gadgets",
            image:image4
        },
         {
            name:"suits",
            image:image1
        },
         {
            name:"suits",
            image:image1
        },
         {
            name:"suits",
            image:image1
        },
         {
            name:"suits",
            image:image1
        },

    ]
  return (
    <div className=' bg-gray-400 p-10 '>
             <h1 className='text-center text-6xl  text-black font-anton'>CATEGORIES</h1>
             <h1 className='text-center text-1xl text-black font-anton'>SHOP BY CATEGORY</h1>
             <div className="grid grid-cols-4 max-xl:gap-20 max-md:p-10    max-lg:w-full  max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-15   p-5 gap-15  max-sm:grid-cols-1  max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center" >

         {categories.map((items,index)=>(
        <Shop
        key={index}
        image={items.image}
        name={items.name}
        
        />
  
      ))}</div> 
      </div>
   
  )
}

export default page