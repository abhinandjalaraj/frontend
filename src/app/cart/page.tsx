"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import image from "../../../public/feaured01/furniture 2.jpg"
import Delete from '../_svg/Delete'
import Link from 'next/link';







const page = () => {

 const arr=[
        {
            product: "Ventillated seats",
            image: "seat comfort",
            price: 400,
            quantity:2 ,
            subtotal: 1,
          }
          
    ]
    



  return (

   
  <div className='  grid grid-cols-4 '>
    <div className='col-span-3 flex flex-col gap-2 p-3 shadow-2xl  bg-white  '>
          <div className='flex justify-between '><h1 className='text-4xl shadow-2xl font-bold'>shopping cart</h1><h1>{arr.length}items</h1></div>
<hr></hr>
       
          <table className=' col-span-3 border-separate border-spacing-y-2'>
    
         <thead>
          <tr className='text-left  '>
              
                   <th>   </th>
                    <th >product</th>
                    <th>price</th>
                        <th>quantity</th>
                            <th>subtotal</th>
                            <th></th>
              
                            
                                
            
          </tr>
          </thead>
          <tbody>
           
               <tr>
              <td>
             <div className='relative  size-20'> <Image fill className='absolute object-cover' src={image} alt='' /></div>
              </td>
      
               <td>
          wardrobe
         </td>
      
          <td>
          129.09
         </td>
       <td>
            <div className='flex gap-3   items-center'>
                 <button   className='text-2xl font-bold'>-</button>
                  
                <div className='size-6 border-1  text-center'> <h1>1</h1> </div>
                
                 <button  className=' font-bold text-2xl'>+</button>
            </div>
       </td>
          <td>
          928.22
         </td>
         
         <td>
          <Delete className='size-7'/>
         </td>
     

            </tr>
           
           
          </tbody>
          </table>
    </div>

        <div className="col-span-1 h-120 ">
 <div className=' h-120 col-span-1  flex flex-col gap-7 justify-center p-8 '>
          <h1 className='text-3xl'>Cart total</h1>
          <h1>item total</h1>
          <hr></hr>
          <h1>total</h1>
     <Link href="/checkout">    <button className='bg-gray-950 p-3 w-60 rounded-2xl text-white'>proceed to checkout </button></Link> 
      </div>

        </div>

        
          </div>
 
   
  )
}

export default page