"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Cart from '@/app/_svg/Cart'
import User from '@/app/_svg/User'
import Hamburger from '@/app/_svg/Hamburger'
import Close from '@/app/_svg/Close'
import Icon from '@/app/_svg/Icon';
import { useCart } from 'react-use-cart';


const Header = () => {

  const[menu,setmenu]=useState(false)
  const {items}=useCart()

  
  return (
    <div  className='font-bold text-white bg-gray-900 p-5 flex justify-between   w-full content-center'>
      <Icon  className='size-9  hover:animate-bounce '/>
    <div className="flex items-center justify-center  bg-gray-100 rounded-2xl max-md:h-">
      <div className="flex items-center rounded-2xl w-full h-full ">
        <input 
          type="text" 
          placeholder="Search..." 
          className=" w-80 h-full rounded-2xl max-md:px-2 max-md:w-50 pl-3  max-md:rounded-2xl  text-gray-700 rounded-l-2xl   focus:ring-blue-500"
        />
      </div>
    </div>
  



<div className='flex gap-5 justify-between  content-center text-1x9 max-md:hidden'>
      <Link className='scale-120 ' href="/">Home</Link>
          <Link className='scale-120' href="/shop">shop</Link>
      <Link className='scale-120' href="/contact">contact</Link>
      <Link className='scale-120' href="/login">login</Link>
      
      <div className='flex gap-5 relative '>
       <Link href="/cart"> <Cart className="size-6 scale-120 "/> </Link> 
        <div className='size-6  absolute -top-4 -right-3 rounded-full text-center bg-white text-black '>{items.length}</div>
         </div>
        <div> <User className="size-6 scale-120"/></div>
     
</div>
    {menu===true &&(
    <div className=" z-30 bg-blue-300 fixed w-1/2 h-full top-0 right-0 flex flex-col justify-center items-center gap-14 opacity-100 rounded-2xl">
     <div className='flex gap-10  '>
        
      </div> 
      <Close onClick={()=>setmenu(false)}  className='size-7 absolute top-3 right-3'/>
<Link href="/">Home</Link>
      <Link href="/shop">shop</Link>

      <Link href="/contact">contact</Link>

      <Link href="/login">login</Link>

      <div className='flex  absolute top-0 left-3 border-2 rounded-4xl p-2 '>
        <User className="size-4"/>
        

        
      </div>
      <div className="text-white absolute  left-15 top-0">

        </div>  
      </div>
      
    )}
    
   <Cart className=" size-9 ml-50 top-2 max-md:block hidden  max-sm:ml-5  max-xs:ml-5  "/>
<Hamburger onClick={()=>setmenu(true)} className="size-7  mt-1 max-md:block hidden hover:scale-120 duration-1000"/>

 </div>

)
}

export default Header