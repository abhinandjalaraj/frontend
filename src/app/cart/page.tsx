"use client";
import Image from 'next/image'
import Delete from '../_svg/Delete'
import Link from 'next/link';
import { useCart } from 'react-use-cart';
import { useEffect, useState } from 'react';
import image1 from "../../../public/Images/confusing-woman-due-to-empty-cart-4558760-3780056.webp"

const Page = () => {
  
  
  const {items,removeItem,isEmpty,cartTotal,updateItemQuantity}=useCart()
  



const [isClient,setIsClient] =useState(false);

useEffect(()=>{
  setIsClient(true);
},[]);

if(!isClient){
  return null;
}


     if(isEmpty) return<div className='relative w-full h-full' > <div className=''><Image  fill className=' absolute object-cover' src={image1} alt=''/></div></div>;


  return (

   
  <div className='min-h-screen p-3'>
    <div className='  grid grid-cols-4 gap-2'>
      <div className='col-span-3 flex flex-col gap-2 p-3 shadow-xl/30 h-screen  bg-white  '>
            <div className='flex justify-between '><h1 className='text-4xl shadow-2xl font-bold'>shopping cart</h1><h1>{items.length}items</h1></div>
  <hr></hr>
           
          

            <table className='   border-separate border-spacing-y-2'>
      
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

          
         {items.map((item,index)=>(
          
          <tbody key={index} className='border-separate' >
             
                 <tr >
                <td>
               <div className='relative  size-20'> <Image fill className='absolute object-cover' src={item.image} alt='' /></div>
                </td>
        
                 <td>
           { item.name}
           </td>
        
            <td>
                       {item.price}

           </td>
         <td>
              <div className='flex gap-3   items-center'>
                   <button  onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}  className='text-2xl font-bold'>-</button>
                    
                  <div className='size-6 border-1  text-center'> <h1>{item.quantity}</h1> </div>
                  
                   <button  onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)} className=' font-bold text-2xl'>+</button>
              </div>
         </td>
            <td>
                       {item.itemTotal}

           </td>
           
           <td>
            <Delete onClick={()=>removeItem(item.id)} className='size-7'/>
           </td>
       
  
              </tr>
             
             
            </tbody>
            
        
      ))}
            
            </table>
      </div>
  
          <div className="col-span-1 h-80 shadow-xl/20 mt-5">
   <div className=' h-80   flex flex-col gap-5 justify-center p-3 '>
            <h1 className='text-3xl'>Cart Total</h1>
            <h1 className='font-bold '>subtotal:<span className='p-1 font-medium'> {cartTotal}</span></h1>
            <hr></hr>
            <h1 className='font-bold'>total:<span className='p-1 font-medium'> {cartTotal}</span></h1>
       <Link href="/checkout">    <button className='bg-gray-950 p-3 w-60 rounded-2xl text-white'>proceed to checkout </button></Link> 
        </div>
  
          </div>
  
          
            </div>
   
  </div>
   
  )
}

export default Page