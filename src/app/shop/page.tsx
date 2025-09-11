import React from 'react'
// import image1 from"../../../public/suits/black suit.jpg"
import image2 from"../../../public/suits/men-shirt.jpg"
// import image3 from"../../../public/suits/acessories.jpg"
// import image4 from"../../../public/suits/gadjets.jpg"

import Shop from './Shop'

//this is component page of shop contain shop by catagory
const page = async() => {
 
const res = await fetch('https://dummyjson.com/products/category-list')
const response = await res.json()
console.log(response);





  return (
    <div className=' bg-white-900 p-10 '>
             <h1 className='text-center text-6xl  text-black font-anton'>CATEGORIES</h1>
             <h1 className='text-center text-1xl text-black font-anton'>SHOP BY CATEGORY</h1>
             <div className="grid grid-cols-4 max-xl:gap-20 max-md:p-10   max-lg:w-full  max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-15   p-5 gap-15  max-sm:grid-cols-1  max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center" >

         {response.map((item:string,index:React.Key)=>(
        <Shop
        key={index}
        image={image2}
        name={item}
        
        />
  
      ))}</div> 
      </div>
   
  )
}

export default page