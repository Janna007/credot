import React from 'react'


import { Navigation,  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import slide1 from '../../assets/slider1.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Header.css'


function Header() {
  return (
    <div className='min-h-[180px]  overflow-hidden custom-swiper-1 '>
       <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
       <div>
        <img src={slide1} alt='slide1' className='w-full' />
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
        <img src={slide1} alt='slide1' className='w-full' />
       </div>
      </SwiperSlide>
      <SwiperSlide> 
      <div>
        <img src={slide1} alt='slide1' className='w-full' />
       </div>
      </SwiperSlide>
     
    </Swiper>
    </div>
  )
}

export default Header