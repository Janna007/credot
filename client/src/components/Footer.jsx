import React from 'react'
import logo from '../assets/logo1.png'
import facebook from '../assets/facebook 1.png'
import twitter from '../assets/twitter 1.png'
import linkedin from '../assets/linkedin 1.png'
import youtube from '../assets/youtube 1.png'
import call from '../assets/callicon.png'

function Footer() {
  return (
    <div className='min-h-[350px] overflow-hidden'>
      <div className='pt-[34px] lg:block hidden'>
        <img src={logo} alt='logo'  className='w-[134px] h-[48px] ml-[180px] '/>
      </div>

      <div className='flex lg:flex-row flex-col-reverse mt-[50px] xl:gap-[100px] lg:gap-[60px]  gap-[80px]  lg:pl-0 md:pl-[250px]  sm:pl-[100px] pl-[60px] '>


         <div className='lg:ml-[180px] '>
           <p className='font_poppins text-sm font-semibold leading-3 ' style={{ letterSpacing: '0.75px' }}>CONNECTED WITH US</p>

           <div className='flex  mt-[20px] gap-[15px]'>
           <div  className='bg-[#E9E9E9] h-[40px] w-[40px] rounded-full flex justify-center items-center '>
              <img src={facebook} alt='fbicon'  className='w-[20px]' />
           </div>
           <div  className='bg-[#E9E9E9] h-[40px] w-[40px] rounded-full flex justify-center items-center '>
              <img src={twitter} alt='twittericon'  className='w-[20px]' />
           </div>
           <div  className='bg-[#E9E9E9] h-[40px] w-[40px] rounded-full flex justify-center items-center '>
              <img src={linkedin} alt='linkedinicon'  className='w-[20px]' />
           </div>
           <div  className='bg-[#E9E9E9] h-[40px] w-[40px] rounded-full flex justify-center items-center '>
              <img src={youtube} alt='yticon'  className='w-[20px]' />
           </div>
           </div>
         </div>


         <div className=''>
         <p className='font_poppins text-sm font-semibold leading-3 ' style={{ letterSpacing: '0.75px' }}>IMPORTANT LINKS</p>
         <div className='flex lg:flex-row flex-col-reverse gap-[15px] mt-[30px]'>
           <p className='font_poppins font-normal text-xs leading-[26px] text-[#777777]'>Terms & Conditions</p>
           <p  className='font_poppins font-normal text-xs leading-[26px] text-[#777777]'>Privacy Policy</p>
           <p  className='font_poppins font-normal text-xs leading-[26px] text-[#777777]'>Help & FAQs</p>
         </div>
         </div>


         <div className='flex '>
          
         <div className="w-[1px] h-[120px] opacity-40 bg-[#D9D9D9] mt-[-20px]">
                    {/* Vertical line */}
          </div>
          <div className='xl:ml-[100px] lg:ml-[40px] space-y-[10px] '>
                  <div  className='bg-[#1AA5C3] h-[40px] w-[40px] rounded-full flex justify-center items-center '>
                      <img src={call} alt='callicon'  className='w-[20px]' />
                  </div>
                  <p className='font_poppins font-normal text-[15px] leading-[20px] text-[#1B1B1B]' >Helpline</p>
                  <h1 className='font_poppins font-semibold xl:text-[26px] lg:text-[15px] leading-[20px] text-[#1B1B1B]'  style={{ letterSpacing: '0.35px' }} > 1800 456 84788</h1>
          </div>
         </div>




      </div>





     <div className='xl:w-[1100px] lg:w-[900px]  h-[1px] bg-[#DCDCDC] mt-[50px] mx-auto'>
      {/* horizontal line */}
     </div>

     <div className=' flex justify-center items-center mt-[20px] p-[20px]'>
      <p className='font_poppins font-normal leading-[13px] text-sm text-[#777777]' >Arab Deals  © 2023. All Rights Reserved</p>
     </div>
    </div>
  )
}

export default Footer