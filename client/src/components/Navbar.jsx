import React from 'react'
import logo from '../assets/logo1.png'
import usericon from '../assets/usericon.png'
import carticon from '../assets/carticon.png'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate()
  return (
    <>
    <div className='min-h-[90px]  pt-[34px] flex 3xl:gap-[1300px] 2xl:gap-[1100px] xl:gap-[750px] lg:gap-[400px] md:gap-[200px] sm:gap-[150px] xsm:gap-[120px]  gap-[70px]  overflow-hidden'>
  
        <img src={logo} alt='logo'  className='w-[134px] h-[48px] md:ml-[180px] sm:ml-[60px] ml-[20px] '/>


        <div className='flex gap-[20px]  '>

            <div className='bg-gray-400 sm:h-[40px] sm:w-[40px] w-[35px] h-[35px] rounded-full flex justify-center items-center p-2 ' >
            <img src={usericon} alt='usericon'  className='w-[20px]' onClick={()=>{navigate("/my-order")}}/>
            </div>
            <div className="w-[1px] h-[40px] opacity-40 bg-gray-400">
                    {/* Vertical line */}
               </div>
           <div  className='bg-gray-400  sm:h-[40px] sm:w-[40px] w-[35px] h-[35px]  rounded-full flex justify-center items-center '>
           <img src={carticon} alt='carticon'  className='w-[20px]' onClick={()=>{navigate("/cart")}} />
           </div>
           
        </div>
      
     
    </div>
    </>
  )
}

export default Navbar