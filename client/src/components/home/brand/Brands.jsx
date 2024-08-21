import React from 'react'



import { Navigation,  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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

    <div className=' px-[100px] pt-[20px] font_poppins font-semibold text-[32px] leading-[48.96px]'>
      <h1>Top Brands</h1>
    </div>

    <div className=' h-[1px] bg-[#EEEEEE] mt-[5px]  mx-[100px]'>
      {/* horizontal line */}
     </div>
     


{/* brand slide */}

    <div className='flex   mt-[30px] custom-swiper-2 '>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={120}
          slidesPerView={5}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='px-[120px]'
        >
         
           {brands.map((brand, index) => (
        
        <SwiperSlide  >
         <div key={index}>
             <img src={brand.imageUrl}  alt='brandicon'/>
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