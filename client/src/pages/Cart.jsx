import React from 'react'
import Checkout from '../components/cart/Checkout'

function Cart() {
  return (
    <div className='min-h-[400px] overflow-hidden'>
         
         {/* bannner section */}

         <div className='min-h-[160px] bg-[#F9F9F9] flex justify-center items-center'>
            <h1 className='font_poppins font-bold text-[#222529] text-[24px] leading-[50px]'>Cart</h1>
         </div>


         {/* Checkout section */}

         <Checkout/>


    </div>
  )
}

export default Cart