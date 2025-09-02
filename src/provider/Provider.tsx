"use client"
import React, { ReactNode } from 'react'
import { CartProvider } from 'react-use-cart'
type props ={
    children:ReactNode
}

const ProviderClient= ({children}: props) => {
  return (
   <CartProvider>

    {children}
   </CartProvider>
  )
}

export default ProviderClient