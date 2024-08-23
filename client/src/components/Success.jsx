import React from 'react'
import success from '../assets/success.png'

function Success() {
  return (
    <div className='min-h-[400px] bg-[#F9F9F9] flex justify-center items-center flex-col gap-[30px]'>
        <div className='w-[50px] h-[50px] rounded-full bg-[#44961D]'>
            <img src={success} alt='success' />
        </div>
          <div>
            <h1 className='text-[#222529] font_poppins font-semibold text-[26px] leading-[52.33px] '>Your order has been placed successfully.</h1>
          </div>
          <div>
            <p className='text-[#777777] font_poppins text-[13px] leading-[13px] font-normal'>Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia egestas placera</p>
          </div>
    </div>
  )
}

export default Success