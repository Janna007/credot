import React from 'react'
import logo from '../assets/logo1.png'
import usericon from '../assets/usericon.png'
import carticon from '../assets/carticon.png'

function Navbar() {
  return (
    <>
    <div className='min-h-[90px]  pt-[34px] flex gap-[750px] overflow-hidden'>
  
        <img src={logo} alt='logo'  className='w-[134px] h-[48px] ml-[180px] '/>


        <div className='flex gap-[20px]  '>

            <div className='bg-gray-400 h-[40px] w-[40px] rounded-full flex justify-center items-center ' >
            <img src={usericon} alt='usericon'  className='w-[20px]'/>
            </div>
            <div className="w-[1px] h-[40px] opacity-40 bg-gray-400">
                    {/* Vertical line */}
               </div>
           <div  className='bg-gray-400  h-[40px] w-[40px] rounded-full flex justify-center items-center '>
           <img src={carticon} alt='carticon'  className='w-[20px]' />
           </div>
           
        </div>
      
     
    </div>
    </>
  )
}

export default Navbar