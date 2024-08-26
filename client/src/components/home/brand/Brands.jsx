import React from 'react'

import { Navigation,  A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';





import brand1 from '../../../assets/brand1.png'
import brand2 from '../../../assets/brand2.png'
import brand3 from '../../../assets/brand3.png'
import brand4 from '../../../assets/brand4.png'
import brand5 from '../../../assets/brand5.png'
import brand6 from '../../../assets/brand6.png'
import brand7 from '../../../assets/brand7.png'


import './Brand.css'


function Brands() {
    const brands=[
        {
            imageUrl:brand1
        },
        {
            imageUrl:brand2
        },
        {
            imageUrl:brand3
        },
        {
            imageUrl:brand4
        },
        {
            imageUrl:brand5
        },
        {
            imageUrl:brand6
        },
        {
            imageUrl:brand7
        },
    ]
  return (
    <>

    {/* heading */}

    <div className=' px-[100px] pt-[20px] font_poppins font-semibold text-[32px] leading-[48.96px] mt-[30px]'>
      <h1>Top Brands</h1>
    </div>

    <div className=' h-[1px] bg-[#EEEEEE] mt-[10px]  mx-[100px]'>
      {/* horizontal line */}
     </div>
     


{/* brand slide */}

<div className='w-full px-[20px] mt-[50px]'>
  <Swiper
    modules={[Navigation, A11y]}
    spaceBetween={30}
    slidesPerView={5}
    navigation
    breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    {brands.map((brand, index) => (
      <SwiperSlide key={index}>
        <div className='flex justify-center items-center'>
          <img src={brand.imageUrl} alt='brandicon' className='' />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


     <div className=' h-[1px] bg-[#EEEEEE] mt-[120px]  mx-[100px] mb-[30px]'>
      {/* horizontal line */}
     </div>

    </>
    
  )
}

export default Brands