import React from 'react'

import Shop from './Shop'
import { frontendApi } from '@/Api/FrontendApi'
import { storageurl } from '@/utils/BaseUrl'



const getShop=async()=>{
  const response=await frontendApi.getShopPage()
  return response.data.data

}
const page = async() => {
  const responsed =  await getShop()
    const response=responsed.category


  return (
    <div className=' bg-white-900 p-10 '>
             <h1 className='text-center text-6xl pb-2 text-black font-anton'>SHOP BY CATEGORY</h1>
             <div className="grid grid-cols-4 max-xl:gap-10 max-md:p-10   max-lg:w-full  max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-15   p-5 gap-15  max-sm:grid-cols-1  max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center" >

         {response.map((item:any,index:React.Key)=>(
        <Shop
        id={item._id}
        key={index}
        image={storageurl+item.image}
        name={item.text}
        
        />
  
      ))}</div> 
      </div>
   
  )
}

export default page