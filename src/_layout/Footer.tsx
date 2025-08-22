import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
<div className='capitalize ' >
      <div className='flex justify-between p-5  bg-blue-500  text-white max-sm:flex-col gap-5 max-sm:justify-center max-sm:items-center  max-sm:p-0   max-sm:pt-3'>
       <div  className='font-bold text-2xl max-sm:p-0  max-sm:pt-3'><Link href="/">My shop</Link></div>
       <div className=' flex-col max-sm:text-center  max-sm:pt-3 '><p className='font-bold text-2xl '>links</p> <div>login|contact|shop</div></div>
       <div className='flex flex-col  max-sm:text-center  max-sm:pt-3'> <p className='font-bold text-2xl'>get in touch</p>
       <div className=" max-sm:text-center  max-sm:pt-3 max-sm:pb-3 ">payyanur(via) kannur District <div>W I F</div></div>
       </div>
      </div>
      <div className="  bg-teal-900 w-full flex items-center justify-center text-white max-sm:text-center  max-sm:pt-3">
        Created By Urbanhub Innovations
      </div>
      
      
</div>
  
  )
}

export default Footer