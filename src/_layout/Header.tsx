"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Cart from '@/app/_components/Cart'
import User from '@/app/_components/User'
import Hamburger from '@/app/_components/Hamburger'
import Close from '@/app/_components/Close'
import Icon from '@/app/_components/Icon';


const Header = () => {

  const[menu,setmenu]=useState(false)
  return (
    
    <div  className='font-bold text-white bg-gray-900 p-5 flex justify-between  content-center'>
      <Icon  className='size-9 '/>
  
  
  
    <div className="flex items-center justify-center  bg-gray-100 rounded-2xl  ">
      <div className="flex items-center rounded-2xl bg-white ">
        <input 
          type="text" 
          placeholder="Search..." 
          className=" min-md:w-full  px-5 max-md:px-3 max-md:w-50% py-1 text-gray-700 rounded-l-2xl outline-none  border-0 focus:ring-blue-500"
        />
        <button 
          className="px-2 py-2   hover:bg-indigo-800 bg-blue-900 text-white font-semibold rounded-r-2xl  ">
          Search
        </button>
      </div>
    </div>
  



<div className='flex gap-5 justify-between  content-center text-1x9 max-md:hidden'>
      <Link href="/">Home</Link>
          <Link href="/">shop</Link>
      <Link href="/">contact</Link>
      <Link href="/">login</Link>
      
      <div className='flex gap-5'>
        <Cart className="size-7"/>
        <User className="size-7"/>
      </div>
</div>
    {menu===true &&(
    <div className=" bg-blue-300 fixed w-1/2 h-full top-0 right-0 flex flex-col justify-center items-center gap-10 opacity-100 rounded-2xl">
     <div className='flex gap-10  '>
        
      </div> 
      <Close onClick={()=>setmenu(false)}  className='size-7 absolute top-3 right-3'/>
<Link href="/">Home</Link>
      <Link href="/">shop</Link>

      <Link href="/">contact</Link>

      <Link href="/">login</Link>

      <div className='flex   absolute top-2 left-3 border-2 rounded-4xl p-2 '>
        <User className="size-5"/>
        

        
      </div>
      <div className="text-white absolute  left-15 top-3">
user
        </div>
      </div>
      
    )}
    
   <Cart className=" size-9 ml-50 top-3 max-md:block hidden  max-sm:ml-5  max-xs:ml-5  "/>
<Hamburger onClick={()=>setmenu(true)} className="size-7  mt-1 max-md:block hidden "/>

 </div>

)
}

export default Header